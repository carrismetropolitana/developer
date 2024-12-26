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
			active: 'url',
			text: 'REST API',
			url: '/rest-api',
		},
		{
			active: 'url',
			text: 'GTFS Schedule',
			url: '/gtfs-schedule',
		},
		{
			active: 'url',
			text: 'GTFS Realtime',
			url: '/gtfs-realtime',
		},
		{
			active: 'url',
			text: 'Datasets',
			url: '/datasets',
		},
	],
	nav: {
		title: 'CM Docs',
		transparentMode: 'always',
	},
};
