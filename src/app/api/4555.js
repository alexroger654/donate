import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/sign_in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        console.log(credentials, "this i have credentials");
        //  get user
        const user = await handleCheckUser(
          credentials?.email,
          credentials.password
        );
        if (user) {
          return {
            id: user?._id,
            email: user?.email,
            name: user?.name,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
        token.name = user.name;
      }
      console.log(token, "token");
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

async function handleCheckUser(email, password) {
  console.log(
    `${process.env.NEXT_PUBLIC_URL}/user/login`,
    "======================================================="
  );
  const res = await fetch(
    `https://donate-server-2-git-main-alexroger654s-projects.vercel.app/api/v1/user/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  console.log(res.status, "------------------------");

  if (res.status == 200) {
    const data = await res.json();
    return data?.data;
  } else {
    return false;
  }
}
