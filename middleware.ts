import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import next from "next";
import { NextRequest, NextResponse } from "next/server";
import path, { parse } from "path";

let locales = ["en", "ru"];

function getLocale(request: NextRequest, pathname: string): string {
    let locales = ["en", "ru"];
    let defaultLocale = "en";

    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value;
    });

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

    let acceptedLanguage = match(languages, locales, defaultLocale);
    return acceptedLanguage;
}

function parseLocaleFromReferer(request: NextRequest): string | null {
    const referer = request.headers.get("referer");
    if (!referer) {
        return null;
    }

    const url = new URL(referer);
    const locale = url.pathname.split("/")[1];
    return locales.includes(locale) ? locale : null;
}

export function middleware(request: NextRequest) {
    let pathname = request.nextUrl.pathname;
    let targetLocale = null;

    // Check if the URL contains a locale
    if (locales.includes(pathname.split("/")[1])) {
        targetLocale = pathname.split("/")[1];
        console.log("URL locale: " + targetLocale);
        return
    } else if (parseLocaleFromReferer(request)) {
        targetLocale = parseLocaleFromReferer(request);
        console.log("Referer locale: " + targetLocale);
    } else {
        targetLocale = getLocale(request, pathname);
        console.log("Locale: " + targetLocale);
    }

    request.nextUrl.pathname = `/${targetLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|images|fonts|_vercel).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
