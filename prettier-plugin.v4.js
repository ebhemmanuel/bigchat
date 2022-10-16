const { parsers: typescriptParsers } = require('prettier/parser-typescript');
const organizePlugin = require('prettier-plugin-organize-imports');
const sortImportsPlugin = require('@trivago/prettier-plugin-sort-imports');

module.exports = {
	parsers: {
		...organizePlugin.parsers,
		...sortImportsPlugin.parsers,
		typescript: {
			...typescriptParsers.typescript,
			preprocess: (code, options) => {
				const cleaned = organizePlugin.parsers.typescript.preprocess(
					code,
					options
				);
				return sortImportsPlugin.parsers.typescript.preprocess(
					cleaned,
					options
				);
			},
		},
	},
	options: {
		...organizePlugin.options,
		...sortImportsPlugin.options,
	},
};
