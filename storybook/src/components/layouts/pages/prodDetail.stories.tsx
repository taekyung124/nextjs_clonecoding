import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import styles from "@/components/layouts/pages/pages.module.scss";

// layouts
import {Sub} from "@/components/layouts/templates/Sub";
import type {GnbProps, HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

// organism
import {SwiperWrap} from "@/components/organism/swiperWrap/SwiperWrap";
import {TabWrap} from "@/components/organism/tabWrap/TabWrap";

// molecule
import {Table, TableCell} from "@/components/molecule/table/Table";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {InfoTextList} from "@/components/molecule/infoTextList/InfoTextList";
import {StoreItem} from "@/components/molecule/storeItem/StoreItem";
import {GridList} from "@/components/molecule/gridList/GridList";

// atomic
import {Box} from "@/components/atomic/box/Box";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {Title} from "@/components/atomic/title/Title";
import {Stext} from "@/components/atomic/stext/Stext";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {TextButton} from "@/components/atomic/textButton/TextButton";
import {Icon} from "@/components/atomic/icon/Icon";
import {Badge} from "@/components/atomic/badge/Badge";
import {InfoTabContents} from "@/components/layouts/templates/pages/prodDetail/InfoTabContents";
import {InquiryTabContents} from "@/components/layouts/templates/pages/prodDetail/InquiryTabContents";
import {NoticeTabContents} from "@/components/layouts/templates/pages/prodDetail/NoticeTabContents";

const meta = {
	title: 'Pages/ProdDetail',
	component: Sub,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Sub>;


export default meta;
type Story = StoryObj<typeof Sub>;

export const ProdDetail: StoryFn = () => {
	// header
	const gnbItems: GnbProps['items'] = [
		{text: '업데이트', href: 'javascript:', isNew: true,},
		{text: '가격인하', href: 'javascript:',},
		{text: '미사용신품', href: 'javascript:',},
		{text: '핫딜', href: 'javascript:',},
		{text: '아울렛', href: 'javascript:',},
		{text: '롤렉스', href: 'javascript:',},
		{text: '에르메스', href: 'javascript:',},
		{text: '샤넬', href: 'javascript:',},
		{text: '이벤트', href: 'javascript:',},
		{text: '내명품팔기', href: 'javascript:',},
		{text: '전국직영매장', href: 'javascript:',},
		{text: '명품케어서비스', href: 'javascript:',}
	];

	const subHeaderProps: HeaderProps = {
		type: "sub",
		title: "",
		hasGnb: true,
		items: gnbItems,
		headerButtonOrder: [
			{ btnHomeUrl: "javascript:" },
			{ btnSearchUrl: "javascript:" },
			{ btnShareUrl: "javascript:" },
		],
	};

	// table
	const InfoLineTopTbodyData: TableCell[][] = [
		[
			{ type: 'th', content: '포인트', scope: 'row' },
			{ type: 'td', content: '최대 2,425,000P 적립' },
		],
		[
			{ type: 'th', content: <>
					결제혜택 <EtcButton name={'icon'} offscreen="더보기" icon={'tooltip'} iconSize={16} btnSize={20} />
				</>, scope: 'row' },
			{ type: 'td', content: <>
					<TextButton tag={'a'} href={'javascript:'}
						color="black" size="lg" udlLink addCommClass={'fwLt'}
						text="가상계좌 결제시 결제금액 1% 추가적립(회원전용)" />
					<br />
					<Stext color={'Black'} text={'N Pay 결제시 결제금액 1% 네이버포인트 추가적립'} />
				</> },
		],
		[
			{ type: 'th', content: <>
					보유 포인트 <EtcButton name={'icon'} offscreen="더보기" icon={'tooltip'} iconSize={16} btnSize={20} />
				</>, scope: 'row' },
			{ type: 'td', content: <>
					<TextButton tag={'a'} href={'javascript:'}
						color="black" size="lg" udlLink addCommClass={'fwLt'}
						text="최대 6개월 무이자 할부 혜택" />
					<br />
					<Stext color={'Black'} text={'최대 6개월 무이자 할부 혜택'} />
				</> },
		]
	]

	return (
		<Sub headerProps={subHeaderProps}>
			{/* s: thumbnail */}
			<ContentBox size={'zero'} pb={'Md'} hasInner={false}>
				<SwiperWrap
					items={[
						<Thumb altText="썸네일 이미지" imgSrc="prod_5by5" squareSize="auto" type="square" />,
						<Thumb altText="썸네일 이미지" imgSrc="prod_5by5" squareSize="auto" type="square" />,
						<Thumb altText="썸네일 이미지" imgSrc="prod_5by5" squareSize="auto" type="square" />,
						<Thumb altText="썸네일 이미지" imgSrc="prod_5by5" squareSize="auto" type="square" />,
						<Thumb altText="썸네일 이미지" imgSrc="prod_5by5" squareSize="auto" type="square" />
					]}
					type="fraction" fractionPos="center"
				/>
			</ContentBox>
			{/* e: thumbnail */}

			{/* s: 상품정보 */}
			<ContentBox size={'zero'} pb={'Md'}>
				<ContentBox size={'zero'} pb={'Md'} hasInner={false}>
					<div className={styles.prodInfoWrap}>
						<EtcButton name={'grade'} text="A"/>
						<div className={styles.badgeGroup}>
							<Badge size={'xl'} color={'lightGray'} text={'무료배송'} />
							<Badge size={'xl'} color={'lightGray'} text={'추가포인트'} />
							<Badge size={'xl'} color={'lightGray'} text={'클리닝'} />
						</div>
						<div className={styles.infoArea}>
							<div className={styles.prodBrand}>
								<div className={styles.brandName}>DIOR</div>
								<EtcButton name="wish" color="red" iconSize={20} />
							</div>
							<div className={styles.prodName}>오블리크 북 토트백 라지</div>
							<div className="barGroup">
								<span className="barText">1462286</span>
								<span className="barText fwMd">온라인 판매점</span>
								<span className="barText fwMd fcSpot">반포신세계점 이동중</span>
								<span className="barText fcBlack">KR 230</span>
							</div>
							<div className={styles.prodPrice}>
								<span className={styles.originPrice}>
									<span className={styles.val}>2.035,000</span>
									<span className={styles.unit}>원</span>
								</span>
								<span className={styles.percent}>24%</span>
								<GoodsGroup addCommClass="fwSb fcSpot" size="size4xl" val="112,000,000" unit="원" />
							</div>
						</div>
					</div>
				</ContentBox>
				<ContentBox type={'line'} size={'zero'} pt={'Md'} hasInner={false}>
					<Table wapperType={'Info'} tblType={'Info'} caption={'tblInfoLineTop 타입 테이블'} colWidth={['108px', 'auto']} tbody={InfoLineTopTbodyData} />
					<Box color={'green'} size={'md'} mt={'md'} child={
						<FlexInfoWrap align={'center'} marginLeft={16} isClear={true}
									  leftArea={
										  <Icon size={30} src={'prod_info_no_return'} />
									  }
									  rightArea={
										  <Stext size={'Sm'} color={'Black'}
												 text={<>이 상품은 <span className="fwSb">반품 불가 상품</span>입니다.
													 <br />주문 시 신중한 고민 후 주문 바랍니다.</>}
										  />
									  }
						/>
					} />
				</ContentBox>
			</ContentBox>
			{/* e: 상품정보 */}

			{/* s: 사용 가능 쿠폰 */}
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'사용 가능 쿠폰'} />} />
				<Box color={'gray'} size={'md'} child={
					<InfoTextList gap={'md'} items={[
						{
							type: 'dot', text:
								<FlexInfoWrap align={'center'} marginLeft={15} leftArea={
									<Stext text={<>
										샤넬 전 상품 2만원 할인 <Stext addClass={'lhMd'} text={'(~12.31)'} size={'Sm'} />
									</>} color={'Black'} />
								} rightArea={
									<GoodsGroup addCommClass="fwSb fcBlack" size="sizeMd" unit="원" val="20,000" />
								} />
						},
						{
							type: 'dot', text:
								<FlexInfoWrap align={'center'} marginLeft={15} leftArea={
									<Stext text={<>
										모바일 앱 서비스 개편 정회원 전환 이벤트 쿠폰 <Stext addClass={'lhMd'} text={'(~12.31)'} size={'Sm'} />
									</>} color={'Black'} />
								} rightArea={
									<GoodsGroup addCommClass="fwSb fcBlack" size="sizeMd" unit="원" val="10,000" />
								} />
						},
						{
							type: 'dot', text:
								<FlexInfoWrap align={'center'} marginLeft={15} leftArea={
									<Stext text={<>
										배송지연에 따른 고객 보상 쿠폰 <Stext addClass={'lhMd'} text={'(~12.31)'} size={'Sm'} />
									</>} color={'Black'} />
								} rightArea={
									<GoodsGroup addCommClass="fwSb fcBlack" size="sizeMd" unit="원" val="10,000" />
								} />
						}
					]} />
				} />
			</ContentBox>
			{/* e: 사용 가능 쿠폰 */}

			{/* s: 주요 부속품 */}
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'주요 부속품'} />} />
				<GridList type={'col4'} gap={20} items={[
					<div className={[styles.prodCompositionWrap, styles.isActive].join(' ')}>
						<div className={styles.iconBox}>
							<Icon size={30} src={'prod_composition_box_white'} />
						</div>
						<div className={styles.infoBox}>박스</div>
					</div>,
					<div className={styles.prodCompositionWrap}>
						<div className={styles.iconBox}>
							<Icon size={30} src={'prod_composition_case_gray'} />
						</div>
						<div className={styles.infoBox}>케이스</div>
					</div>,
					<div className={[styles.prodCompositionWrap, styles.isActive].join(' ')}>
						<div className={styles.iconBox}>
							<Icon size={30} src={'prod_composition_dust_bag_white'} />
						</div>
						<div className={styles.infoBox}>더스트백</div>
					</div>,
					<div className={styles.prodCompositionWrap}>
						<div className={styles.iconBox}>
							<Icon size={30} src={'prod_composition_guarantee_gray'} />
						</div>
						<div className={styles.infoBox}>캐런티카드</div>
					</div>
				]} />
			</ContentBox>
			{/* e: 주요 부속품 */}

			{/* s: banner swiper */}
			<ContentBox type={'divider'} size={'zero'} hasInner={false}>
				<SwiperWrap
					items={[
						<Thumb btnLink altText="썸네일 이미지" imgSrc="prod_banner" type="fluid" />,
						<Thumb btnLink altText="썸네일 이미지" imgSrc="prod_banner" type="fluid" />
					]}
					type="fraction"
				/>
			</ContentBox>
			{/* e: banner swiper */}

			{/* s: 상품 판매처 */}
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'상품 판매처'} />} />
				<StoreItem
					hasCountProd={false}
					imgSrc="store_detail_01"
					storeLocation="서울시 강남구 청담동 78번지 1층"
					storeName="압구정점"
					type="list"
				/>
			</ContentBox>
			{/* e: 상품 판매처 */}

			{/* s: 배송 정보 */}
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'배송 정보'} />} />
				<GridList gap={14}
						  items={[
							  <FlexInfoWrap align={'center'} marginLeft={14} isClear={true}
											leftArea={<div className={styles.deliveryIconBox}>
												<Icon size={30} src={'prod_delivery_info'} />
											</div>}
											rightArea={<TitleWrap mb={'zero'} child={<>
										  <Title lang="kor" size="md" text={<>일반 배송 4,000원 <EtcButton name={'icon'} offscreen="더보기" icon={'tooltip'} iconSize={16} btnSize={20} /></>} type="stitle" />
										  <Stext size="Sm" text="꼼꼼한 검수 후 배송 2~3일 내 출고" />
									  </>} />}
						/>,
						<FlexInfoWrap align={'center'} marginLeft={14} isClear={true}
									  leftArea={<div className={styles.deliveryIconBox}>
										  <Icon size={30} src={'prod_delivery_info_premium'} />
									  </div>}
									  rightArea={<TitleWrap mb={'zero'} child={<>
										  <Title lang="kor" size="md" text={<>프리미엄 배송 30,000원 <EtcButton name={'icon'} offscreen="더보기" icon={'tooltip'} iconSize={16} btnSize={20} /></>} type="stitle" />
										  <Stext size="Sm" text="원하는 시간에 발렉스사 보안 직원이 배송" />
									  </>} />}
						/>,
						<FlexInfoWrap align={'center'} marginLeft={14} isClear={true}
									  leftArea={<div className={styles.deliveryIconBox}>
										  <Icon size={30} src={'prod_delivery_info_store'} />
									  </div>}
									  rightArea={<TitleWrap mb={'zero'} child={<>
										  <Title lang="kor" size="md" text={<>매장에서 보고구매 무료 <EtcButton name={'icon'} offscreen="더보기" icon={'tooltip'} iconSize={16} btnSize={20} /></>} type="stitle" />
										  <Stext size="Sm" text="원하는 매장으로 물류이동 후 고객이 직접 보고 구매" />
									  </>} />}
						/>,
					]}
				/>
			</ContentBox>
			{/* e: 배송 정보 */}

			{/* s: 상품 등급 */}
			<ContentBox type={'divider'} size={'Md'} bottomLine={true}>
				<TitleWrap mb={'md'} child={<Title text={'상품 등급'} />} />
				<GridList gap={'xs'} items={[
					<div className={styles.prodGradeBox}>
						<div className={styles.grade}>
							<Title lang="eng" size="xs" text="N" type="ctitle" />
						</div>
						<div className={styles.desc}>
							<Stext size="Sm" text="미사용신품" />
						</div>
					</div>,
					<div className={styles.prodGradeBox}>
						<div className={styles.grade}>
							<Title lang="eng" size="xs" text="S" type="ctitle" addClass={'fcDarkGray'} />
						</div>
						<div className={styles.desc}>
							<Stext size="Sm" text="사용감이 느껴지지 않는 상품으로, 중고 등급 중 최상의 컨디션" />
						</div>
					</div>,
					<div className={[styles.prodGradeBox, styles.isActive].join(' ')}>
						<div className={styles.grade}>
							<Title lang="eng" size="xs" text="A" type="ctitle" addClass={'fcSpot'}/>
						</div>
						<div className={styles.desc}>
							<Stext size="Sm" text="적은 사용감으로 전체적으로 양호한 컨디션" addClass={'fcBlack'} />
						</div>
					</div>,
					<div className={styles.prodGradeBox}>
						<div className={styles.grade}>
							<Title lang="eng" size="xs" text="B" type="ctitle" addClass={'fcDarkGray'} />
						</div>
						<div className={styles.desc}>
							<Stext size="Sm" text="때, 스크래치, 마모 등 사용감이 다소 느껴짐" />
						</div>
					</div>,
					<div className={styles.prodGradeBox}>
						<div className={styles.grade}>
							<Title lang="eng" size="xxs" text="USED" type="ctitle" addClass={'fcDarkGray'} />
						</div>
						<div className={styles.desc}>
							<Stext size="Sm" text="시계, 주얼리 등 등급을 판단할 수 없는 상품" />
						</div>
					</div>
				]} />
			</ContentBox>
			{/* e: 상품 등급 */}

			{/* s: tabs */}
			<TabWrap
				type="line" align="justify" isAnchor={true} isSticky stickyTop={60}
				tabs={[ { text: '상품정보' },  { text: '문의하기' },  { text: '유의사항' }, ]}
				tabContent={[
					<InfoTabContents />,
					<InquiryTabContents />,
					<NoticeTabContents />,
				]}
			/>
			{/* e: tabs */}
		</Sub>
	);
}