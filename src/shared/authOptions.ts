import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/sign_in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        console.log(credentials, "this i have credentials");
        //  get user
        const user: any = await handleCheckUser(
          credentials?.email,
          credentials.password
        );
        if (user) {
          return {
            id: user?._id,
            email: user?.email,
            name: user?.name,
            role: user?.role,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //@ts-ignore
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email as any;
        token.id = user.id as any;
        token.name = user.name as any;
        token.role = user.role as any;
      }
      return token as any;
    },
    //@ts-ignore
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as any;
        session.user.id = token.id as any;
        session.user.name = token.name as any;
        session.user.role = token.role as any;
      }
      return session as any;
    },
  },
};

async function handleCheckUser(email: string, password: string) {
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

  console.log(res.status, "------------ |||||||| ------------");

  if (res.status === 200) {
    const data = await res.json();

    console.log(data, "000000000000000000");
    return data?.data;
  } else {
    return false;
  }
}
