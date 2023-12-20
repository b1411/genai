import Parse from "parse";

Parse.initialize(process.env.NEXT_PUBLIC_PARSE_APP_ID as string, process.env.NEXT_PUBLIC_PARSE_JS_KEY);
Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL as string;

export default Parse;