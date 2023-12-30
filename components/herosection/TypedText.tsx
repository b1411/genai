"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";


export default function TypedText() {
    const [isMounted, setIsMounted] = useState(false);

    const router = usePathname().split("/")[1].toString();
    const lang = router as string;
    const strings = getDictionary(lang).home.herosection.typedText;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted)
        return <span className="fw-bold text-gradient-2 typed-animation">Technical Writing</span>;

    return <TypeAnimation sequence={strings} wrapper="span" speed={50} repeat={Infinity} className="fw-bold text-gradient-2 typed-animation" />;
}
