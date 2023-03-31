import { SERVER } from "@/services/server/server";
import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials";

interface CustomCredentialsConfig extends CredentialsConfig {
  email: string,
  password: string,
  provider: string
}

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/social/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0"
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},  
      async authorize(credentials) {
        const { email, password, provider } = credentials as {
          email: string,
          password: string,
          provider: string
        }
        const payload = { email, provider, password }
        const headers = { "Content-Type": "application/json" }
        const res = await axios.post(`${SERVER}/user/login`, payload, { headers } )
        const data = res?.data
        const user = {  id: data?.data?.sub, email: email, name: data?.data?.name}
        return user
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions)