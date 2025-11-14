import * as React from 'react';
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {Button} from "@/components/atomic/button/Button";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

export const InquiryTabContents = () => {
	return (
		<ContentBox type={'divider'} size={'Md'}>
			<BtnWrap mt={'zero'} buttons={
				<>
					<Button tag={'a'} href={'javascript:'} size={'md'} color={'lineGreen'} text={'카톡 문의'} />
					<Button tag={'a'} href={'javascript:'} size={'md'} color={'green'} text={'1:1 문의'} />
				</>
			} />
		</ContentBox>
	)
}