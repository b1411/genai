import Link from "next/link";

export default function ForgotPassword() {
	return (
		<div className="account-wrapper h-full d-flex flex-column justify-center">
			<div className="text-center">
				<div className="mb-4 text-start d-flex align-center gap-2">
					<Link
						href="/login"
						className="btn btn-sm p-0 d-flex align-center text-decoration-none w-8 h-8 justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width="24"
						>
							<g
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							>
								<path d="M5 12h14M5 12l4 4m-4-4 4-4" />
							</g>
						</svg>
					</Link>
					<p className="lead fw-normal mb-0">Reset Password</p>
				</div>
				<form action="#" className="vstack gap-4">
					<div className="text-start">
						<div className="input-group with-icon">
							<span className="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 18"
								>
									<g
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.2"
									>
										<path d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5Z" />
										<path d="M2.25 5.25 9 9.75l6.75-4.5" />
									</g>
								</svg>
							</span>
							<input
								type="email"
								className="form-control rounded-2 py-4"
								placeholder="Enter Your Email"
							/>
						</div>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary-dark w-full py-4">
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
