import Link from "next/link";

type IPaginationProps = {
	path: string;
	currentPage: number;
	totalPage: number;
};

export default function Pagination({ path, currentPage, totalPage }: IPaginationProps) {
	return (
		<div className="text-center mt-18">
			<ul className="pagination flex-wrap justify-center gap-4">
				<li className="page-item">
					<Link
						className={`page-link ${currentPage <= 1 ? "disabled" : ""}`}
						href={`${path}${currentPage - 1}`}
						aria-label="Previous"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M5 12h14M5 12l4 4m-4-4 4-4" />
						</svg>
					</Link>
				</li>
				{[...Array(totalPage)].map((single, index) => (
					<li key={index} className="page-item">
						<Link
							className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
							href={`${path}${index + 1}`}
						>
							{index + 1}
						</Link>
					</li>
				))}
				<li className="page-item">
					<Link
						className={`page-link ${currentPage >= totalPage ? "disabled" : ""}`}
						href={`${path}${currentPage + 1}`}
						aria-label="Next"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M5 12h14m-4 4 4-4m-4-4 4 4" />
						</svg>
					</Link>
				</li>
			</ul>
		</div>
	);
}
