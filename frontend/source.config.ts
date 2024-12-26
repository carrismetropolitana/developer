/* * */

import { defineCollections, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';

/* * */

export const meta = defineCollections({
	dir: 'content/meta',
	schema: metaSchema,
	type: 'meta',
});

export const restApiSource = defineCollections({
	dir: 'content/rest-api',
	schema: frontmatterSchema,
	type: 'doc',
});

export const gtfsScheduleSource = defineCollections({
	dir: 'content/gtfs-schedule',
	schema: frontmatterSchema,
	type: 'doc',
});

export const gtfsRealtimeSource = defineCollections({
	dir: 'content/gtfs-realtime',
	schema: frontmatterSchema,
	type: 'doc',
});
