import { PostData } from '@/interfaces/post';

async function fetchAPI<T>(
	query: string,
	{ variables }: Record<string, unknown> = {}
): Promise<T> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json.data;
}

export interface ApiPostData {
	posts: PostData[];
	allPosts: PostData[];
	morePosts: PostData[];
}

export const getPreviewPostBySlug = async (slug: string): Promise<PostData> => {
	const data = await fetchAPI<ApiPostData>(
		`
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
		{
			variables: {
				where: {
					slug,
				},
			},
		}
	);
	return data?.posts[0];
};

export const getAllPostsWithSlug = async (): Promise<PostData[]> => {
	const data = await fetchAPI<ApiPostData>(`
    {
      posts {
        slug
      }
    }
  `);
	return data?.allPosts;
};

export const getAllPostsForHome = async (
	preview: boolean | null = null
): Promise<PostData[]> => {
	const data = await fetchAPI<ApiPostData>(
		`
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
		{
			variables: {
				where: {
					...(preview ? {} : { status: 'published' }),
				},
			},
		}
	);
	return data?.posts;
};

export const getPostAndMorePosts = async (
	slug: string = '',
	preview: boolean | null = null
): Promise<ApiPostData> => {
	const data = await fetchAPI<ApiPostData>(
		`
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage {
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
		{
			preview,
			variables: {
				where: {
					slug,
					...(preview ? {} : { status: 'published' }),
				},
				where_ne: {
					...(preview ? {} : { status: 'published' }),
					slug_ne: slug,
				},
			},
		}
	);
	return data;
};
