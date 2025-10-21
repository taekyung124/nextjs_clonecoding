import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';

export interface InputProps {
	boxType?: 'line' | 'gray-search';
	type?: 'text' | 'number' | 'password' | 'search' | 'tel';
	title?: string;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	value?: string | any;
	hideGuide?: boolean;
	hasDatePicker?: boolean;
	isValidCheck?: 'fail' | 'success';
	inputGuide?: string;
	validDesc?: string;
	timeCount?: string;
	slotBtn?: React.ReactNode;
	children?: React.ReactNode;
	onChange?: (value: string) => void;
	onClick?: () => void;
	ref?: React.Ref<HTMLInputElement>;
}
export const Input: React.FC<InputProps> = ({
	boxType = undefined,
	type = 'text',
	title,
	placeholder,
	disabled = false,
	readonly = false,
	value='',
	hideGuide,
	hasDatePicker = false,
	isValidCheck,
	inputGuide = '',
	validDesc = '',
	timeCount,
	slotBtn,
	children,
	onChange,
	onClick,
	ref,
}) => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const [isFocused, setIsFocused] = React.useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const isDisabled = disabled || readonly;
	// const isHasValid = inputValue.length > 0;
	const isPasswordType = type === 'password';

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev)
	}

	React.useEffect(() => {
		setInputValue(value);
	}, [value]);

	const handleFocus = () => {
		setIsFocused(true);
	}
	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		onChange?.(e.target.value);
	};

	const handleClear = () => {
		setInputValue('');
		onChange?.('');
		inputRef.current?.focus();
	};

	const current = inputValue ?? value ?? '';
	const isHasValue = String(current).length > 0;

	const wrapperClassName = [
		boxType === 'line' ? styles.inputLineBox
			: boxType === 'gray-search' ? styles.inputGraySearchBox
				: type === 'search' ? styles.inputSearchBox
					: styles.inputBox,
		isFocused && styles.isFocus,
		isHasValue && styles.hasValue,
		isDisabled && styles.isDisabled,
	].filter(Boolean).join(' ');


	return (
		<div className={[
			styles.inputGroup,
			styles.validCheck,
			styles[boxType ?? ''],
			styles[isValidCheck ?? ''],
			`__input`].join(' ')}
			ref={ref}
		>
			<div className={wrapperClassName}>
				<input
					ref={inputRef}
					className={styles.uiInput}
					type={isPasswordType && isPasswordVisible ? 'text' : type}
					title={title}
					placeholder={placeholder}
					value={inputValue}
					disabled={disabled}
					readOnly={readonly}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={handleChange}
				/>
				{(type !== 'password' && type !== 'tel' && type !== 'number' && !hasDatePicker) && (
					<button
						className={styles.btnInputDel}
						type={"button"}
						onClick={handleClear}
					>
						<span className="offscreen">초기화</span>
					</button>
				)}
				{slotBtn && (
					<>
						{timeCount && <span className={styles.timerCount}>{timeCount}</span>}
						<span className={styles.btnArea}>
						{slotBtn}
						</span>
					</>
				)}
				{type === 'password' && (
					<button
						type={"button"}
						className={[
							styles.btnTogglePw,
							isPasswordVisible ? styles.isActive : '',
						]
							.filter(Boolean)
							.join(' ')}
						onClick={togglePasswordVisibility}
						disabled={isDisabled}
					>
						<span className="offscreen">
							{isPasswordVisible ? '비밀번호 숨김' : '비밀번호 보임'}
						</span>
					</button>
				)}
				{type === 'search' && (
					<button type="button" className={styles.btnInputSearch}>
						<span className="offscreen">검색</span>
					</button>
				)}
				{hasDatePicker && (
					<button type="button" className={styles.btnDatePicker} onClick={onClick}>
						<span className="offscreen">날짜 선택</span>
					</button>
				)}
				{children}
			</div>
			{(!hideGuide && inputGuide && !isValidCheck) && (
				<div className={styles.inputGuide}>{inputGuide}</div>
			)}
			{(!hideGuide && validDesc && isValidCheck) && (
				<div className={styles.validDesc}>{validDesc}</div>
			)}
		</div>
	)
}