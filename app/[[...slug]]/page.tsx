/* * */

import { source } from '@/lib/source';
import { createTypeTable } from 'fumadocs-typescript/ui';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

/* * */

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		description: page.data.description,
		title: page.data.title,
	};
}

/* * */

export async function generateStaticParams() {
	return source.generateParams();
}

/* * */

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

	const { AutoTypeTable } = createTypeTable();

	return (
		<DocsPage
			full={page.data.full}
			tableOfContent={{ single: false, style: 'clerk' }}
			tableOfContentPopover={{ style: 'clerk' }}
			toc={page.data.toc}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={{ ...defaultMdxComponents, AutoTypeTable }} />
			</DocsBody>
		</DocsPage>
	);
}
