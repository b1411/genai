"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

let strings = ["инновации", 1500, "эффективность", 1500, "будущее", 1500];

export default function TypedText() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted)
        return <span className="fw-bold text-gradient-2 typed-animation">Technical Writing</span>;

    return <TypeAnimation sequence={strings} wrapper="span" speed={50} repeat={Infinity} className="fw-bold text-gradient-2 typed-animation" />;
}
