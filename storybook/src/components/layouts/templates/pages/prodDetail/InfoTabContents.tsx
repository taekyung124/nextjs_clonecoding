import * as React from 'react';
// style
import styles from "@/components/layouts/pages/pages.module.scss";

// components
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {Title} from "@/components/atomic/title/Title";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {Button} from "@/components/atomic/button/Button";
import {Table, TableCell} from "@/components/molecule/table/Table";

export const InfoTabContents = () => {
	const ProdInfoData: TableCell[][] = [
		[
			{ type: 'th', content: '가격조정', scope: 'row' },
			{ type: 'td', content: '200,000,000원 → 100,000,000원' },
		],
		[
			{ type: 'th', content: '상품번호', scope: 'row' },
			{ type: 'td', content: '8299727' },
		],
		[
			{ type: 'th', content: '브랜드', scope: 'row' },
			{ type: 'td', content: '파텍필립' },
		],
		[
			{ type: 'th', content: '모델', scope: 'row' },
			{ type: 'td', content: '노틸러스' },
		],
		[
			{ type: 'th', content: '제조국', scope: 'row' },
			{ type: 'td', content: 'Made In SWISS' },
		],
	]

	const ProdDetailInfoData: TableCell[][] = [
		[
			{ type: 'th', content: '색상', scope: 'row' },
			{ type: 'td', content: '블랙' },
		],
		[
			{ type: 'th', content: '대표사이즈', scope: 'row' },
			{ type: 'td', content: 'S' },
		],
		[
			{ type: 'th', content: 'US사이즈', scope: 'row' },
			{ type: 'td', content: 'S' },
		],
		[
			{ type: 'th', content: '소재', scope: 'row' },
			{ type: 'td', content: '인조가죽' },
		],
		[
			{ type: 'th', content: '스크래치', scope: 'row' },
			{ type: 'td', content: '양호' },
		],
		[
			{ type: 'th', content: '변색', scope: 'row' },
			{ type: 'td', content: '체인에미세한 변색발생' },
		],
		[
			{ type: 'th', content: '찍힘', scope: 'row' },
			{ type: 'td', content: '유리에미세한 찍힘 발생' },
		]
	]

	const ModelInfoData: TableCell[][] = [
		[
			{ type: 'th', content: '세부소재', scope: 'row' },
			{ type: 'td', content: '엡송' },
		],
		[
			{ type: 'th', content: '세부색상', scope: 'row' },
			{ type: 'td', content: '골드' },
		],
		[
			{ type: 'th', content: '장식', scope: 'row' },
			{ type: 'td', content: '금장' },
		],
		[
			{ type: 'th', content: '실측사이즈', scope: 'row' },
			{ type: 'td', content: '총길이86.5cm, 어깨넓이37.5cm, 가슴폭40cm, 팔길이61.5cm' },
		],
	]

	return (
		<>
			<ContentBox type={'divider'} size={'zero'} hasInner={false}>
				<Thumb type={'fluid'} imgSrc={'prod_detail_premium_care'} btnLink={true} href={'javascript:'} altText={'구구스 명품 케어 서비스'} />
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'} hasInner={false}>
				<div style={{height: '282px', background: '#ffb5af'}}>
					에디터영역 확인을 위한 임시 div입니다.
					<br />개발시 해당 div 삭제 후 작업해 주세요.
					<br />(상품정보 영역)
				</div>
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<FlexInfoWrap align={'center'} marginLeft={10} marginBottom={20}
							  leftArea={<TitleWrap child={<Title text={'상품 기본정보'} />} />}
							  rightArea={<Button color="lineGray" rounded size="sm" text="사이즈 가이드" />}
				/>
				<Table
					wapperType={'Info'} tblType={'Info'} caption={'상품 기본정보'}
					colWidth={['100px', 'auto']} tbody={ProdInfoData}
				/>
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'상품 속성정보'} />} />
				<Table
					wapperType={'Info'} tblType={'Info'} caption={'상품 속성정보'}
					colWidth={['100px', 'auto']} tbody={ProdDetailInfoData}
				/>
			</ContentBox>
			<ContentBox type={'divider'} size={'Md'}>
				<TitleWrap mb={'md'} child={<Title text={'모델 속성정보'} />} />
				<Table
					wapperType={'Info'} tblType={'Info'} caption={'모델 속성정보'}
					colWidth={['100px', 'auto']} tbody={ModelInfoData}
				/>
			</ContentBox>
			<ContentBox type={'divider'} size={'zero'} hasInner={false}>
				// 어바웃 구구스 작업 예정
			</ContentBox>
		</>
	)
}