"use client";

import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-1.jpg";
import shapeImage from "@/public/images/shapes/blurry-shape-1.svg";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import TypedText from "./TypedText";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { SyntheticEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { TChatbaseData } from "@/types/chatbase";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/context/appContext";
// import {
//     MainContainer,
//     ChatContainer,
//     MessageList,
//     Message,
//     MessageInput,
// } from "@chatscope/chat-ui-kit-react";

export default function Herosection() {
    let contactId = crypto.randomUUID();

    const router = usePathname();
    const messagesList = useRef<HTMLDivElement>(null);
    const lang = router.split("/")[1];
    const [chatMessage, setChatMessage] = useState("");
    const [isWaitingForReply, setIsWaitingForReply] = useState(false);
    let dict = getDictionary(lang).home.herosection;

    const { onOpenModal } = useAppContext();

    function sendMessage(e: SyntheticEvent) {
        function addMessage(text: string, direction: string) {
            const message = document.createElement("div");
            message.className = `chat-message ${direction}`;
            message.innerHTML = text;
            if (messagesList.current) {
                messagesList.current.appendChild(message);
                messagesList.current.scrollTo(0, messagesList.current.scrollHeight);
            }
        }

        e.preventDefault();
        setChatMessage("");

        addMessage(chatMessage, "sender");

        setIsWaitingForReply(true);

        (async function () {
            try {
                let res = await fetch("http://[::1]:8349/webhook", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contactId: contactId,
                        message: chatMessage,
                    }),
                });
                setIsWaitingForReply(false);
                addMessage((await res.json()).message, "receiver");
            } catch {
                setIsWaitingForReply(false);
                addMessage("Ошибка", "receiver");
            }
        })();
    }

    return (
        <section
            className="hero-section style-1 overflow-hidden bg-dark pt-30 pb-15 pb-lg-20 pt-xl-36"
            data-bs-theme="dark"
        >
            <div className="container">
                <div className="row justify-center">
                    <div className="col-lg-9">
                        <div className="text-center">
                            <div className="position-relative z-1">
                                <Reveal el="p" className="text-primary-dark">
                                    {dict.subtitle}
                                </Reveal>
                                <Reveal el="h1" className="text-white mb-8" delay={0.15}>
                                    QAZ.AI <br /> <TypedText />
                                </Reveal>
                                <Reveal delay={0.3}>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onOpenModal();
                                        }}
                                        className="btn btn-lg btn-gradient-1"
                                    >
                                        {dict.button}
                                    </button>
                                </Reveal>
                            </div>
                            <Reveal delay={0.45}>
                                <div className="chat-container mt-8">
                                    <div className="chat-messages" ref={messagesList}></div>
                                    <div className="chat-input">
                                        <form
                                            className="input-group"
                                            onSubmit={(e) => sendMessage(e)}
                                        >
                                            <div className="form-input">
                                                <input
                                                    type="text"
                                                    placeholder="Введите ваше сообщение..."
                                                    required
                                                    min={10}
                                                    value={chatMessage}
                                                    onChange={(e) => setChatMessage(e.target.value)}
                                                />
                                                {!isWaitingForReply ? (
                                                    <button type="submit">
                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                    </button>
                                                ) : (
                                                    <button type="submit" disabled>
                                                        <FontAwesomeIcon
                                                            icon={faCircleNotch}
                                                            className="animate-spinnner"
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Reveal>
                            <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                                {dict.advantages.map((advantage: any, index: number) => (
                                    <li key={index}>{advantage}</li>
                                ))}
                            </ul>
                            {/* <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                                <Image src={reviewIcon1} alt="icon" className="img-fluid"/>
                                <Image src={reviewIcon2} alt="icon" className="img-fluid"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
