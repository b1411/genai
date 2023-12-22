import { ru } from "./dictionaries/ru";
import { en } from "./dictionaries/en";

export function getDictionary(lang: string) {
    switch (lang) {
        case "ru":
            return ru;
        case "en":
            return en;
        default:
            return ru;
    }
}
