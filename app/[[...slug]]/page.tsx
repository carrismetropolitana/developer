/* * */

import { openapi, source } from '@/lib/source';
import { getGithubLastEdit } from 'fumadocs-core/server';
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
	//

	//
	// A. Setup variables

	const params = await props.params;

	const page = source.getPage(params.slug);
	if (!page) notFound();

	const { AutoTypeTable } = createTypeTable();

	//
	// B. Setup options

	const editOnGithubOptions = {
		owner: 'carrismetropolitana',
		path: `content/${page.file.path}`,
		repo: 'docs',
		sha: 'production',
	};

	const lastUpdateOptions = await getGithubLastEdit({
		owner: 'carrismetropolitana',
		path: `content/${page.file.path}`,
		repo: 'docs',
	});

	const MDX = page.data.body;

	//
	// C. Render components

	return (
		<DocsPage
			editOnGithub={editOnGithubOptions}
			lastUpdate={new Date(lastUpdateOptions ?? 0)}
			toc={page.data.toc}
			tableOfContent={{
				enabled: true,
				style: 'clerk',
			}}
			full
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={{ ...defaultMdxComponents, APIPage: openapi.APIPage, AutoTypeTable }} />
			</DocsBody>
		</DocsPage>
	);
}
