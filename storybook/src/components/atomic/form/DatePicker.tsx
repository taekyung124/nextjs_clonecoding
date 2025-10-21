import * as React from 'react';
import { useState,forwardRef } from 'react';
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import 'react-datepicker/dist/react-datepicker.css';

import {Input} from "@/components/atomic/form/Input";
import {Button} from "@/components/atomic/button/Button";

interface ReactDatePickerProps {
	minDate?: string | Date;
	maxDate?: string | Date;
	excludeDates?: (string | Date)[];
	isDisabled?: boolean;
}

export const ReactDatePicker: React.FC<ReactDatePickerProps> = ({
	minDate,
	maxDate,
	isDisabled = false,
	excludeDates = [],
}) => {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [isOpen, setIsOpen] = useState(false);

	// 문자열로 들어온 날짜를 Date 객체로 변환
	const toDate = (value?: string | Date) => {
		if (!value) return undefined;
		return typeof value === "string" ? new Date(value) : value;
	};

	// excludeDates 배열로 변환
	const parsedExcludeDates = excludeDates.map(d =>
		typeof d === "string" ? new Date(d) : d
	);

	const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
		({ value, onClick }, ref) => (
			<Input type="text" title="날짜 선택" placeholder="YYYY.MM.DD"
				hasDatePicker={true} value={value} onClick={onClick}
				ref={ref as React.Ref<HTMLInputElement>} disabled={isDisabled}
			/>
		)
	);

	return (
		<div>
			<DatePicker
				locale={ko}
				dateFormat="yyyy.MM.dd"
				selected={startDate}
				onSelect={() => {}}
				customInput={<CustomInput />}
				open={!isDisabled && isOpen}
				onClickOutside={() => setIsOpen(false)}
				onChange={(date: Date | null) => { if (date) setStartDate(date); }}
				onInputClick={isDisabled ? () => setIsOpen(false) : () => setIsOpen(true)}
				renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
					<div className="react-datepicker__header-custom">
						<button className="react-datepicker__navigation react-datepicker__navigation--previous" onClick={decreaseMonth}>{'<'}</button>
						<span>
							{date.getFullYear()}년 {date.getMonth() + 1}월
						</span>
						<button className="react-datepicker__navigation react-datepicker__navigation--next" onClick={increaseMonth}>{'>'}</button>
					</div>
				)}
				calendarContainer={({children}) => (
					<div className="react-datepicker">
						{children}
						<div className="datePickerBtnWrap">
							<Button
								color="green" size="md" tag="button" text="확인"
								onClick={() => setIsOpen(false)}
							/>
						</div>
					</div>
				)}
				minDate={toDate(minDate)}
				maxDate={toDate(maxDate)}
				excludeDates={parsedExcludeDates}
			/>
		</div>
	);
};