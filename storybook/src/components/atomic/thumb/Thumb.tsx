import * as React from 'react';
import styles from '@/components/atomic/thumb/Thumb.module.scss';

import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {Checkbox} from "@/components/atomic/form/Checkbox";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";

export interface ThumbProps {
	type: 'square' | 'classic' | 'fluid' | 'fixed'; // 1by1 , 4by3, w100:h가변, w100:h고정
	squareSize?: 'Xs' | 'Sm' | 'Md' | 'Lg' | 'auto';
	fixedHeight?: string,
	thumbClass?: string;
	btnLink?: boolean;
	href?: string;
	btnWish?: boolean;
	uiChk?: boolean;
	hasCountProd?: boolean;
	countProdVal?: string;
	prodState?: 'stop' | 'ongoing';
	imgSrc?: string;
	altText?: string;
}

export const Thumb: React.FC<ThumbProps> = ({
	type, squareSize = 'auto', fixedHeight, thumbClass, btnLink = false, href, btnWish = false, uiChk = false, hasCountProd, countProdVal, prodState, imgSrc, altText
}) => {
	const iconName = prodState === 'stop' ? 'pause' : prodState === 'ongoing' ? 'deal' : '';
	const squareSizeClass = type === "square" && squareSize !== 'auto' ? squareSize : '';
	return (
		<div
			className={[
				styles.thumbBox,
				styles[`${type}${squareSizeClass}`],
				styles[thumbClass ? `${thumbClass}` : '']
			].join(' ')}
			style={{ paddingTop: (type === 'fixed' && fixedHeight) || undefined }}
		>
			<img src={`/assets/images/thumb_${imgSrc}.png`} alt={altText} />
			{(type === 'square' && squareSize !== 'Xs' && uiChk) && (
				<div className={styles.uiChkArea}>
					<Checkbox align="default" idx={React.useId()} />
				</div>
			)}
			{(type === 'square' && squareSize !== 'Xs' && btnWish) && (
				<div className={styles.btnWishArea}>
					<EtcButton name="wish" color="red" iconSize={20} />
				</div>
			)}
			{(type === 'square' && squareSize !== 'Sm' && squareSize !== 'Xs' && prodState) && (
				<div className={styles.prodState}>
					<span
						className={styles.icon}
						style={{ backgroundImage: `url(/assets/icons/comm_ico_prod_${iconName}.svg)` }}
					></span>
					<span className={styles.text} >
						{prodState === 'stop' ? '판매일시중지'
							: prodState === 'ongoing' ? '거래진행중'
						: ''}
					</span>
				</div>
			)}
			{(type !== 'square' && hasCountProd) && (
				<span className={styles.countProd}>
					<GoodsGroup size={'sizeXs'} val={countProdVal} unit={'개의 상품 보유'} valClass={'fcGold fwMd'} addCommClass={'fcWhite fwLt'} />
				</span>
			)}
			{btnLink && (type !== 'square' || (type === 'square' && !btnWish && !uiChk)) && (
				<a href={href ? href : 'javascript: alert("link");'} className="btnLink">
					<span className="offscreen">상세 바로가기</span>
				</a>
			)}
		</div>
	)
}