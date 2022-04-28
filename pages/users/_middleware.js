import { withAuth } from "next-auth/middleware";
export default withAuth({
  callbacks: {
    authorized({ token }) {
      if (token) {
        if (token.roles.some((e) => e.name === "Admin")) return true;
      }
      return false;
    },
  },
});
