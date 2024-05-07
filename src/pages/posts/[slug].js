import React from 'react';
import { getBlogPostBySlug, getBlogPosts } from '../../utils/contentful';
import ReactMarkdown from 'react-markdown';

const Post = ({ post }) => {
  return (
    <div logger={console.log('post',post.fields.hero.fields)}>
      {post?.fields?.hero?.fields?.file?.url && <div style={{ backgroundImage: `url(${post.fields.hero.fields.file.url})`, height: '400px', backgroundSize: 'cover' }} />}
      {post?.fields?.title && <h1>{post.fields.title}</h1>}
      {post?.fields?.content && <div><ReactMarkdown>{post.fields.content}</ReactMarkdown></div>}
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch necessary data to build the paths with `slug`
  const posts = await getBlogPosts();
  console.log('posts',posts)
  const paths = posts.map(post => ({ params: { slug: post.fields.slug } }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    console.log('params', params.slug)
    const post = await getBlogPostBySlug(params.slug);
    if (!post) {
      return { notFound: true };
    }
    return { props: { post } };
  }

export default Post;
