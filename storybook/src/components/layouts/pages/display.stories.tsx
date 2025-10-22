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

// atomic
import {Box} from "@/components/atomic/box/Box";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {Stext} from "@/components/atomic/stext/Stext";
import {Button} from "@/components/atomic/button/Button";
import {TextButton} from "@/components/atomic/textButton/TextButton";

const meta = {
	title: 'Pages/Display',
	component: Sub,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Sub>;


export default meta;
type Story = StoryObj<typeof Sub>;

export const Display: StoryFn = () => {
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
			{ type: 'th', content: '결제혜택', scope: 'row' },
			{ type: 'td', content: <>
					<TextButton tag={'a'} href={'javascript:'}
						color="black" size="lg" udlLink addCommClass={'fwLt'}
						text="가상계좌 결제시 결제금액 1% 추가적립(회원전용)" />
					<br />
					<Stext color={'Black'} text={'N Pay 결제시 결제금액 1% 네이버포인트 추가적립'} />
				</> },
		],
		[
			{ type: 'th', content: '보유 포인트', scope: 'row' },
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
				<ContentBox type={'line'} size={'Md'} hasInner={false}>
					<Table wapperType={'Info'} tblType={'Info'} caption={'tblInfoLineTop 타입 테이블'} colWidth={['94px', 'auto']} tbody={InfoLineTopTbodyData} />
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
				<ContentBox size={'zero'} pb={'Md'}>

				</ContentBox>
			</ContentBox>
		</Sub>
	)
}