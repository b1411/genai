import "server-only"

const dictionaries: { [key: string]: () => Promise<{}> } = {
    "en": () => import("./dictionaries/en.json").then((m) => m.default),
    "ru": () => import("./dictionaries/ru.json").then((m) => m.default)
}

export const getDictionary = async (locale: string) => await dictionaries[locale]()
