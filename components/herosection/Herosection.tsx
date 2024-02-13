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

export default function Herosection() {
    // let data: TChatbaseData = {
    //     messages: [],
    //     chatbotId: `${process.env.NEXT_PUBLIC_CHATBOT_ID}`,
    //     stream: false,
    //     temperature: 0.3,
    //     conversationId: ,
    // };
    // data.conversationId = `${Date.now()}`;
    // function sendMessage(e: SyntheticEvent) {
    //     function addMessage(text: string, direction: string) {
    //         const message = document.createElement("div");
    //         message.className = `chat-message ${direction}`;
    //         message.innerHTML = text;
    //         if (messagesList.current) {
    //             messagesList.current.appendChild(message);
    //             messagesList.current.scrollTo(0, messagesList.current.scrollHeight);
    //         }
    //     }

    //     e.preventDefault();
    //     setChatMessage("");

    //     addMessage(chatMessage, "sender");

    //     setIsWaitingForReply(true);

    //     let message = {
    //         content: chatMessage,
    //         role: "user",
    //     };
    //     data.messages.push(message);

    //     fetch("https://www.chatbase.co/api/v1/chat", {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             let reply = { content: res["text"], role: "assistant" };
    //             data.messages.push();
    //             addMessage(res["text"], "receiver");
    //             setIsWaitingForReply(false);
    //         });
    // }

    const router = usePathname();
    const messagesList = useRef<HTMLDivElement>(null);
    const lang = router.split("/")[1];
    const [chatMessage, setChatMessage] = useState("");
    const [isWaitingForReply, setIsWaitingForReply] = useState(false);
    let dict = getDictionary(lang).home.herosection;

    const { onOpenModal } = useAppContext();

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
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        marginTop: "50px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            marginBottom: "40px",
                                            marginTop: "60px",
                                        }}
                                    >
                                        {dict.chatTitle}
                                    </h2>
                                    <div className="chat-container">
                                        <iframe
                                            src="https://www.chatbase.co/chatbot-iframe/r0xH9AtFi_YHI-uARhnG-"
                                            width="100%"
                                            style={{
                                                height: "100%",
                                                minHeight: "100%",
                                            }}
                                            frameBorder="0"
                                        ></iframe>
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
