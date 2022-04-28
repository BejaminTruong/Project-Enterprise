import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();
const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          credentials
        );
        let user = res.data;
        if (res) return user;
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.roles = user.roles;
        token.name = user.fullName;
        token.image = user.avatar;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.image = token.image;
      session.user.roles = token.roles;
      session.user.userId = token.id;
      return session;
    },
  },
};
export default NextAuth(options);
