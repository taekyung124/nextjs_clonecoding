import * as React from 'react';
import styles from "@/components/organism/header/Header.module.scss";

import {StickyWrap} from "@/components/organism/stickyWrap/StickyWrap";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {TextButton} from "@/components/atomic/textButton/TextButton";
import {Gnb, GnbProps} from "@/components/organism/gnb/Gnb";

export type { GnbProps };

export interface SubList {
	title?: string;
	href?: string;
}

export interface HeaderProps extends Pick<GnbProps, 'items'> {
	type: 'main' | 'sub';
	title?: string;
	subDepth?: SubList[];
	hasGnb?: boolean;
	bgTransparent?: boolean;
	hasNewAlarm?: boolean;
	headerButtonOrder?: Record<string, string>[];
	gnbRef?: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({
	type, title, subDepth, hasGnb, items = [], gnbRef,
	bgTransparent = false, hasNewAlarm = false, headerButtonOrder = [],
}) => {
	const [gnbActive, setGnbActive] = React.useState(false);
	const [subActive, setSubActive] = React.useState(false);
	const [isSticky, setIsSticky] = React.useState(false);

	const handleSubToggle = () => {
		setSubActive((prev) => !prev);
	};

	React.useEffect(() => {
		console.log("subActive changed:", subActive);

		if (subActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [subActive]);

	// const renderIconColor = bgTransparent || type === 'main' ? 'white' : type !== 'sub' && gnbActive ? 'black' : 'black';
	let renderIconColor: 'white' | 'black';

	if ((type === 'sub' && bgTransparent)) {
		renderIconColor = 'white';

		if (isSticky) {
			renderIconColor = 'black';
		}
	} else if (type === 'main') {
		renderIconColor = 'white';
		if (gnbActive) {
			renderIconColor = 'black';
		}
	} else {
		renderIconColor = 'black';
	}

	const renderHeader =
		<div className={[styles.headerWrap, gnbActive ? styles.gnbActive : ''].join(' ')}>
			{type === 'sub' && (
				<div className={styles.headerLeft}>
					<EtcButton name={'icon'} icon={`back_${renderIconColor}`} iconSize={24} offscreen={'이전 화면으로 이동'} />
					<div className={styles.pageTitle}>{title}</div>
					{subDepth && <>
						<EtcButton name={'icon'} icon={'arw_down_black'} iconSize={14} btnSize={22}
								   onClick={handleSubToggle}
								   offscreen={'서브 카테고리 메뉴 열기'} addClass={[styles.btnSubDepth, subActive ? styles.isActive : ''].join(' ')} />
						<div className={[styles.subDepthLayer, subActive ? styles.isActive : ''].join(' ')}>
							<ul className={styles.subDepthList}>
								{subDepth.map((item, idx) => (
									<li key={idx} className={styles.subDepthItem}>
										<a href={item.href ? item.href : 'javascript:'} className={styles.subLink}>
											<span className={styles.text}>{item.title}</span>
										</a>
									</li>
								))}
							</ul>
							<div className={styles.subLayerDim}></div>
						</div>
					</>}
				</div>
			)}
			{type === 'main' && (
				<h1 className={styles.logo}>
					<a href="javascript:" className={styles.btnLogo}>
						<span className="offscreen">GUGUS</span>
					</a>
				</h1>
			)}
			<div className={styles.headerRight}>
				{headerButtonOrder.map((btnObj, idx) => {
					const [key, url] = Object.entries(btnObj)[0];

					switch (key) {
						case 'btnHomeUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`home_${renderIconColor}`} iconSize={24} offscreen="홈" />;
						case 'btnSearchUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`search_${renderIconColor}`} iconSize={24} offscreen="검색" />;
						case 'btnShareUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`share_${renderIconColor}`} iconSize={24} offscreen="공유" />;
						case 'btnAlarmUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`alarm_${renderIconColor}`} iconSize={24} offscreen="알림" addClass={hasNewAlarm ? styles.new : ''} />;
						case 'btnSettingUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`setting_${renderIconColor}`} iconSize={24} offscreen="설정" />;
						case 'btnCloseUrl':
							return <EtcButton key={idx} tag="a" href={url} name="icon" icon={`close_${renderIconColor}`} iconSize={24} offscreen="닫기" />;
						case 'btnFindIdUrl':
							return <TextButton key={idx} tag="a" href={url} text="아이디 찾기" />;
						default:
							return null;
					}
				})}
			</div>
		</div>
	return (
		<div
			ref={type === 'sub' && hasGnb ? gnbRef : undefined}
			className={[
				styles.headerWrapper,
				styles[type],
				(bgTransparent && !isSticky) ? styles.transparent : ''
			].join(' ')}
		>
			{type === 'sub' && (
				<>
					{hasGnb && (
						<Gnb isActive={gnbActive} onToggle={setGnbActive} items={items} />
					)}
					<StickyWrap onFixedChange={setIsSticky} children={renderHeader} />
				</>
			)}

			{type === 'main' && (
				<>
					{renderHeader}
				</>
			)}
			{type === 'main' && (
				<StickyWrap onFixedChange={setIsSticky}>
					<Gnb items={items} isActive={gnbActive} onToggle={setGnbActive} isTransparent={!isSticky} />
				</StickyWrap>
			)}
		</div>
	)
}