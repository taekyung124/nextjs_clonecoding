import * as React from 'react';
import styles from '@/components/atomic/title/Title.module.scss';

interface TitleProps {
	type? : 'ctitle' | 'ctitleSub' | 'stitle' ;
	size? : 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	lang? : 'kor' | 'eng';
	text?: string | React.ReactNode;
	addClass?: string;
}

export const Title: React.FC<TitleProps> = ({
	size = 'md',
	lang = 'kor',
	type = 'ctitle',
	text,
	addClass
}) => {
	return (
		<div
			className={[
				styles[type ?? ''],
				styles[size ?? ''],
				styles[lang === 'eng'? lang : ''],
				addClass
			].join(' ')}>
			{text}
		</div>
	);
}