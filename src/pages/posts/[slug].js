import React from 'react';
import styled from 'styled-components';
import { getBlogPostBySlug, getBlogPosts } from '../../utils/contentful';
import ReactMarkdown from 'react-markdown';
import Container from 'react-bootstrap/Container';

const Section = styled.section``;

const PostHero = styled.div`
  background-image: url(${({ $imageSrc }) => $imageSrc});
  background-size: cover;
  background-position: center;
  height: 400px;
  margin-bottom: 100px;
`;

const StyledContainer = styled(Container)`
  width: 50%;
  h1 {
    ${({ theme }) => theme.fonts.font36Bold};
    margin-bottom: 80px;
  }
  h2 {
    ${({ theme }) => theme.fonts.font30Bold};
    margin-bottom: 24px;
  }
  h3 {
    ${({ theme }) => theme.fonts.font24Bold};
    margin-bottom: 20px;
    font-weight: 500;
  }

  h4 {
    font-style: italic;
  }

  p {
    ${({ theme }) => theme.fonts.fontBody24Regular};
    margin-bottom: 48px;

    &:last-of-type {
      padding-bottom: 48px;
      border-bottom: 8px solid ${({ theme }) => theme.colors.black};
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const H1 = styled.h1`
  text-align: left;
  border-top: 8px solid ${({ theme }) => theme.colors.black};
  border-bottom: 8px solid ${({ theme }) => theme.colors.black};
  padding: 16px 0;
`;

const Post = ({ post }) => {
  return (
    <Section logger={console.log('post',post.fields.hero.fields)}>
      {post?.fields?.hero?.fields?.file?.url && <PostHero $imageSrc={post.fields.hero.fields.file.url} />}
      <StyledContainer>
        {post?.fields?.title && <H1>{post?.fields?.title}</H1>}
        {post?.fields?.content && <div><ReactMarkdown>{post.fields.content}</ReactMarkdown></div>}
      </StyledContainer>
    </Section>
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
