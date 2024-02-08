import {IconName} from "@fortawesome/free-regular-svg-icons";

export type TUseCaseVariants = "left-styled" | "center-styled" | "none";

export type TUsecaseMetadata = {
	title: string;
	description: string;
	icon: string;
	slug: string;
	image: string;
};

export type TUsecaseData = TUsecaseMetadata & {
	content: string;
};
