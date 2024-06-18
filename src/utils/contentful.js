const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'blogPost'
  });
  return entries.items;
};

const getBlogPostBySlug = async (slug) => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  });
  return entries.items[0];
};

export { getBlogPosts, getBlogPostBySlug };