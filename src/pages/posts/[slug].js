import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { device } from '../../styles/breakpoints';
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

  @media ${device.tablet} {
    width: 100%;

    h1 {
      ${({ theme }) => theme.fonts.font28Bold};
      margin-bottom: 50px;
    }

    h2 {
      ${({ theme }) => theme.fonts.font24Bold};
    }

    h3 {
      ${({ theme }) => theme.fonts.font22Bold};
    }

    h4 {
      ${({ theme }) => theme.fonts.font20Bold};
    }

    p {
      ${({ theme }) => theme.fonts.fontBody18Regular};
    }

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
    <>
      <Head>
        <title>{post?.fields?.title || 'Default Blog Title'}</title>
        <meta name="description" content={post?.fields?.description || 'Default description of the blog post'} />
        <meta property="og:title" content={post?.fields?.title || 'Default Blog Title'} />
        <meta property="og:description" content={post?.fields?.description || 'Default description of the blog post'} />
        <meta property="og:image" content={post?.fields?.hero?.fields?.file?.url} />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        {post?.fields?.hero?.fields?.file?.url && <PostHero $imageSrc={post.fields.hero.fields.file.url} />}
        <StyledContainer>
          {post?.fields?.title && <H1>{post?.fields?.title}</H1>}
          {post?.fields?.content && <div><ReactMarkdown>{post.fields.content}</ReactMarkdown></div>}
        </StyledContainer>
      </Section>
    </>
  );
};

export async function getStaticPaths() {
  // Fetch necessary data to build the paths with `slug`
  const posts = await getBlogPosts();
  const paths = posts.map(post => ({ params: { slug: post.fields.slug } }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const post = await getBlogPostBySlug(params.slug);
    if (!post) {
      return { notFound: true };
    }
    return { props: { post } };
  }

export default Post;
