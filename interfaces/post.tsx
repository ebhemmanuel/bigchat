type imageLink = {
	url: string;
};

type PostAuthor = {
	name: string;
	picture: imageLink;
};

type PostData = {
	title?: string;
	ogImage?: imageLink;
	coverImage?: imageLink;
	date?: string;
	author?: PostAuthor;
	slug?: string;
	excerpt?: string;
	content?: string;
};

export default PostData;
