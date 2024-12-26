/* * */

import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { datasetsDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

/* * */

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout tree={datasetsDocs.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
