import { TBrandLogo } from "@/types/brandlogo";
import Image from "next/image";
import Reveal from "../utils/Reveal";

type TBrandLogoProps = {
	data: TBrandLogo;
};

export default function BrandLogo({ data }: TBrandLogoProps) {
	const { image, url } = data;

	return (
		<Reveal className="col" delay={0.1}>
			{url ? (
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="d-block position-relative text-center"
				>
					<Image
						src={image}
						alt="logo"
						height={36}
						width={150}
						className="img-fluid brand-img w-auto"
					/>
				</a>
			) : (
				<div className="d-block position-relative text-center">
					<Image
						src={image}
						alt="logo"
						height={36}
						width={150}
						className="img-fluid brand-img w-auto"
					/>
				</div>
			)}
		</Reveal>
	);
}
