export type TPostMetadata = {
	title: string;
	category: string;
	date: string;
	slug: string;
	readingTime: string;
	thumbnail: string;
	author: {
		name: string;
		avatar: string;
	};
};

export type TPostData = TPostMetadata & {
	content: string;
	cover: string;
};
