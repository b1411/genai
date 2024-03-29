import Parse from "@/utils/parse";
import { toast } from "react-toastify";

export const onSubmit = async (data) => {
    const { name, email, phone, message } = data;
    const newRequest = new Parse.Object("Requests");
    newRequest.set("name", name);
    newRequest.set("email", email);
    newRequest.set("phone", phone);
    newRequest.set("message", message);
    try {
        await newRequest.save();
        toast.success(`Ваше сообщение отправлено`);
    } catch (error) {
        if (error.code === 137) {
            toast.error(`Вы уже отправляли сообщение`);
        } else {
            toast.error(`Ошибка отправки сообщения`);
        }
    }
};

export const sendMail = async (email) => {
    const newRequest = new Parse.Object("Newsletter");
    newRequest.set("email", email);
    try {
        await newRequest.save();
        toast.success(`Вы подписались на рассылку`);
    } catch (error) {
        if (error.code === 137) {
            toast.error(`Вы уже подписаны на рассылку`);
        } else {
            toast.error(`Ошибка подписки на рассылку`);
        }
    }
};
