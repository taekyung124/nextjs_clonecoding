import * as React from 'react';
import styles from '@/components/molecule/storeItem/StoreItem.module.scss';

import {Thumb, ThumbProps} from "@/components/atomic/thumb/Thumb";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {Box} from "@/components/atomic/box/Box";
import {Table} from "@/components/molecule/table/Table";
import type { TableCell } from "@/components/molecule/table/Table";
import {Stext} from "@/components/atomic/stext/Stext";
import {TextButton} from "@/components/atomic/textButton/TextButton";

type StoreThumbProps = Pick<ThumbProps, 'imgSrc' | 'href' | 'hasCountProd' | 'countProdVal' | 'thumbClass'>;

interface StoreItemProps extends StoreThumbProps {
	type: 'list' | 'detail';
	storeName?: string;
	btnWish?: boolean;
	storeLocation?: string;
	locationCopy?: boolean;
	guideUrl?: string;
	chatUrl?: string;
	productsUrl?: string;
	tableContents?: TableCell[][];
	grayBoxContents?: string | React.ReactNode;
}

export const StoreItem: React.FC<StoreItemProps> = ({
	type, storeName, storeLocation, locationCopy, btnWish, tableContents, grayBoxContents,
	guideUrl ='javascript:', chatUrl ='javascript:', productsUrl ='javascript:',
	// Thumb
	imgSrc, hasCountProd = true, countProdVal, thumbClass, href
}) => {
	const handleCopy = (text: string) => {
		if (!text) return;
		navigator.clipboard.writeText(text)
			.then(() => alert("주소가 복사되었습니다."))
			.catch(err => console.error("복사 실패:", err));
	};

	return (
		<div className={[styles.storeItem, styles[type]].join(' ')}>
			{type === 'list' && (
				<Thumb type={'fixed'} fixedHeight ={'47.761%'}
					   hasCountProd={hasCountProd} countProdVal={countProdVal}
					   imgSrc={imgSrc} altText={'매장 이미지'} thumbClass={thumbClass}
					   btnLink={true} href={href}
				/>
			)}
			{type === 'detail' && (
				<Thumb type={'fluid'}
					   hasCountProd={false}
					   imgSrc={imgSrc} altText={'매장 이미지'} thumbClass={thumbClass}
					   btnLink={false}
				/>
			)}
			<div className={styles.infoBox}>
				<div className={styles.storeInfo}>
					<div className={styles.storeName}>
						<span className={styles.name}>{storeName}</span>
						{btnWish && <EtcButton name="wish" color="red" iconSize={20} />}
					</div>
					{storeLocation &&
						<div className={styles.storeLocation}>
							{(type === 'detail' && locationCopy) ? (
								<TextButton
									text={storeLocation}
									size={'lg'} color={'black'} afterIcon={'copy'}
									addCommClass={'fwLt'}
									onClick={() => handleCopy(storeLocation)}
								/>
							) : (
								<span className={styles.location}>{storeLocation}</span>
							)}
						</div>
					}
				</div>
				{type === 'detail' && (
					<div className={styles.storeDetailCont}>
						{grayBoxContents && (
							<Box size={'md'} color={'gray'} mt={'md'} child={
								<Stext size={'Sm'} color={'Black'} text={grayBoxContents} />
							} />
						)}
						{tableContents && (
							<Table
								wapperType={'Info'}
								tblType={'Info'}
								caption={`${storeName} 정보`}
								colWidth={['90px', 'auto']}
								tbody={tableContents}
							/>
						)}
					</div>
				)}
				<div className={styles.barFlexGroup}>
					{type === 'list' && (
						<>
							<span className={styles.barBox}>
								<a href={guideUrl} className={styles.storeLink}>
									<span className={[styles.icon, styles.store].join(' ')}></span>
									<span className={styles.text}>매장안내</span>
								</a>
							</span>
							<span className={styles.barBox}>
								<a href={chatUrl} className={styles.storeLink}>
									<span className={[styles.icon, styles.chat].join(' ')}></span>
									<span className={styles.text}>카톡상담</span>
								</a>
							</span>
							<span className={styles.barBox}>
								<a href={productsUrl} className={styles.storeLink}>
									<span className={[styles.icon, styles.shop].join(' ')}></span>
									<span className={styles.text}>보유상품</span>
								</a>
							</span>
						</>
					)}
					{type === 'detail' && (
						<>
							<span className={styles.barBox}>
								<a href={guideUrl} className={styles.storeLinkLg}>
									<span className={[styles.icon, styles.chat].join(' ')}></span>
									<span className={styles.text}>카톡상담</span>
								</a>
							</span>
							<span className={styles.barBox}>
								<a href={chatUrl} className={styles.storeLinkLg}>
									<span className={[styles.icon, styles.call].join(' ')}></span>
									<span className={styles.text}>전화하기</span>
								</a>
							</span>
							<span className={styles.barBox}>
								<a href={productsUrl} className={styles.storeLinkLg}>
									<span className={[styles.icon, styles.share].join(' ')}></span>
									<span className={styles.text}>공유하기</span>
								</a>
							</span>
						</>
					)}
				</div>
			</div>
		</div>
	)
}