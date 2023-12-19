"use client";

import { useForm } from "react-hook-form";

type TNewsletterProps = {
	textButton?: boolean;
};

type TFormData = {
	email: string;
};

export default function Newsletter({ textButton = false }: TNewsletterProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormData>();

	const onSubmit = (data: TFormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="input-group">
				<input
					type="email"
					className="form-control"
					placeholder="Enter your email"
					{...register("email", {
						required: {
							value: true,
							message: "Email is Required",
						},
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							message: "Invalid email address",
						},
					})}
				/>
				<button className="btn btn-primary-dark px-4" type="submit">
					{textButton ? (
						"Subscribe"
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z"
							/>
						</svg>
					)}
				</button>
			</div>
			{errors.email?.message && (
				<p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
			)}
		</form>
	);
}
