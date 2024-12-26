/* * */

import { datasetsSource, gtfsRealtimeSource, gtfsScheduleSource, meta, restApiSource } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

/* * */

export const restApiDocs = loader({
	baseUrl: '/rest-api',
	source: createMDXSource(restApiSource, meta),
});

export const gtfsScheduleDocs = loader({
	baseUrl: '/gtfs-schedule',
	source: createMDXSource(gtfsScheduleSource, meta),
});

export const gtfsRealtimeDocs = loader({
	baseUrl: '/gtfs-realtime',
	source: createMDXSource(gtfsRealtimeSource, meta),
});

export const datasetsDocs = loader({
	baseUrl: '/datasets',
	source: createMDXSource(datasetsSource, meta),
});
