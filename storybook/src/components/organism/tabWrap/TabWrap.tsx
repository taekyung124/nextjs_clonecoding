import * as React from 'react';
import styles from "@/components/organism/tabWrap/TabWrap.module.scss";

import {SwiperWrap} from "@/components/organism/swiperWrap/SwiperWrap";
import { StickyWrap } from "@/components/organism/stickyWrap/StickyWrap";

export type TabMenu = {
	text?: string;
	val?: string;
	href?: string;
	isDisabled?: boolean;
}

interface TabWrapProps {
	type?: 'line' | 'pill' | 'boxSm' | 'boxLg';
	align?: 'auto' | 'justify' | 'col2' | 'col3 ';
	isAnchor?: boolean;
	isSticky?: boolean;
	stickyTop?: number;
	filterTab?: boolean;
	tabs?: TabMenu[];
	tabContent?: React.ReactNode[];
}

export const TabWrap: React.FC<TabWrapProps> = ({
	type = 'line', align = 'auto',
	isAnchor, filterTab,
	tabs = [], tabContent,
	isSticky, stickyTop = 0,
}) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const handleTabClick = (idx: number, isDisabled?: boolean) => {
		if (isDisabled) return;

		setActiveIndex(idx);

		if (isAnchor) {
			const target = document.getElementById(`tab-content-${idx}`);
			const stickyEl = document.querySelector(`.${styles.tabs}`);

			if (target) {
				const targetRect = target.getBoundingClientRect();
				const currentScroll = window.scrollY;
				const stickyOffset = stickyTop || 0;
				const tabHeight = stickyEl?.clientHeight || 0;

				const offset = targetRect.top + currentScroll - (stickyOffset + tabHeight);

				window.scrollTo({
					top: offset,
					behavior: 'smooth'
				});
			}
		}
	};

	const renderTabMenu = (tab: TabMenu, idx: number) => {
		const { text, val, isDisabled } = tab;
		const isActive = activeIndex === idx;

		const commonClass = [
			styles.tabLink,
			isActive ? styles.active : '',
			isDisabled ? styles.disabled : '',
		].join(' ');

		return (
			<button
				key={idx}
				type="button"
				className={commonClass}
				disabled={isDisabled}
				onClick={() => handleTabClick(idx, isDisabled)}
			>
				<span className={styles.text}>{text}</span>
				{val && <span className={styles.val}>{val}</span>}
			</button>
		);
	};

	const renderTabs = () => {
		return (
			<>
				{align === 'auto' ? (
					<SwiperWrap
						type={'auto'}
						addClass={styles.tabs}
						slideClass={styles.tabItem}
						items={tabs.map((tab, idx) => renderTabMenu(tab, idx))}
					/>
				) : (
					<ul className={styles.tabs}>
						{tabs.map((tab, idx) => (
							<li key={idx} className={styles.tabItem}>
								{renderTabMenu(tab, idx)}
							</li>
						))}
					</ul>
				)}
			</>
		);
	};

	// TODO : storybook 내비게이션 사라지는 이슈 있음, 페이지에서 사용 시 테스트 필요
	/*const handleTabClick = (idx: number, e: React.MouseEvent, href?: string, isDisabled?: boolean) => {
		if (!isAnchor && isDisabled) e.preventDefault();
		if (!isAnchor) setActiveIndex(idx);

		if (isAnchor) {
			const target = document.getElementById(`tab-content-${idx}`);
			if (target) {
				target.scrollIntoView({behavior: 'smooth'});
			}
		}
	};*/
	return (
		<div className={[styles.tabWrap, styles[type], styles[align]].join(' ')}>
			{isSticky ? (
				<StickyWrap
					top={stickyTop}
					className={styles.stickyArea}
					zIndex={20}
				>
					{renderTabs()}
				</StickyWrap>
			) : (
				renderTabs()
			)}
			{!filterTab &&
				(tabContent?.map((content, idx) => (
					<div
						key={idx}
						id={`tab-content-${idx}`}
						className={styles.tabContent}
						hidden={!isAnchor && activeIndex !== idx}
					>
						{content}
					</div>
				)))
			}
		</div>
	)
}