import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ru"];

function getLocale(request: NextRequest): string {
    let headers = {
        "accept-language": "ru,en",
    };

    let languages = new Negotiator({ headers }).languages();
    let locales = ["en", "ru"];
    let defaultLocale = "en-US";

    let acceptedLanguage = match(languages, locales, defaultLocale);
    return acceptedLanguage;
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale: string) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|images|fonts|_vercel).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
