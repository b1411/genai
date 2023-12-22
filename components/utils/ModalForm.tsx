"use client";

import ReactModal from "react-modal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type TFormData = {
    name: string;
    email: string | null;
    phone: string;
    message: string;
};

function onSubmit(data: TFormData) {
    console.log(data);
}

export default function ModalForm({ isOpen }: { isOpen: boolean }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();
    return (
        <ReactModal
            isOpen={isOpen}
            appElement={
                typeof window !== "undefined" ? document.getElementsByTagName("body")[0] : undefined
            }
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    maxWidth: "500px",
                    border: "none",
                    borderRadius: "0",
                    padding: "0",
                    zIndex: 9999,
                },
            }}
        >
            <div>
                <form className="vstack gap-8" onSubmit={handleSubmit(onSubmit)}>
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
                    <div>
                        <label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
                            Ваш email*
                        </label>
                        <div className="input-group with-icon">
                            <span className="icon">
                                <i className="ti ti-email fs-5"></i>
                            </span>
                            <input
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле",
                                    },
                                })}
                                id="email"
                                placeholder="Ваш email"
                                className="form-control rounded-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
                            Ваш телефон*
                        </label>
                        <div className="input-group with-icon">
                            <span className="icon">
                                <i className="ti ti-mobile fs-5"></i>
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
                                placeholder="Ваш телефон"
                                className="form-control rounded-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="form-label fs-lg fw-medium mb-4">
                            Ваше сообщение*
                        </label>
                        <div className="input-group with-icon">
                            <span className="icon">
                                <i className="ti ti-comment fs-5"></i>
                            </span>
                            <textarea
                                {...register("message", {
                                    required: {
                                        value: true,
                                        message: "Обязательное поле",
                                    },
                                })}
                                id="message"
                                placeholder="Ваше сообщение"
                                className="form-control rounded-2"
                            ></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </ReactModal>
    );
}
