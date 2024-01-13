import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const currentPath = usePathname();
    const router = useRouter();

    const [currentLocale, setCurrentLocale] = useState();

    useEffect(() => {
        // Определяем текущую локаль из пути
        const localeSegment = currentPath.split("/")[1];
        if (localeSegment === "ru" || localeSegment === "en") {
            setCurrentLocale(localeSegment);
        } else {
            setCurrentLocale("en"); // Устанавливаем английский по умолчанию, если локаль не определена
        }
    }, [currentPath]);

    function handleChange(e) {
        const newLocale = e.target.value;
        // Обновляем URL, заменяя локаль
        const newPath = currentPath.replace(/^\/(en|ru)/, `/${newLocale}`);
        window.location.href = newPath;
    }

    return (
        <select
            className="form-select"
            onChange={handleChange}
            value={currentLocale}
            title="Смена языка"
        >
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    );
}
