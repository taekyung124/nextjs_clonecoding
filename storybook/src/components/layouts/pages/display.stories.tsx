import * as React from 'react';
import {useState} from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

// layouts
import {Sub} from "@/components/layouts/templates/Sub";
import type {GnbProps, HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

// organism
import {SwiperWrap} from "@/components/organism/swiperWrap/SwiperWrap";


// molecule
import {DisplayBanner} from "@/components/molecule/displayBanner/DisplayBanner";
import {ListHeader} from "@/components/molecule/listHeader/ListHeader";
import {GridList} from "@/components/molecule/gridList/GridList";
import {ProdItem} from "@/components/molecule/prodItem/ProdItem";

// atomic
import {Box} from "@/components/atomic/box/Box";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {Stext} from "@/components/atomic/stext/Stext";
import {Button} from "@/components/atomic/button/Button";
import {TextButton} from "@/components/atomic/textButton/TextButton";
import {StickyWrap} from "@/components/organism/stickyWrap/StickyWrap";

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
		title: "전시 타이틀",
		hasGnb: true,
		items: gnbItems,
		bgTransparent: true,
		headerButtonOrder: [
			{ btnSearchUrl: "javascript:" },
			{ btnShareUrl: "javascript:" },
		],
	};

	const [value, setValue] = React.useState('');
	const [isRow, setIsRow] = useState(false);

	const handleToggle = (index: number) => {
		if (index === 0) {
			setIsRow(prev => !prev);
		}
	};

	return (
		<Sub headerProps={subHeaderProps}>
			<ContentBox size={'zero'} hasInner={false}>
				<SwiperWrap
					items={[
						<DisplayBanner prod="newUpdate" />,
						<DisplayBanner
							btnText="버튼명"
							subText="마케팅 관련 서브 타이틀이 들어갑니다. 마케팅 관련 서브 타이틀이 들어갑니다."
							title="일이삼사오육칠팔구십일이삼사오육칠팔구십"
						/>,
						<DisplayBanner brand="chanel" />,
						<DisplayBanner brand="rolex" />
					]}
					type="fraction" fractionPos="sm"
				/>
			</ContentBox>
			<ContentBox type={'divider'} size={'zero'}>
				// 필터 영역~~
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<ContentBox size={'zero'} pb={'Sm'} hasInner={false}>
					<ListHeader
						toggle={['거래 진행중 제외', '보고구매 가능', '거래 진행중 제외', '보고구매 가능']}
						onListViewToggle={() => setIsRow(prev => !prev)}
					/>
				</ContentBox>
				<ContentBox type={'line'} size={7} hasInner={false}>
					<StickyWrap paddingY={7} top={60}
								children={<ListHeader
									countNum="2,750"
									hasFilter
									onChange={value => setValue(value)}
									placeholder="최신 등록순"
									selectSlots={[{
										label: '최신 등록순',
										value: '최신 등록순'
									}, {
										label: '최근 가격조정순',
										value: '최근 가격조정순'
									}, {
										label: '인기 클릭순',
										value: '인기 클릭순'
									}, {
										label: '할인률순',
										value: '할인률순'
									}, {
										label: '낮은 가격순',
										value: '낮은 가격순'
									}, {
										label: '높은 가격순',
										value: '높은 가격순'
									}]}
									value={value}
								/>
								}
					/>
				</ContentBox>
				<GridList type={isRow ? 'row' : 'col2'} gap={'prod'} mt={20}
						  items={[
							  <ProdItem direction={isRow ? 'row' : 'col'} imgSrc="prod_5by5" squareSize={isRow ? 'Md' : 'auto'}
										brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
										btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk
										discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
										prodState="stop" sizeInfo="230" uid={123456}
										title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
										topBadgeText={['badge01', 'badge02']}
							  />,
							  <ProdItem direction={isRow ? 'row' : 'col'} imgSrc="prod_5by5" squareSize={isRow ? 'Md' : 'auto'}
										brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
										btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk
										discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
										sizeInfo="230" uid={123456}
										title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
										topBadgeText={['badge01', 'badge02']}
							  />,
							  <ProdItem direction={isRow ? 'row' : 'col'} imgSrc="prod_5by5" squareSize={isRow ? 'Md' : 'auto'}
										brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
										btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12}
										loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
										sizeInfo="230" uid={123456}
										title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
										topBadgeText={['badge01', 'badge02']}
							  />,
							  <ProdItem direction={isRow ? 'row' : 'col'} imgSrc="prod_5by5" squareSize={isRow ? 'Md' : 'auto'}
										brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
										btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk
										discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
										prodState="ongoing" sizeInfo="230" uid={123456}
										title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
										topBadgeText={['badge01', 'badge02']}
							  />
						  ]}
				/>
			</ContentBox>
		</Sub>
	)
}