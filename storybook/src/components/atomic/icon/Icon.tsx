import * as React from 'react';
import styles from '@/components/atomic/icon/Icon.module.scss';

export interface IconProps {
	size: number;
	src: string;
	offscreen?: string;
	mt?: number;
}

export const Icon: React.FC<IconProps> = ({
	size, src, offscreen, mt
}) => {
	return (
		<span
			className={styles.iconSvg}
			style={{
				backgroundImage: `url("/assets/icons/comm_ico_${src}.svg")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: `${size}px`, height: `${size}px`,
				marginTop: (mt && mt !== 0) ? `${mt}px`: 'initial',
			}}
		>
			{offscreen && <span className="offscreen">{offscreen}</span>}
		</span>
	)
}

