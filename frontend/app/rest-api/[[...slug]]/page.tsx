/* * */

import { restApiDocs } from '@/lib/source';
import { Banner } from 'fumadocs-ui/components/banner';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

/* * */

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
	const page = restApiDocs.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<DocsPage full={page.data.full} toc={page.data.toc}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={{ ...defaultMdxComponents, Banner, TypeTable }} />
			</DocsBody>
		</DocsPage>
	);
}

/* * */

export async function generateStaticParams() {
	return restApiDocs.generateParams();
}

/* * */

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
	const page = restApiDocs.getPage(params.slug);
	if (!page) notFound();

	return {
		description: page.data.description,
		title: page.data.title,
	};
}
