import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import next from "next";
import { NextRequest, NextResponse } from "next/server";
import path, { parse } from "path";

let locales = ["en", "ru"];

function getLocale(request: NextRequest): string {
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

export function middleware(request: NextRequest) {
    const localeFromPathname = request.nextUrl.pathname.split("/")[1];

    const referer = request.headers.get("referer");

    const refererLocale = referer ? new URL(referer).pathname.split("/")[1] : null;

    if (!locales.includes(localeFromPathname)) {
        let locale;
        if (locales.includes(refererLocale as string)) {
            locale = refererLocale;
        } else {
            locale = getLocale(request);
        }

        request.nextUrl.pathname = `/${locale}${request.nextUrl.pathname}`;
        return Response.redirect(request.nextUrl);
    } else {
        return;
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|images|fonts|_vercel).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
