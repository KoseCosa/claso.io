import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-grow bg-zinc-900 text-slate-200">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
