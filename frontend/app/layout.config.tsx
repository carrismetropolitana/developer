import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import CMDarkLogo from '@/components/brand/CMDarkLogo';
import { IconBook2, IconWorld } from '@tabler/icons-react';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	githubUrl: 'https://github.com/carrismetropolitana',
	links: [
		{
			external: true,
			icon: <IconWorld />,
			text: 'Website',
			url: 'https://carrismetropolitana.pt',
		},
		{
			external: true,
			icon: <IconBook2 />,
			text: 'Blog',
			url: 'https://blog.carrismetropolitana.pt',
		},
	],
	nav: {
		title: (
			<CMDarkLogo style={{
				height: '2.5rem',
			}}
			/>
		),
	},
};
