import * as React from 'react';
// import styles from "@/components/layouts/templates/Layouts.module.scss"
import {Header, HeaderProps} from "@/components/organism/header/Header";
import {Footer} from "@/components/organism/footer/Footer";
import {Docker} from "@/components/organism/docker/Docker";
import {WingBanner, WingBannerProps} from "@/components/organism/wingBanner/WingBanner";

type SubWingBannerProps = Pick<WingBannerProps, 'recentProd' | 'prodImg' | 'prodUrl'>;

interface SubProps extends SubWingBannerProps {
	headerProps?: HeaderProps;
	hasGnb?: boolean;
	hasDocker?: boolean;
	hasFooter?: boolean;
	children?: React.ReactNode;
}

export const Sub: React.FC<SubProps> = ({
	headerProps ,hasGnb = false, hasDocker = true, hasFooter = true, children,
	// wingBanner
	prodImg, prodUrl, recentProd
}) => {
	// 최초 진입 시 GNB 영역 숨기기
	const gnbRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!hasGnb || !gnbRef.current) return;

		// const yValue = gnbRef.current.clientHeight;
		// console.log(yValue);

		setTimeout(() => {
			window.scrollTo({ top: 50, behavior: 'instant' });
		}, 50);
	}, [hasGnb]);

	const isTransparent = headerProps?.bgTransparent === true;

	return (
		<div
			ref={gnbRef}
			className={[
				'wrapper',
				'sub',
				!hasDocker && 'noDocker',
				isTransparent && 'transparent',
			].join(' ')}
		>
			<div className={'skipNav'}>
				{hasDocker && (
					<a href={'#docker'}>도커 바로가기</a>
				)}
				<a href={'#container'}>본문으로 가기</a>
			</div>
			{headerProps && <Header hasGnb={hasGnb} {...headerProps} />}
			<div className={'containerWrapper'} id="container">
				<div className={'contentWrapper'}>
					{children}
				</div>
			</div>
			{hasDocker && (<Docker id={'docker'} />)}
			<WingBanner prodImg={prodImg} prodUrl={prodUrl} recentProd={recentProd} bottomPos={hasDocker ? '90px' : '20px'} />
			{hasFooter && (
				<Footer style={{
					marginTop: `${hasDocker ? undefined : 'calc(-1 * env(safe-area-inset-bottom))'}`,
					paddingBottom: `${hasDocker ? undefined : '60px'}`,
				}} />
			)}
		</div>
	)
}