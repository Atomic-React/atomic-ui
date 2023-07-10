import type { Meta, StoryObj } from '@storybook/react';

import ArrowRight from '../../icons/ArrowRight';

import Button from '.';

const meta: Meta<typeof Button> = {
	title: 'forms/Button',
	component: Button,
	tags: [ 'autodocs' ],
	args: {
		children: 'Button',
		isGradient: false,
		isOutlined: false,
		isLoading: false,
		isDisabled: false,
	},
	argTypes: {
		variant: {
			name: 'variant',
			defaultValue: 'primary',
			description: 'Set the color of the button.',
			control: { type: 'select' },
			options: [ 'primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark' ],
		},
		children: {
			name: 'children',
			defaultValue: null,
			description: 'The children elements of the button.',
		},
		isGradient: {
			name: 'isGradient',
			defaultValue: false,
			description: 'Set a gradient color background on the button. Don\'t work concurrently with `isOutlined`.',
		},
		isOutlined: {
			name: 'isOutlined',
			defaultValue: false,
			description: 'Reverse the colors of the button with a transparent background and colored text and borders. Don\'t work concurrently with `isOutlined`.',
		},
		isDisabled: {
			name: 'isDisabled',
			defaultValue: false,
			description: 'Disables the button.',
		},
		isLoading: {
			name: 'isLoading',
			defaultValue: false,
			description: 'Disables the button and shows a spinning loader icon. The loader icon replace the `icon` prop and is placed according to the `iconOrientation` prop.',
		},
		icon: {
			name: 'icon',
			defaultValue: null,
			description: 'Add an icon as `JSX` component.',
			control: { disable: true },
		},
		iconOrientation: {
			name: 'iconOrientation',
			defaultValue: 'left',
			description: 'Describes the placement of the `icon` relative to the button `children`',
			control: { type: 'select' },
			options: [ 'left', 'right' ],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
	}, 
};

export const Gradient: Story = {
	args: {
		variant: 'primary',
		isGradient: true,
		children: 'Button',
	}, 
};

export const Outlined: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		isOutlined: true,
	}, 
};

export const Disabled: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		isDisabled: true,
	}, 
};

export const WithIcon: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		icon: <ArrowRight />,
		iconOrientation: 'right',
	}, 
};

export const Loading: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		isLoading: true,
	}, 
};