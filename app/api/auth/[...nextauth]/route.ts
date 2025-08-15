import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Log In using NAME n PASS",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "siddhant@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username, password);

        const user = { id: "1", name: "Sidd" };

        return user ?? null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
