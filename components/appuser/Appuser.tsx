import { TAppuser } from "@/types/appuser";
import Image from "next/image";

type TAppuserProps = {
	data: TAppuser;
};

export default function Appuser({ data }: TAppuserProps) {
	const { icon, title, content } = data;

	return (
		<div className="h-full">
			<div className="icon position-relative w-16 h-16 flex-shrink-0 d-flex align-center justify-center mb-6">
				<Image src={icon} alt="icon" fill />
			</div>
			<div className="content">
				<h4 className="mb-4 text-white">{title}</h4>
				<p className="mb-0">{content}</p>
			</div>
		</div>
	);
}
