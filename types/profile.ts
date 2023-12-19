export type TProfile = {
	id: string | number;
	name: string;
	designation: string;
	image: string;
	links: {
		facebook?: string;
		github?: string;
		twitter?: string;
	};
};
