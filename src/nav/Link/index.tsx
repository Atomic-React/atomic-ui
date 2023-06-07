import { AnchorHTMLAttributes } from 'react';

const Link = ({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {

	return (
		<a
			className="atomic-text-red-500 hover:atomic-cursor-pointer hover:atomic-underline"
			{ ...rest }
		>{ children }
		</a>
	);
};

export default Link;