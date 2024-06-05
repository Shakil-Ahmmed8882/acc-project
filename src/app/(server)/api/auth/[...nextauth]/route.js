// Import necessary modules and components
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "@/app/(server)/lib/dbConnect";
import { UserModel } from "@/app/(server)/models/User";

/**
 * Authentication configuration for NextAuth.
 */
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      // Define the fields required for credentials authentication
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Authorize function to check user credentials.
       *
       * @param {Object} credentials - The credentials object containing email and password.
       * @returns {Object|null} - The user object if credentials are valid, otherwise null.
       */
      async authorize(credentials) {
        // Connect to the database
        await dbConnect();
        try {
          // Find the user by email
          const user = await UserModel.findOne({ email: credentials.email });
          if (user) {
            // Compare provided password with the hashed password in the database
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            // Return user object if password is correct
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          // Throw an error if something goes wrong during the authorization process
          throw new Error(err);
        }
        return null;
      },
    }),
    // Additional providers can be added here
  ],
  callbacks: {
    /**
     * Callback function for sign-in events.
     *
     * @param {Object} context - The context object containing user and account information.
     * @returns {boolean} - Returns true if the provider is "credentials", otherwise false.
     */
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
  },
};

// Export the NextAuth handler for both GET and POST requests
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// Dummy generateStaticParams function to satisfy static generation requirement
export async function generateStaticParams() {
  return [];
}
