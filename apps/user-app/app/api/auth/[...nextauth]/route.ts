import NextAuth from "next-auth";
import { authOption } from "../../../lib/auth";

console.log("inisde route auth")
const handler = NextAuth(authOption);
export { handler as GET, handler as POST }
// export const GET = handler
// export const POST = handler

// nextAuth lets u do session management , its lets u create cookies and jwt and send them to browser.