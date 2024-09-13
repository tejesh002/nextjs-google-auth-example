import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "1010382328550-gufo7uupv0su3rnivd8kcij337fgtan6.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.info(account)
      console.info(profile)
      console.info('===========')
      if (account.provider === "google") {
        return profile.email_verified
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
};


// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: "1010382328550-gufo7uupv0su3rnivd8kcij337fgtan6.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       console.info(account)
//       console.info(profile)
//       console.info('===========')
//       if (account.provider === "google") {
//         return profile.email_verified
//       }
//       return true // Do different verification for other providers that don't have `email_verified`
//     },
//   }
// });

export default NextAuth(authOptions);
