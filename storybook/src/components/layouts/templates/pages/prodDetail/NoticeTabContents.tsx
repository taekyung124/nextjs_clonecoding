import * as React from 'react';
// components
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {Thumb} from "@/components/atomic/thumb/Thumb";
// import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";
// import {Button} from "@/components/atomic/button/Button";

export const NoticeTabContents = () => {
	return (
		<>
			<ContentBox type={'divider'} size={'Md'}>
				구매 시 유의사항
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				지금 보고 있는 디올 가방
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				반포신세계점의 디올만 모아봤어요
			</ContentBox>
			<ContentBox type={'divider'} size={'zero'} hasInner={false}>
				<Thumb type={'fluid'} imgSrc={'my_prod_resell'} btnLink={true} href={'javascript:'} altText={'구구스 명품 케어 서비스'} />
			</ContentBox>
		</>
	)
}