"use client";

import appleIcon from "@/public/images/icons/apple.svg";
import googleIcon from "@/public/images/icons/google.svg";
import siteLogo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormData = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TFormData>();

	const onSubmit = (data: TFormData) => {
		console.log(data);
	};

	return (
		<div className="account-wrapper h-full d-flex flex-column justify-center">
			<div className="text-center">
				<Link href="/">
					<Image
						placeholder="blur"
						src={siteLogo}
						alt="GenAi"
						className="img-fluid"
						height={42}
						priority
					/>
				</Link>
				<div className="vstack gap-4 mt-10">
					<button type="button" className="btn account-btn py-4">
						<Image src={googleIcon} alt="icon" height={24} className="icon w-auto" />
						<span>Continue With Google</span>
					</button>
					<button type="button" className="btn account-btn py-4">
						<Image src={appleIcon} alt="icon" height={24} className="icon w-auto" />
						<span>Continue With Apple</span>
					</button>
				</div>

				<div className="divider-with-text my-10">
					<span>Or sign in with email</span>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="vstack gap-4">
					<div className="text-start">
						<div className="input-group with-icon">
							<span className="icon">
								<i className="ti ti-mail fs-5"></i>
							</span>
							<input
								type="text"
								{...register("email", {
									required: {
										value: true,
										message: "Email is required",
									},
									pattern: {
										value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
										message: "Invalid email address",
									},
								})}
								className="form-control rounded-2 py-4"
								placeholder="Enter Your Email"
							/>
						</div>
						{errors.email?.message && (
							<p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
						)}
					</div>
					<div className="text-start">
						<div className="input-group with-icon">
							<span className="icon">
								<i className="ti ti-shield-lock fs-5"></i>
							</span>
							<input
								type="password"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required!",
									},
									minLength: {
										value: 8,
										message: "Password should be minimum 8 character!",
									},
								})}
								className="form-control rounded-2 py-4"
								placeholder="Password"
							/>
						</div>
						{errors.password?.message && (
							<p className="fs-sm text-warning mb-0">{errors.password?.message}</p>
						)}
						<div className="form-text mt-2">
							<Link href="/forgot-password" className="text-decoration-none">
								Forgot Password?
							</Link>
						</div>
					</div>
					<div className="text-center">
						<button
							type="submit"
							disabled={isSubmitting}
							className="btn btn-primary-dark w-full py-4"
						>
							Sign In with GenAI
						</button>
					</div>
					<div className="text-center">
						<p>
							Don&apos;t have an account?{" "}
							<Link href="/register" className="text-decoration-none">
								Sign Up for Free
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
