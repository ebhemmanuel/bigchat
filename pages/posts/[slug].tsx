import { GetStaticPaths, GetStaticProps } from 'next';

import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';

import PostData from '@/interfaces/post';

import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import MoreStories from '@/components/more-stories';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import PostTitle from '@/components/post-title';
import SectionSeparator from '@/components/section-separator';

interface Props {
	params: { slug: string };
	preview: boolean | null;
	post: PostData;
	morePosts: PostData[];
}

export const Post = ({ post, morePosts, preview }: Props) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{post?.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								<meta property="og:image" content={post?.ogImage?.url} />
							</Head>
							<PostHeader
								title={post?.title}
								coverImage={post?.coverImage}
								date={post?.date}
								author={post?.author}
							/>
							<PostBody content={post?.content} />
						</article>
						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({
	params,
	preview = null,
}) => {
	const data = await getPostAndMorePosts(params?.slug as string, preview);
	const content = await markdownToHtml(data?.posts[0]?.content || '');

	return {
		props: {
			preview,
			post: {
				...data?.posts[0],
				content,
			},
			morePosts: data?.morePosts,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths: allPosts?.map((post: PostData) => `/posts/${post?.slug}`) || [],
		fallback: true,
	};
};
