import * as React from 'react';
import styles from "@/components/molecule/flexInfoWrap/FlexInfoWrap.module.scss";

export interface FlexInfoWrapProps {
	align?: 'start' | 'center' | 'end';
	isClear?: boolean;
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
	marginLeft?: number;
}

export const FlexInfoWrap: React.FC<FlexInfoWrapProps> = ({
	align = 'start', leftArea, rightArea, marginLeft, isClear = false
}) => {
	return (
		<div className={[styles.flexInfoWrap, styles[align !== 'start' ? `${align}` : '']].join(' ')}>
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