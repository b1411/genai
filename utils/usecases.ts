import { TUsecaseData, TUsecaseMetadata } from "@/types/usecase";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const FOLDER_PATH = path.join(process.cwd(), "usecases");

export const getUsecasesMetadata = (limit: number = 0): TUsecaseMetadata[] => {
	const files = fs.readdirSync(FOLDER_PATH);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));

	const posts = markdownPosts.map((fileName) => {
		const fileContents = fs.readFileSync(path.join(FOLDER_PATH, fileName), "utf-8");
		const { data: postMeta } = matter(fileContents);

		return {
			title: postMeta.title,
			description: postMeta.description,
			icon: postMeta.icon,
			slug: fileName.replace(".md", ""),
		};
	});

	if (limit) {
		return posts.slice(0, limit);
	} else {
		return posts;
	}
};

export const getusecaseData = (slug: string): TUsecaseData => {
	const fileContents = fs.readFileSync(path.join(FOLDER_PATH, `${slug}.md`), "utf-8");
	const { data: postMeta, content: postContent } = matter(fileContents);

	return {
		title: postMeta.title,
		description: postMeta.description,
		icon: postMeta.icon,
		slug: slug,
		content: postContent,
	};
};
