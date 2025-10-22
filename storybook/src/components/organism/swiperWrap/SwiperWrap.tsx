import * as React from 'react';
import styles from "@/components/organism/swiperWrap/SwiperWrap.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperWrapProps {
	type: 'auto' | 'dot' | 'fraction' | 'card';
	fractionPos?: 'lg' | 'sm' | 'center';
	loop?: boolean;
	spaceBetween?: number;
	centeredSlides?: boolean;
	hasPreview?: boolean;
	items?: React.ReactNode[];
	addClass?: string;
	slideClass?: string;
}

export const SwiperWrap: React.FC<SwiperWrapProps> = ({
	type = 'auto', fractionPos,
	loop = false, spaceBetween = 0,
	centeredSlides = false,
	hasPreview = false,
	items = [],
	addClass, slideClass
}) => {
	const id = React.useId();
	const paginationClass = `${styles.pagination}-${id}`;

	return (
		<div className={[styles.swiper, styles[type], addClass || ''].join(' ')}>
			<Swiper
				className={styles.swiperWrapper}
				slidesPerView="auto"
				loop={loop}
				spaceBetween={type === 'card' ? 10 : spaceBetween}
				centeredSlides={type === 'card' ? true : centeredSlides}
				modules={[Pagination]}
				pagination={
					type === 'dot'
						? { el: `.${paginationClass}`, type: 'bullets', bulletClass: styles.bullet, bulletActiveClass: styles.bulletActive }
						: type === 'fraction'
							? {
								el: `.${paginationClass}`,
								type: 'fraction',
								renderFraction: (currentClass, totalClass) => `
									<span class="${styles.current} ${currentClass}"></span>
									/
									<span class="${styles.total} ${totalClass}"></span>
								`,
							}
							: false
				}
			>
				{items.map((content, idx) => (
					<SwiperSlide key={idx} className={[styles.swiperSlide, slideClass || ''].join(' ')}>
						{content}
					</SwiperSlide>
				))}
			</Swiper>

			{type === 'dot' && (
				<div className={[styles.pagination, paginationClass].join(' ')}></div>
			)}

			{type === 'fraction' && (
				<div
					className={[
						styles.paginationWrap,
						(fractionPos === 'center' || hasPreview) && styles.center,
						(fractionPos !== 'center' && !hasPreview) ? styles.fractionPos : ''
					].join(' ')}
				>
					<div className={[styles.pagination, paginationClass].join(' ')}></div>
					{hasPreview && (
						<button type="button" className={styles.btnPreview}>
							<span className="offscreen">크게보기</span>
						</button>
					)}
				</div>
			)}
		</div>
	);
};