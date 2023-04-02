/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Overview', slug: 'overview', key: 'overview' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

	{ text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
	{ text: 'Mint a COMMIT', slug: 'tutorial/0-introduction', key: 'mint-tutorial' },
	{ text: 'Guides', header: true, type: 'learn', key: 'features' },
	{ text: 'How to build Committable', header: true, type: 'learn', key: 'build-committable' },
	{ text: 'Document Search', slug: 'build-committable/docs-search', key: 'docs-search' },
	{ text: 'Google Cloud Logging', slug: 'build-committable/google-cloud-logging', key: 'google-cloud-logging' },
] as const;
