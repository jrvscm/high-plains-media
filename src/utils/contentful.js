const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'blogPost'
  });
  console.log('entries1:', entries)
  return entries.items;
};

const getBlogPostBySlug = async (slug) => {
    console.log('slug', slug)
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  });
  console.log('entries:', entries)
  return entries.items[0];
};

export { getBlogPosts, getBlogPostBySlug };