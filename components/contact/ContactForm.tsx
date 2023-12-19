"use client";

import { useForm } from "react-hook-form";

type TFormData = {
	name: string;
	email: string;
	phone: string;
	message: string;
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormData>();

	const onSubmit = (data: TFormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="vstack gap-8">
			<div className="">
				<label htmlFor="name" className="form-label fs-lg fw-medium mb-4">
					Your name*{" "}
				</label>
				<div className="input-group with-icon">
					<span className="icon">
						<i className="ti ti-user fs-5"></i>
					</span>
					<input
						type="text"
						{...register("name", {
							required: {
								value: true,
								message: "Name is required",
							},
						})}
						id="name"
						placeholder="What's your name?"
						className="form-control rounded-2"
					/>
				</div>
				{errors.name?.message && (
					<p className="fs-sm text-warning mb-0">{errors.name?.message}</p>
				)}
			</div>
			<div className="">
				<label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
					Email Address*
				</label>
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
						id="email"
						className="form-control rounded-2"
						placeholder="Enter Your Email"
					/>
				</div>
				{errors.email?.message && (
					<p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
				)}
			</div>
			<div className="">
				<label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
					Phone Number
				</label>
				<div className="input-group with-icon">
					<span className="icon">
						<i className="ti ti-phone-call fs-5"></i>
					</span>
					<input
						type="text"
						{...register("phone")}
						id="phone"
						className="form-control rounded-2"
						placeholder="Phone Number"
					/>
				</div>
				{errors.phone?.message && (
					<p className="fs-sm text-warning mb-0">{errors.phone?.message}</p>
				)}
			</div>
			<div className="">
				<label htmlFor="message" className="form-label fs-lg fw-medium mb-4">
					Your Message*
				</label>
				<textarea
					id="message"
					{...register("message", {
						required: {
							value: true,
							message: "Message is required",
						},
					})}
					className="form-control rounded-2"
					placeholder="Write here your details message"
					rows={4}
				></textarea>
				{errors.message?.message && (
					<p className="fs-sm text-warning mb-0">{errors.message?.message}</p>
				)}
			</div>
			<div className="">
				<button type="submit" className="btn btn-primary-dark">
					Send Message
				</button>
			</div>
		</form>
	);
}
