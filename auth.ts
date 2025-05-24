import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});
