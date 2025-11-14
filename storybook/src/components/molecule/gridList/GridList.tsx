import * as React from 'react';
import styles from "@/components/molecule/gridList/GridList.module.scss";

interface GridListProps {
	type?: 'row' | 'col2' | 'col4';
	gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'prod' | number; // 6, 10, 20, 40, 50, 10 40
	mt?: number;
	items: React.ReactNode[];
}

export const GridList: React.FC<GridListProps> = ({
	type = 'row', gap = 'md', mt, items
}) => {
	const isNumber = typeof gap === 'number';
	const gapCamel = !isNumber ? gap.charAt(0).toUpperCase() + gap.slice(1) : null;

	return (
		<ul
			className={[
			styles.gridList,
			styles[`${type}`],
			!isNumber && styles[`gap${gapCamel}`],
			].join(' ')}
			style={{
				marginTop: mt ? `${mt}px` : 'initial',
				...(isNumber
					? type === 'col4'
						? { rowGap: `${gap}px` } as React.CSSProperties
						: { gap: `${gap}px` }  as React.CSSProperties
					: {})
			}}
		>
			{items.map((item, idx) => (
				<li
					key={idx}
					className={styles.gridItem}
				>
					{item}
				</li>
			))}
		</ul>
	)
}