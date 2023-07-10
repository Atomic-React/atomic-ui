import { ButtonHTMLAttributes, ReactNode } from 'react';

import Loader from './Loader';

export type ButtonVariants = ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'];
export type ButtonVariant = ButtonVariants[number];

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
	variant?: ButtonVariant;
	isGradient?: boolean;
	isOutlined?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	icon?: ReactNode;
	iconOrientation?: 'right' | 'left';
};

const Button = ({
	children = null,
	variant = 'primary',
	isGradient = false,
	isOutlined = false,
	isDisabled = false,
	isLoading = false,
	icon = null,
	iconOrientation = 'left',
	className = '',
	...rest
}: ButtonProps) => {

	const getVariantClassName = () => {
		if (isOutlined) {
			return `atomic-border-[1px] atomic-border-${ variant }-default hover:atomic-border-${ variant }-hover disabled:hover:atomic-border-${ variant }-default atomic-text-${ variant }-default hover:atomic-text-${ variant }-hover disabled:hover:atomic-text-${ variant }-default`;
		}
		if (isGradient) {
			return `atomic-bg-gradient-to-r atomic-from-${ variant }-left atomic-to-${ variant }-right hover:atomic-from-${ variant }-left-hover disabled:hover:atomic-from-${ variant }-left hover:atomic-to-${ variant }-right-hover disabled:hover:atomic-to-${ variant }-right atomic-text-${ variant }-text`;
		}
		return `atomic-bg-${ variant }-default hover:atomic-bg-${ variant }-hover disabled:hover:atomic-bg-${ variant }-default atomic-text-${ variant }-text`;
	};

	return (
		<button
			className={ `atomic-flex ${ iconOrientation === 'left' ? 'atomic-flex-row' : 'atomic-flex-row-reverse' } atomic-items-center atomic-gap-2 atomic-rounded-md atomic-py-2 atomic-px-4 atomic-shadow-md disabled:atomic-opacity-60 disabled:atomic-cursor-default ${ getVariantClassName() } ${ className }` }
			disabled={ isLoading || isDisabled }
			type="button"
			{ ...rest }
		>
			{ isLoading ? <Loader className="atomic-animate-spin" /> : icon }
			{ children }
		</button>
	);
};

export default Button;