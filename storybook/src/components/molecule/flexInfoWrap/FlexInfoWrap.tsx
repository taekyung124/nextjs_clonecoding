import * as React from 'react';
import styles from "@/components/molecule/flexInfoWrap/FlexInfoWrap.module.scss";

export interface FlexInfoWrapProps {
	align?: 'start' | 'center' | 'end';
	isClear?: boolean;
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
	marginLeft?: number;
	marginBottom?: number;
}

export const FlexInfoWrap: React.FC<FlexInfoWrapProps> = ({
	align = 'start', leftArea, rightArea, marginLeft, marginBottom, isClear = false
}) => {
	return (
		<div
			className={[
				styles.flexInfoWrap,
				styles[align !== 'start' ? `${align}` : '']
			].join(' ')}
			style={{ marginBottom: `${marginBottom}px`}}
		>
			<div className={styles.leftArea}>
				{leftArea}
			</div>
			<div
				className={[styles.rightArea, isClear ? styles.clear : ''].join(' ')}
				style={{marginLeft: `${marginLeft}px`}}
			>
				{rightArea}
			</div>
		</div>
	)
};