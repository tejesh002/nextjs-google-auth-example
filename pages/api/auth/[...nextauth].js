import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "abc1010382328550-gufo7uupv0su3rnivd8kcij337fgtan6.apps.googleusercontent.com",
      clientSecret: "abcGOCSPX-Zw1oqLSxrc8azjR3Ij-wI5usZmgI00",
    }),
    LinkedInProvider({
      clientId: '12386cv0nfpp6igww123',
      clientSecret: '1231Vt5wcW5xU53J7gY123',
      idToken: true,
      authorization:{ params: { scope: 'openid email profile' } },
      issuer: 'https://www.linkedin.com/oauth',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        return {
          // before:    
          // id: tokens.id_token
          // after:
          id: tokens.id_token || profile.id,
         // ...
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {

      console.info('=======account call back-------')
      console.info(account)
      // console.info(profile)
      console.info('===========')
      if (account.provider === "google") {
        return profile?.email_verified
      }

      if (account.provider === "linkedin") {
        console.info(account)
        // console.info(profile)
        // LinkedIn API doesn't return `email_verified`, you may verify in another way
        return true; // Add logic if necessary
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
  
};


export default NextAuth(authOptions);
