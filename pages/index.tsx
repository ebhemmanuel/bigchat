import { GetStaticProps } from 'next';

import Head from 'next/head';

import { getAllPostsForHome } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';

import { PostData } from '@/interfaces/post';

import { Container } from '@/components/container';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import MoreStories from '@/components/more-stories';

type Props = {
	allPosts: PostData[];
	preview: boolean | null;
};

const Index = ({ allPosts, preview }: Props) => {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({
	preview = null,
}) => {
	const allPosts = (await getAllPostsForHome(preview)) || [];
	return {
		props: { allPosts, preview },
	};
};

export default Index;
