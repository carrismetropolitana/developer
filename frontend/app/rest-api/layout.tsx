/* * */

import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { restApiDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

/* * */

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout tree={restApiDocs.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
