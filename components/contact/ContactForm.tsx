"use client";

import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import Parse from "@/utils/parse";
import { toast } from "react-toastify";

type TFormData = {
    name: string;
    email: string | null;
    phone: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const onSubmit = async (data: TFormData) => {
        const { name, email, phone, message } = data;
        const newRequest = new Parse.Object("Requests");
        newRequest.set("name", name);
        newRequest.set("email", email);
        newRequest.set("phone", phone);
        newRequest.set("message", message);
		try {
			await newRequest.save();
			toast.success(`Ваше сообщение отправлено`);
		}
		catch (error) {
			toast.error("Что-то пошло не так");
		}
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="vstack gap-8">
            <div className="">
                <label htmlFor="name" className="form-label fs-lg fw-medium mb-4">
                    Ваше имя*{" "}
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
                                message: "Обязательное поле",
                            },
                        })}
                        id="name"
                        placeholder="Ваше имя"
                        className="form-control rounded-2"
                    />
                </div>
                {errors.name?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.name?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
                    Эл. почта
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-mail fs-5"></i>
                    </span>
                    <input
                        type="text"
                        {...register("email", {
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Неправильный формат эл. почты",
                            },
                        })}
                        id="email"
                        className="form-control rounded-2"
                        placeholder="Эл. почта"
                    />
                </div>
                {errors.email?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
                    Номер телефона*
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-phone-call fs-5"></i>
                    </span>
                    <input
                        type="text"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "Обязательное поле",
                            },
                        })}
                        id="phone"
                        className="form-control rounded-2"
                        placeholder="Номер телефона"
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
                            message: "Обязательное поле",
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
