import { TBlockFeature } from "@/types/blockfeature";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";

type TBlockFeature2Props = {
	index: number;
	data: TBlockFeature;
	reversed?: boolean;
};

export default function BlockFeature2({ index, data, reversed = false }: TBlockFeature2Props) {
	const { subtitle, title, description, listItems, linkText, linkUrl, image } = data;

	return (
		<div
			className={classNames(
				"bg-dark-blue-4 rounded-4 p-6 p-md-12 px-xl-20 py-xl-12 hover-border",
				{
					"mt-18": index !== 0,
				}
			)}
		>
			<div
				className={classNames("row g-6 gx-lg-14 gx-xl-20 align-center", {
					"flex-row-reverse": reversed,
				})}
			>
				<Reveal className="col-lg-6" delay={0.15}>
					<div className="content">
						<p className="text-primary-dark">{subtitle}</p>
						<h1 className="text-white mb-8">{title}</h1>
						<p className="mb-6">{description}</p>
						<ul className="list-unstyled list-check mb-8">
							{listItems.map((item, index) => (
								<li key={index}>
									<i className="ti ti-check fs-5"></i>
									<span>{item}</span>
								</li>
							))}
						</ul>
						{linkText && linkUrl ? (
							<Link
								href={linkUrl}
								className="arrow-link arrow-link-primary-dark text-primary-dark gap-3"
							>
								<span>{linkText}</span>
								<i className="ti ti-arrow-up-right fs-5"></i>
							</Link>
						) : null}
					</div>
				</Reveal>
				<Reveal className="col-lg-6" delay={0.25}>
					<div className="feature-img">
						<Image
							src={image}
							height={647}
							width={608}
							alt="icon"
							className="img-fluid h-auto"
						/>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
