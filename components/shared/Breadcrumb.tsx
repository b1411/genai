import Link from "next/link";
import Reveal from "../utils/Reveal";

type TBreadcrumbProps = {
	title: string;
	path: {
		text: string;
		link?: string;
	}[];
};

export default function Breadcrumb({ title, path }: TBreadcrumbProps) {
	return (
		<Reveal el="section" className="py-10 py-lg-15 bg-striped" delay={0.05}>
			<div className="container">
				<div className="text-center">
					<h3 className="text-white mb-2">{title}</h3>
					{path.length ? (
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb justify-center fs-sm">
								{path.map((item) => (
									<li
										key={item.text}
										className={`breadcrumb-item ${item.link ? "" : "active"}`}
										aria-current={item.link ? false : "page"}
									>
										{item.link ? (
											<Link href={item.link}>{item.text}</Link>
										) : (
											item.text
										)}
									</li>
								))}
							</ol>
						</nav>
					) : null}
				</div>
			</div>
		</Reveal>
	);
}
