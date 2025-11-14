import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {GridList} from "@/components/molecule/gridList/GridList";
import {ProdItem} from "@/components/molecule/prodItem/ProdItem";
import {StoreItem} from "@/components/molecule/storeItem/StoreItem";

const meta = {
	title: 'Molecule/GridList',
	component: GridList,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['row', 'col2'],
		},
		gap: {
			control: 'inline-radio',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'prod'],
		},
		mt: { control: 'number' },
		items: {
			control: 'object',
		}
	}
} satisfies Meta<typeof GridList>;

export default meta;
type Story = StoryObj<typeof GridList>;

export const Default: Story = {
	args: {
		type: 'row',
		gap: 'md',
		items: [
			<div style={{ background: "#ccc"}}>aaa</div>,
			<div style={{ background: "#ccc"}}>aaa</div>,
			<div style={{ background: "#ccc"}}>aaa</div>,
			<div style={{ background: "#ccc"}}>aaa</div>
		],
	},
	render:(args) => <GridList {...args} />,
}

export const ProdListRow:StoryFn = () => (
	<div style={{width: '500px', margin: '0 auto'}}>
		<GridList
			items={[
				<ProdItem
					direction="row" imgSrc="prod_5by5" prodLank={1}
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					brand="BRAND NAME BRAND NAME BRAND NAME"
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="stop" sizeInfo="230" uid={123456} squareSize="Lg"
					title="prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="row" imgSrc="prod_5by5" prodLank={2}
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					brand="BRAND NAME BRAND NAME BRAND NAME"
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="stop" sizeInfo="230" uid={123456} squareSize="Lg"
					title="prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="row" imgSrc="prod_5by5" prodLank={3}
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					brand="BRAND NAME BRAND NAME BRAND NAME"
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="stop" sizeInfo="230" uid={123456} squareSize="Lg"
					title="prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="row" imgSrc="prod_5by5" prodLank={4}
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					brand="BRAND NAME BRAND NAME BRAND NAME"
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="stop" sizeInfo="230" uid={123456} squareSize="Lg"
					title="prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>
			]}
		/>
	</div>
)

export const ProdListCol2:StoryFn = () => (
	<div style={{width: '500px', margin: '0 auto'}}>
		<GridList
			type={'col2'} gap={'prod'}
			items={[
				<ProdItem
					direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={1}
					brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="stop" sizeInfo="230" uid={123456}
					title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={2}
					brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					sizeInfo="230" uid={123456}
					title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={3}
					brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					sizeInfo="230" uid={123456}
					title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>,
				<ProdItem
					direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={4}
					brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME"
					btmBadgeText={['badge01', 'badge02', 'badge03']}
					btnLink btnWish uiChk
					discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
					prodState="ongoing" sizeInfo="230" uid={123456}
					title="prod title prod title prod title prod title prod title prod title prod title prod title prod title"
					topBadgeText={['badge01', 'badge02']}
				/>
			]}
		/>
	</div>
)

export const StoreList: StoryFn = () => (
	<div style={{ width: '500px', margin: '0 auto' }}>
		<GridList
			items={[
				<StoreItem
					type="list" btnWish countProdVal="9,999"
					grayBoxContents="매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다."
					imgSrc="store_detail_01"
					storeLocation="store location store location store location store location"
					storeName="stores"
					tableContents={[
						[
							{className: 'fcBlack fwMd', content: '전화번호', scope: 'row', type: 'th'},
							{content: '070-8230-2410', type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '영업시간', scope: 'row', type: 'th'},
							{content: <>월~금 : 오전 10시~오후6시<br />토, 공휴일 휴무</>, type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '주소', scope: 'row', type: 'th'},
							{content: '서울시 강남구 청담동 78, 2층', type: 'td'}
						]
					]}
				/>,
				<StoreItem
					type="list" btnWish countProdVal="9,999"
					grayBoxContents="매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다."
					imgSrc="store_detail_01"
					storeLocation="store location store location store location store location"
					storeName="stores"
					tableContents={[
						[
							{className: 'fcBlack fwMd', content: '전화번호', scope: 'row', type: 'th'},
							{content: '070-8230-2410', type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '영업시간', scope: 'row', type: 'th'},
							{content: <>월~금 : 오전 10시~오후6시<br />토, 공휴일 휴무</>, type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '주소', scope: 'row', type: 'th'},
							{content: '서울시 강남구 청담동 78, 2층', type: 'td'}
						]
					]}
				/>,
				<StoreItem
					type="list" btnWish countProdVal="9,999"
					grayBoxContents="매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다."
					imgSrc="store_detail_01"
					storeLocation="store location store location store location store location"
					storeName="stores"
					tableContents={[
						[
							{className: 'fcBlack fwMd', content: '전화번호', scope: 'row', type: 'th'},
							{content: '070-8230-2410', type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '영업시간', scope: 'row', type: 'th'},
							{content: <>월~금 : 오전 10시~오후6시<br />토, 공휴일 휴무</>, type: 'td'}
						],
						[
							{className: 'fcBlack fwMd', content: '주소', scope: 'row', type: 'th'},
							{content: '서울시 강남구 청담동 78, 2층', type: 'td'}
						]
					]}
				/>,
			]}
		/>
	</div>
)