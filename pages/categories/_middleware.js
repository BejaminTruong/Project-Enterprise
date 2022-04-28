import { withAuth } from "next-auth/middleware";
export default withAuth({
  callbacks: {
    authorized({ token }) {
      if (token) {
        if (token.roles.some((e) => e.name === "Manager")) return true;
      }
      return false;
    },
  },
});
