import { InputHTMLAttributes } from 'react';

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {

	return (
		<input
			className="atomic-border-[1px] atomic-border-indigo-500 atomic-p-2 atomic-rounded-md"
			{ ...rest }
		/>
	);
};

export default Input;