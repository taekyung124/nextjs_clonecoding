import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

// layouts
import {Sub} from "@/components/layouts/templates/Sub";
import type {GnbProps, HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

// organism
import {SwiperWrap} from "@/components/organism/swiperWrap/SwiperWrap";


// molecule
import {Table, TableCell} from "@/components/molecule/table/Table";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {InfoTextList} from "@/components/molecule/infoTextList/InfoTextList";

// atomic
import {Box} from "@/components/atomic/box/Box";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {Title} from "@/components/atomic/title/Title";
import {Stext} from "@/components/atomic/stext/Stext";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";
import {Button} from "@/components/atomic/button/Button";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {TextButton} from "@/components/atomic/textButton/TextButton";

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
			<ContentBox size={'zero'} pb={'Md'}>
				<ContentBox size={'zero'} pb={'Md'} hasInner={false}>

				</ContentBox>
				<ContentBox type={'line'} size={'zero'} pt={'Md'} hasInner={false}>
					<Table wapperType={'Info'} tblType={'Info'} caption={'tblInfoLineTop 타입 테이블'} colWidth={['108px', 'auto']} tbody={InfoLineTopTbodyData} />
					<Box color={'green'} size={'md'} mt={'md'} child={
						<FlexInfoWrap align={'center'} marginLeft={16} isClear={true}
							leftArea={
								<></>
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
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'사용 가능 쿠폰'} />} />
				<Box color={'gray'} size={'md'} child={
					<InfoTextList gap={'md'} items={[
						{type: 'dot', text:
								<FlexInfoWrap align={'center'} marginLeft={15} leftArea={
									<Stext text={<>
										샤넬 전 상품 2만원 할인 <Stext addClass={'lhMd'} text={'(~12.31)'} size={'Sm'} />
									</>} color={'Black'} />
								} rightArea={
									<GoodsGroup addCommClass="fwSb fcBlack" size="sizeMd" unit="원" val="20,000" />
								} />
						},
						{type: 'dot', text:
								<FlexInfoWrap align={'center'} marginLeft={15} leftArea={
									<Stext text={<>
										모바일 앱 서비스 개편 정회원 전환 이벤트 쿠폰 <Stext addClass={'lhMd'} text={'(~12.31)'} size={'Sm'} />
									</>} color={'Black'} />
								} rightArea={
									<GoodsGroup addCommClass="fwSb fcBlack" size="sizeMd" unit="원" val="10,000" />
								} />
						},
						{type: 'dot', text:
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
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'주요 부속품'} />} />
			</ContentBox>
			<ContentBox type={'divider'} size={'zero'} hasInner={false}>
				<SwiperWrap
					items={[
						<Thumb btnLink altText="썸네일 이미지" imgSrc="prod_banner" type="fluid" />,
						<Thumb btnLink altText="썸네일 이미지" imgSrc="prod_banner" type="fluid" />
					]}
					type="fraction"
				/>
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'상품 판매처'} />} />

			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'배송 정보'} />} />
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'상품 등급'} />} />
			</ContentBox>
		</Sub>
	)
}