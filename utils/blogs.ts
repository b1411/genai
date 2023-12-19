import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { TPostData, TPostMetadata } from "./../types/blog";

const FOLDER_PATH = path.join(process.cwd(), "posts");
const LIMIT_PER_PAGE = 9;

export const getPostsMetadata = (
	pageNumber: number
): {
	posts: TPostMetadata[];
	totalPage: number;
} => {
	const files = fs.readdirSync(FOLDER_PATH);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));

	const posts = markdownPosts.map((fileName) => {
		const fileContents = fs.readFileSync(path.join(FOLDER_PATH, fileName), "utf-8");
		const { data: postMeta, content: postContent } = matter(fileContents);

		return {
			title: postMeta.title,
			category: postMeta.category,
			date: postMeta.date,
			thumbnail: postMeta.thumbnail,
			author: {
				name: postMeta.author.name,
				avatar: postMeta.author.avatar,
			},
			slug: fileName.replace(".md", ""),
			readingTime: readingTime(postContent).text,
		};
	});

	return {
		posts: posts
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
			.slice(LIMIT_PER_PAGE * pageNumber - LIMIT_PER_PAGE, LIMIT_PER_PAGE * pageNumber),
		totalPage: Math.ceil(posts.length / LIMIT_PER_PAGE),
	};
};

export const getPostData = (slug: string): TPostData => {
	const fileContents = fs.readFileSync(path.join(FOLDER_PATH, `${slug}.md`), "utf-8");
	const { data: postMeta, content: postContent } = matter(fileContents);

	return {
		title: postMeta.title,
		category: postMeta.category,
		date: postMeta.date,
		thumbnail: postMeta.thumbnail,
		slug: slug,
		readingTime: readingTime(postContent).text,
		author: {
			name: postMeta.author.name,
			avatar: postMeta.author.avatar,
		},
		content: postContent,
		cover: postMeta.cover,
	};
};
