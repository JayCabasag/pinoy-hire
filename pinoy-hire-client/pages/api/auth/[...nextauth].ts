import { SERVER } from "@/services/server/server";
import axios from "axios";
import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { JWT } from "next-auth/jwt";

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
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string
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
        const user = {
          id: data?.data?.sub,
          email: email,
          name: data?.data?.name,
          image: data?.data?.image,
          type:  data?.data?.type
        }
        return user
      }
    })
  ],
  callbacks: {
    async session({ session, user, token } : { session: Session, user: User, token: JWT } ) {
      return session // The return type will match the one returned in `useSession()`
    },
    async signIn({ user, account} : { user: User, account: any }) {
      const provider = account?.provider
      console.log({
        ...user,
        provider
      })
      return true
    },
    async signOut({ session } : { session: Session }){
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions)