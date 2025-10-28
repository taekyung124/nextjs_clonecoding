import * as React from 'react';
import styles from "@/components/molecule/prodItem/ProdItem.module.scss";

import {Badge} from "@/components/atomic/badge/Badge";
import {Thumb, ThumbProps} from "@/components/atomic/thumb/Thumb";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";

type ProdThumbProps = Pick<ThumbProps, 'squareSize' | 'imgSrc' | 'btnWish' | 'uiChk' | 'prodState' | 'thumbClass'>;

interface ProdItemProps extends ProdThumbProps {
	direction?: 'row' | 'col';
	topBadgeText?: string | string[];
	btmBadgeText?: string | string[];
	prodLank?: number;
	uid?: number;
	brand?: string;
	title?: string;
	sizeInfo?: string;
	priceOrigin?: string;
	priceBadge?: string;
	price?: string;
	discount?: number;
	loanPrice?: string;
	btnLink?: boolean;
	href?: string;
}

export const ProdItem: React.FC<ProdItemProps> = ({
	direction, topBadgeText, btmBadgeText,
	prodLank, uid, brand, title, sizeInfo,
	priceOrigin, priceBadge, price, discount, loanPrice,
	btnLink, href,
	// ProdThumbProps
	squareSize, imgSrc, btnWish, uiChk, prodState, thumbClass
}) => {
	const infoBoxWidth =
		squareSize === 'Xs' ? '96' :
		squareSize === 'Sm' ? '116' :
		squareSize === 'Md' ? '126' :
		squareSize === 'Lg' ? '136' : '0';

	return (
		<div
			className={[styles.prodItem, styles[`${direction}`]].join(' ')}
			style={{ width: direction === 'col' && squareSize !=='auto' ? `${infoBoxWidth}px` : '100%' }}
		>
			{prodLank && <div className={styles.prodLank}>{prodLank}</div>}

			<Thumb
				type={'square'} btnLink={false} altText={`${title} 상품 이미지`}
				squareSize={squareSize} imgSrc={imgSrc} btnWish={btnWish} uiChk={uiChk} prodState={prodState} thumbClass={thumbClass}
			/>

			<div
				className={styles.infoBox}
				style={{ width: direction === 'row' ? 'calc(100% - ' + infoBoxWidth + 'px)' : 'initial' }}
			>
				{direction === 'row' && topBadgeText && (
					<div className={styles.badgeGroup}>
						{Array.isArray(topBadgeText) ? (
							topBadgeText.map((item, index) => (
								<Badge key={`top-${index}`} color="gold" size="xl" text={item} />
							))
						) : (
							<Badge color="gold" size="xl" text={topBadgeText} />
						)}
					</div>
				)}

				{(brand || uid) &&
					<div className={styles.prodInfo}>
						{brand && (<span className={styles.brand}>{brand}</span>)}
						{(uid) && (<span className={styles.uid}> {direction === 'row' ? `(${uid})` : uid}</span>)}
					</div>
				}

				<div className={styles.title}>{title}</div>

				{sizeInfo && <div className={styles.sizeInfo}>SIZE {sizeInfo}</div>}

				<div className={styles.prodPrice}>
					{priceOrigin && <div className={styles.origin}><GoodsGroup size={'sizeSm'} val={priceOrigin} addCommClass={'fcGray tdLine'} /></div>}
					{priceBadge && <Badge color={"green"} size={'md'} text={priceBadge} />}
					<GoodsGroup size={'sizeMd'} val={price} addCommClass={'fcSpot fwSb'} />
					{discount && <span className={styles.percent}>{discount}%</span>}
				</div>

				{(loanPrice && direction === 'col') && (
					<div className={styles.loanPrice}>
						<span className={styles.label}>대출 금액</span>
						<GoodsGroup size={'sizeMd'} val={loanPrice} addCommClass={'fcSpot fwSb'} />
					</div>
				)}

				{btmBadgeText && (
					<div className={styles.badgeGroup}>
						{Array.isArray(btmBadgeText) ? (
							btmBadgeText.map((item, index) => (
								<Badge key={`btm-${index}`} color={"lightGray"} size={'lg'} text={item} />
							))
						) : (
							<Badge color={"lightGray"} size={'lg'} text={btmBadgeText} />
						)}
					</div>
				)}
			</div>

			{btnLink && (
				<a href={href ? href : 'javascript: alert("link");'} className="btnLink">
					<span className="offscreen">상세 바로가기</span>
				</a>
			)}
		</div>
	)
}