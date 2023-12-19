export type TUseCaseVariants = "left-styled" | "center-styled" | "none";

export type TUsecaseMetadata = {
	title: string;
	description: string;
	icon: string;
	slug: string;
};

export type TUsecaseData = TUsecaseMetadata & {
	content: string;
};
