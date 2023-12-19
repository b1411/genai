export const leftFillNumber = (num: number): string => {
	return num < 10 ? "0" + num : num.toString();
};

export const getFormattedDate = (date: string): string => {
	return `${new Date(date).toLocaleDateString("en-us", {
		day: "2-digit",
	})} ${new Date(date).toLocaleDateString("en-us", {
		month: "long",
	})} ${new Date(date).getFullYear()}`;
};
