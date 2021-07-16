import { MainLayout } from "../components/layout/MainLayout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
