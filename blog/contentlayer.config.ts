import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: 'mdx',
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
			type: 'string',
			resolve: ({ _raw }) => _raw.sourceFileName.replace('.mdx', ''),
		},
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "assets",
  documentTypes: [Post],
});
