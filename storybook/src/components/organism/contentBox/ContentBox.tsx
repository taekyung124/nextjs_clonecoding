import * as React from 'react';
import styles from "@/components/organism/contentBox/ContentBox.module.scss";

interface ContentBoxProps {
	type?: 'default' | 'line' | 'divider' | 'gray' | 'green';
	size?: 'zero' | 'Sm' | 'Md' | 'Lg' | 'Xl' | number; // 20, 30, 50, 60
	pt?: 'Sm' | 'Md' | 'Lg' | 'Xl';
	pb?: 'Sm' | 'Md' | 'Lg' | 'Xl';
	hasInner?: boolean;
	bottomLine?: boolean;
	children?: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({
	type = 'default', size = 'zero', pt, pb, hasInner = true, bottomLine = false, children
}) => {
	const dynamicStyle: React.CSSProperties = {
		...(typeof size === 'number' && { paddingTop: `${size}px`, paddingBottom: `${size}px` }),
	};

	return (
		<div className={[
			styles[`contBox${size === 'zero' || typeof size === "number" ? '' : size}`],
			type !== 'default' ? styles[`${type}`] : '',
			pt && styles[`pt${pt}`],
			pb && styles[`pb${pb}`],
			bottomLine ? styles.last : '',
			'__contBox'
		].join(' ')}
		style={dynamicStyle}
		>
			{hasInner ? (
				<div className={styles.contInner}>
					<>{children}</>
				</div>
			) : (
				<>{children}</>
			)}
		</div>
	)
}