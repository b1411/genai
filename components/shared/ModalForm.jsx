"use client";

import { useAppContext } from "@/context/appContext";
import { getDictionary } from "../../app/[lang]/dictionaries";
import { useForm } from "react-hook-form";
import { Modal } from "react-responsive-modal";
import { onSubmit } from "@/api/sendForm";

export default function ModalForm({ lang }) {
    const dict = getDictionary(lang).modalForm;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isOpen, onCloseModal } = useAppContext();

    return (
        <Modal
            open={isOpen}
            center
            onClose={onCloseModal}
            classNames={{
                modal: `my-modal my-modal-${isOpen ? "open" : "close"}`,
                closeButton: "close",
                overlay: `my-overlay my-modal-${isOpen ? "open" : "close"}`,
            }}
        >
            <h2>{dict.title}</h2>
            <p>{dict.description}</p>
            <form className="vstack gap-8" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="form-label fs-lg fw-medium mb-4" htmlFor="name">
                        {dict.form.name.label}*
                    </label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder={dict.form.name.placeholder}
                            {...register("name", {
                                required: dict.form.name.requiredError,
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: dict.form.name.patternError,
                                },
                            })}
                        />
                    </div>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label className="form-label fs-lg fw-medium mb-4" htmlFor="phone">
                        {dict.form.phone.label}*
                    </label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder={dict.form.phone.placeholder}
                            {...register("phone", {
                                required: dict.form.phone.requiredError,
                            })}
                        />
                    </div>
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div>
                    <label className="form-label fs-lg fw-medium mb-4" htmlFor="message">
                        {dict.form.application.label}*
                    </label>
                    <div className="input-group">
                        <textarea
                            onInput={(e) => {
                                e.target.style.height = "auto";
                                e.target.style.height = e.target.scrollHeight + "px";
                            }}
                            className="form-control"
                            style={{ height: "100px", resize: "none", overflow: "auto" }}
                            id="message"
                            name="message"
                            placeholder={dict.form.application.placeholder}
                            {...register("message", {
                                required: dict.form.application.requiredError,
                            })}
                        />
                    </div>
                    {errors.message && <span>{errors.message.message}</span>}
                </div>
                <button className="btn btn-primary" type="submit">
                    {dict.form.submitButton}
                </button>
            </form>
        </Modal>
    );
}
