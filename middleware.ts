import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  // Convert request headers to a plain object
  const headers = Object.fromEntries(request.headers.entries());
  const negotiator = new Negotiator({ headers });
  const languages = negotiator.languages();

  // Match the languages against the defined locales
  const matchedLocale = match(languages, locales, defaultLocale);

  // Ensure we only return the short locale (e.g., 'en' instead of 'en-US')
  return matchedLocale.split("-")[0]; // This will strip out any region information
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If a locale is already present, do nothing
  if (pathnameHasLocale) return;

  // Get the preferred locale
  const locale = getLocale(request);

  // Redirect to the new URL with the preferred locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
