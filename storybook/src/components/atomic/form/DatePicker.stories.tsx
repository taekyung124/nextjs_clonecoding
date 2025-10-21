import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {ReactDatePicker} from "@/components/atomic/form/DatePicker";

import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

const meta = {
	title: 'Atomic/Form/DatePicker',
	component: ReactDatePicker,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		minDate: {
			control: {
				type: 'date',
			}
		},
		maxDate: {
			control: {
				type: 'date',
			}
		},
		isDisabled: {
			control: 'boolean'
		},
		excludeDates: {
			control: 'object',
		}
	}
} satisfies Meta<typeof ReactDatePicker>;

export default meta;
type Story = StoryObj<typeof ReactDatePicker>;

export const Default:Story = {
	args: {
		isDisabled: false,
		excludeDates: ['2025-10-05', '2025-10-10']
	},
	render:(args) => {
		const subHeaderProps: HeaderProps = {
			type: "sub",
			title: "React DatePicker",
			hasGnb: false,
			headerButtonOrder: [
				{ btnHomeUrl: "javascript:" },
				{ btnSearchUrl: "javascript:" },
				{ btnShareUrl: "javascript:" },
				{ btnFindIdUrl: "javascript:" },
			],
		};

		return (
			<Sub headerProps={subHeaderProps}>
				<ContentBox size={'Md'} hasInner={true}>
					<ReactDatePicker {...args} />
				</ContentBox>
			</Sub>
		)
	}
}