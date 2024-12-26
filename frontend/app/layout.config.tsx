/* * */

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
			text: 'REST API',
			url: '/rest-api',
		},
		{
			active: 'nested-url',
			text: 'GTFS Schedule',
			url: '/gtfs-schedule',
		},
		{
			active: 'nested-url',
			text: 'GTFS Realtime',
			url: '/gtfs-realtime',
		},
	],
	nav: {
		title: 'CM Docs',
	},
};
