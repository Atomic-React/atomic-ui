const ArrowRight = ({ className = '', width = '16', height = '16' }) => (
	<svg
		className={ `feather feather-arrow-right ${ className }` }
		fill="none"
		height={ height }
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width={ width }
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="5"
			x2="19"
			y1="12"
			y2="12"
		>
		</line>
		<polyline points="12 5 19 12 12 19"></polyline>
	</svg>
);

export default ArrowRight;