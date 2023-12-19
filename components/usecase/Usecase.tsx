import { TUseCaseVariants, TUsecaseMetadata } from "@/types/usecase";
import classNames from "classnames";
import Link from "next/link";

type TUsecaseProps = {
	data: TUsecaseMetadata;
	variant?: TUseCaseVariants;
};

export default function Usecase({ data, variant = "none" }: TUsecaseProps) {
	const { title, description, icon, slug } = data;

	return (
		<div
			className={classNames("d-flex flex-column justify-between gap-6 h-full", {
				"text-center": variant === "center-styled",
			})}
		>
			<div
				className={classNames(
					"icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 text-primary-dark  ",
					{
						"p-2 border bg-gradient-3 borde-primary border-white border-opacity-10":
							variant === "none",
						"mx-auto": variant === "center-styled",
					}
				)}
			>
				<i
					className={classNames(`ti ti-${icon}`, {
						"fs-3": variant === "none",
						"fs-1": variant === "center-styled",
					})}
				></i>
			</div>
			<div className="content flex-grow-1">
				<h5 className="text-white mb-4">{title}</h5>
				<p className="mb-0">{description}</p>
			</div>

			<div className="flex-shrink-0">
				<Link
					href={`/use-cases/${slug}`}
					className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
				>
					<span>Try {title}</span>
					<i className="ti ti-arrow-up-right fs-5"></i>
				</Link>
			</div>
		</div>
	);
}
