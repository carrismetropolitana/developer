/* eslint-disable perfectionist/sort-objects */

/* * */

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';

/* * */

const config: Config = {

	favicon: 'img/favicon.ico',
	title: 'Carris Metropolitana Developer Portal',
	tagline: 'Network and real-time data for the Carris Metropolitana operation.',

	organizationName: 'carrismetropolitana',
	projectName: 'developer',

	url: 'https://developer.carrismetropolitana.pt',

	baseUrl: '/',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	presets: [
		[
			'classic',
			{
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/carrismetropolitana/developer/tree/production/',
				},
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/carrismetropolitana/developer/tree/production/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {

		colorMode: {
			defaultMode: 'light',
			respectPrefersColorScheme: true,
		},

		image: 'img/docusaurus-social-card.jpg',

		navbar: {
			// title: 'Developer Portal',
			logo: {
				alt: 'Site Logo',
				src: 'img/logo-light.svg',
				srcDark: 'img/logo-dark.svg',
				height: 40,
			},
			items: [
				{
					label: 'GTFS Reference',
					position: 'left',
					sidebarId: 'gtfsSidebar',
					type: 'docSidebar',
				},
				{
					label: 'REST API Reference',
					position: 'left',
					sidebarId: 'apiSidebar',
					type: 'docSidebar',
				},
				{
					label: 'Blog',
					position: 'left',
					to: '/blog',
				},
				{
					label: 'GitHub',
					position: 'right',
					href: 'https://github.com/carrismetropolitana',
				},
			],
		},

		footer: {
			style: 'light',
			links: [
				{
					title: 'Documentation',
					items: [
						{ label: 'GTFS', to: '/docs/gtfs' },
						{ label: 'API', to: '/docs/api' },
					],
				},
				{
					title: 'Community',
					items: [
						{ label: 'Blog', to: '/blog' },
						{ label: 'Github', href: 'https://github.com/carrismetropolitana' },
						{ label: 'Mobility Database', href: 'https://github.com/MobilityData/mobility-database-catalogs' },
					],
				},
				{
					title: 'More',
					items: [
						{ label: 'NAP-PT', href: 'https://www.nap-portugal.imt-ip.pt/nap/multimodalsupplydetail/159' },
						{ label: 'Support', href: 'https://www.carrismetropolitana.pt/apoio/' },
					],
				},
			],
		},

		prism: {
			theme: prismThemes.github,
		},

	} satisfies Preset.ThemeConfig,

};

/* * */

export default config;
