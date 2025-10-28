import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

// layouts
import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";

// organism

// molecule
import {FormList} from "@/components/molecule/form/FormList";
import {InputFlexGroup} from "@/components/molecule/form/InputFlexGroup";

// atomic
import {Button} from "@/components/atomic/button/Button";
import {Input} from "@/components/atomic/form/Input";
import {SelectMenu} from "@/components/atomic/form/SelectMenu";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";

const meta = {
	title: 'Pages/Join',
	component: Sub,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Sub>;


export default meta;
type Story = StoryObj<typeof Sub>;

export const Join: StoryFn = () => {

	const subHeaderProps: HeaderProps = {
		type: "sub",
		title: "회원가입",
		hasGnb: false,
	};

	const [phonePrefix, setPhonePrefix] = React.useState('');
	const [telPrefix, setTelPrefix] = React.useState('');
	const [emailDomain, setEmailDomain] = React.useState('');

	const items = [{
		id: '001',
		title: '이름',
		required: true,
		formCont: <Input inputGuide="이름은 변경할 수 없습니다." title="이름 입력" type="text" value="홍길동" disabled />
	}, {
		id: '002',
		title: '아이디',
		required: true,
		formCont:<InputFlexGroup formContents={<>
			<Input hideGuide placeholder="영문자/숫자 4~12자로 입력해 주세요." title="아이디 입력" type="text" />
			<Button color="lineGreen" size="lg" tag="button" text="중복확인" />
		</>} gap="Md" isValidCheck="fail" validDesc="이미 사용중인 아이디 입니다." />
	}, {
		id: '003',
		title: '비밀번호',
		required: true,
		formCont: <>
			<Input type="password" title="비밀번호 입력" placeholder="영문자,숫자,특수문자 포함 8자 이상으로 입력해 주세요."
				   validDesc="영문자,숫자,특수문자 ! @ # $ % ^ & * ( ) 포함 8자 이상으로 입력해 주세요." isValidCheck="fail" />
			<Input type="password" title="비밀번호 확인" placeholder="입력한 비밀번호를 확인해 주세요."
				   validDesc="비밀번호가 일치하지 않습니다." isValidCheck="fail" />
		</>
	},{
		id: '004',
		title: '휴대폰 번호',
		required: true,
		formCont: <InputFlexGroup formContents={<>
			<SelectMenu options={[{
				label: '010',
				value: '010'
			}, {
				label: '011',
				value: '011'
			}, {
				label: '016',
				value: '016'
			}, {
				label: '017',
				value: '017'
			}, {
				label: '018',
				value: '018'
			}, {
				label: '019',
				value: '019'
			}]} placeholder="010" title="휴대폰 번호 앞자리 선택" value={phonePrefix} onChange={setPhonePrefix} />
			<Input hideGuide title="휴대폰 번호 4자리 입력" type="number" inputMode="tel" maxLength={4} />
			<Input hideGuide title="휴대폰 번호 나머지 4자리 입력" type="number" inputMode="tel" maxLength={4} />
		</>} gap="Md" isValidCheck="fail" validDesc="휴대폰 번호 형식에 맞춰 작성해 주세요." />
	}, {
			id: '005',
			title: '전화 번호',
			required: false,
			formCont: <InputFlexGroup formContents={<>
				<SelectMenu options={[{
					label: '070',
					value: '070'
				}, {
					label: '02',
					value: '02'
				}, {
					label: '031',
					value: '031'
				}, {
					label: '032',
					value: '032'
				}, {
					label: '033',
					value: '033'
				}, {
					label: '041',
					value: '041'
				}, {
					label: '042',
					value: '042'
				}, {
					label: '043',
					value: '043'
				}, {
					label: '044',
					value: '044'
				}, {
					label: '051',
					value: '051'
				}, {
					label: '052',
					value: '052'
				}, {
					label: '053',
					value: '053'
				}, {
					label: '054',
					value: '054'
				}, {
					label: '055',
					value: '055'
				}, {
					label: '061',
					value: '061'
				}, {
					label: '062',
					value: '062'
				}, {
					label: '063',
					value: '063'
				}, {
					label: '064',
					value: '064'
				},]} placeholder="070" title="지역번호 선택" value={telPrefix} onChange={setTelPrefix} />
				<Input hideGuide title="전화번호 앞자리 입력" type="number" inputMode="tel" maxLength={4} />
				<Input hideGuide title="전화번호 뒷자리 입력" type="number" inputMode="tel" maxLength={4} />
			</>} gap="Md" isValidCheck="fail" validDesc="숫자만 입력해 주세요." />
	}, {
		id: '006',
		title: '이메일',
		required: true,
		formCont:
			<InputFlexGroup leftArea={<Input title="이메일" type="text" placeholder="example" />} midText="@" rightArea={
				<SelectMenu options={[
					{
						label: '직접입력',
						value: '직접입력'
					}, {
						label: 'naver.com',
						value: 'naver.com'
					}, {
						label: 'gmail.com',
						value: 'gmail.com'
					}, {
						label: 'hanmail.net',
						value: 'hanmail.net'
					}, {
						label: 'nate.com',
						value: 'nate.com'
					}, {
						label: 'hotmail.com',
						value: 'hotmail.com'
					}, {
						label: 'yahoo.com',
						value: 'yahoo.com'
					}, {
						label: 'lycos.co.kr',
						value: 'lycos.co.kr'
					}]} placeholder="직접입력" title="도메인" value={emailDomain} onChange={setEmailDomain} />
			} gap="Md" isValidCheck="fail" validDesc="이미 가입된 이메일 입니다.">
				<Input placeholder="직접입력" title="이메일 직접 입력" type="text" />
			</InputFlexGroup>
	}, {
		id: '007',
		title: '추천인 아이디',
		required: false,
		formCont: <Input placeholder="추천인의 아이디를 입력해 주세요." title="추천인 아이디 입력" type="text" />
	}];

	return (
		<Sub headerProps={subHeaderProps} hasFooter={false} hasDocker={false}>
			<ContentBox size={'Sm'}>
				<FormList gap={'Md'} items={items} />
			</ContentBox>
		</Sub>
	)
}