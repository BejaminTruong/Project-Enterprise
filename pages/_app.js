import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
