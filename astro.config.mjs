import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjaxCHTML from 'rehype-mathjax/chtml.js';
import preact from "@astrojs/preact";

export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeMathjaxCHTML, { tex: { tags: "ams" }, chtml: {fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'} }]],
  },
  // https://astro.build/config
  integrations: [preact()]
});