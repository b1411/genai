"use client";

import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import Parse from "@/utils/parse";
import { toast } from "react-toastify";
import { getDictionary } from "@/app/[lang]/dictionaries";

type TFormData = {
    name: string;
    email: string | null;
    phone: string;
    message: string;
};

export default function ContactForm({ lang }: { lang: string }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const dict = getDictionary(lang).contact.contactSection.contactForm;

    const onSubmit = async (data: TFormData) => {
        const { name, email, phone, message } = data;
        const newRequest = new Parse.Object("Requests");
        newRequest.set("name", name);
        newRequest.set("email", email);
        newRequest.set("phone", phone);
        newRequest.set("message", message);
        try {
            await newRequest.save();
            toast.success(`Мы скоро свяжемся с вами`);
        } catch (error: any) {
            if (error.code === 137) {
                toast.error(`Вы уже отправляли сообщение`);
            } else {
                toast.error(`Ошибка отправки сообщения`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="vstack gap-8">
            <div className="">
                <label htmlFor="name" className="form-label fs-lg fw-medium mb-4">
                    {dict.form.name.label}*{" "}
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
                                message: dict.form.name.requiredError,
                            },
                            pattern: {
                                value: /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+$/,
                                message: dict.form.name.patternError,
                            },
                        })}
                        id="name"
                        placeholder={dict.form.name.placeholder}
                        className="form-control rounded-2"
                    />
                </div>
                {errors.name?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.name?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
                    {dict.form.email.label}
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-mail fs-5"></i>
                    </span>
                    <input
                        type="email"
                        id="email"
                        className="form-control rounded-2"
                        placeholder={dict.form.email.placeholder}
                        {...register("email", {
                            required: {
                                value: true,
                                message: dict.form.email.requiredError,
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: dict.form.email.patternError,
                            },
                        })}
                    />
                </div>
                {errors.email?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
                    {dict.form.phone.label}*
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
                                message: dict.form.phone.requiredError,
                            },
                        })}
                        id="phone"
                        className="form-control rounded-2"
                        placeholder={dict.form.phone.placeholder}
                    />
                </div>
                {errors.phone?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.phone?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="message" className="form-label fs-lg fw-medium mb-4">
                    {dict.form.application.label}*
                </label>
                <textarea
                    id="message"
                    {...register("message", {
                        required: {
                            value: true,
                            message: dict.form.application.requiredError,
                        },
                    })}
                    className="form-control rounded-2"
                    style={{
                        resize: "none",
                        minHeight: "200px",
                        overflowY: "hidden",
                    }}
                    onInput={(e: SyntheticEvent<HTMLTextAreaElement>) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
                    }}
                    placeholder={dict.form.application.placeholder}
                    rows={4}
                ></textarea>
                {errors.message?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.message?.message}</p>
                )}
            </div>
            <div className="">
                <button type="submit" className="btn btn-primary-dark">
                    {dict.form.submitButton}
                </button>
            </div>
        </form>
    );
}
