/* * */

import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { gtfsRealtimeDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

/* * */

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout tree={gtfsRealtimeDocs.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
