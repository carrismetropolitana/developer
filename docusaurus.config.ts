import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	organizationName: 'carrismetropolitana',
	presets: [
		[
			'classic',
			{
				blog: {
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					showReadingTime: true,
				},
				docs: {
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					sidebarPath: './sidebars.ts',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],
	projectName: 'docs',
	tagline: 'Network and real-time data for the Carris Metropolitana operation.',
	themeConfig: {
		colorMode: {
			defaultMode: 'light',
			respectPrefersColorScheme: false,
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			links: [
				{
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
					title: 'Docs',
				},
				{
					items: [
						{
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							label: 'Stack Overflow',
						},
						{
							href: 'https://discordapp.com/invite/docusaurus',
							label: 'Discord',
						},
						{
							href: 'https://twitter.com/docusaurus',
							label: 'Twitter',
						},
					],
					title: 'Community',
				},
				{
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							href: 'https://github.com/facebook/docusaurus',
							label: 'GitHub',
						},
					],
					title: 'More',
				},
			],
			style: 'dark',
		},
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			items: [
				{
					label: 'Tutorial',
					position: 'left',
					sidebarId: 'tutorialSidebar',
					type: 'docSidebar',
				},
				{ label: 'Blog', position: 'left', to: '/blog' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			title: 'My Site',
		},
		prism: {
			darkTheme: prismThemes.dracula,
			theme: prismThemes.github,
		},
	} satisfies Preset.ThemeConfig,

	title: 'CMetropolitana API Docs',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
};

export default config;
