import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Loading} from "@/components/organism/loading/Loading";

import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {Button} from "@/components/atomic/button/Button";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

const meta = {
	title: 'Organism/Loading',
	component: Loading,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		isOpen: {
			control: 'boolean'
		},
		duration: {
			control: 'number'
		},
		onClose: {
			control: 'object',
		}
	}
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const LoadingDemo: StoryFn = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isOpenDuration, setIsOpenDuration] = React.useState(false);
	const subHeaderProps: HeaderProps = {
		type: "sub",
		title: "Loading",
		hasGnb: false,
		headerButtonOrder: [
			{ btnHomeUrl: "javascript:" },
			{ btnSearchUrl: "javascript:" },
			{ btnShareUrl: "javascript:" },
			{ btnFindIdUrl: "javascript:" },
		],
	};

	return (
		<>
			<Sub headerProps={subHeaderProps}>
				<ContentBox size={'Md'} hasInner={true}>
					<Button
						color="green" size="md" tag="button" text="Loading 실행"
						onClick={() => setIsOpen(true)}
					/>
				</ContentBox>
				<ContentBox size={'Md'} hasInner={true}>
					<Button
						color="green" size="md" tag="button" text="Loading 실행(5초 후 자동 닫힘)"
						onClick={() => setIsOpenDuration(true)}
					/>
					<div style={{height: '500px'}}>aa 스크롤 테스트용</div>
					<div style={{height: '500px'}}>aa 스크롤 테스트용</div>
				</ContentBox>
			</Sub>
			<Loading
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
					console.log('Loading closed');
				}}
			/>
			<Loading
				isOpen={isOpenDuration}
				duration={5000} // 5초 후 자동 닫힘
				onClose={() => {
					setIsOpenDuration(false);
					console.log('Loading duration closed');
				}}
			/>
		</>
	)

}