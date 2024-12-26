import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	links: [
		{
			active: 'nested-url',
			text: 'API Docs',
			url: '/api-docs',
		},
		{
			active: 'nested-url',
			text: 'GTFS Static',
			url: '/gtfs-static',
		},
		{
			active: 'nested-url',
			text: 'GTFS Realtime',
			url: '/gtfs-rt',
		},
	],
	nav: {
		title: 'CM Docs',
	},
};
