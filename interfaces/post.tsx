export type ImageLink = {
	url: string;
};

export type PostAuthor = {
	name: string;
	picture: ImageLink;
};

export type PostData = {
	title: string;
	ogImage: ImageLink;
	coverImage: ImageLink;
	date: string;
	author: PostAuthor;
	slug: string;
	excerpt: string;
	content: string;
};
