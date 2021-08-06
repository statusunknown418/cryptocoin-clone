import { MainLayout } from "../components/layout/MainLayout";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UserProvider>
  );
}

export default MyApp;
