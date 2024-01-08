"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    let currentPath = usePathname();
    let router = useRouter();

    let [currentLocale, setCurrentLocale] = useState();

    let [currentPathRuLocale, setCurrentPathRuLocale] = useState("");
    let [currentPathEnLocale, setCurrentPathEnLocale] = useState("");

    useEffect(() => {
        setCurrentPathRuLocale(currentPath.replace("/en", "/ru"));
        setCurrentPathEnLocale(currentPath.replace("/ru", "/en"));

        if (currentPath.includes("/ru")) {
            setCurrentLocale("ru");
        } else if (currentPath.includes("/en")) {
            setCurrentLocale("en");
        }
    }, [currentPath]);

    function handleChange(e) {
        let newPath = e.target.value;
        router.push(newPath);
    }

    return (
        <select className="form-select" onChange={handleChange} value={currentPath}>
            <option value={currentPathRuLocale}>Русский</option>
            <option value={currentPathEnLocale}>English</option>
        </select>
    );
}
