import { ButtonHTMLAttributes } from 'react';

const Button = ({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {

	return (
		<button
			className="atomic-bg-indigo-500 atomic-text-white atomic-rounded-md atomic-p-2"
			type="button"
			{ ...rest }
		>{ children }
		</button>
	);
};

export default Button;