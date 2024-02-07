import localFont from "next/font/local";
import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavbarMobile from "@/components/Global/NavbarMobile";

export default function App({ Component, pageProps }: AppProps) {
  const { isMd } = useMediaQuery();
  return (
    <div className={cabinetGrotesk.className}>
      {isMd ? <Navbar /> : <NavbarMobile />}
      <main className="max-w-[1240px] mx-auto px-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

const cabinetGrotesk = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Black.woff2",
      style: "black",
      weight: "900",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.woff2",
      style: "bold",
      weight: "700",
    },
    {
      path: "./fonts/CabinetGrotesk-Extrabold.woff2",
      style: "extrabold",
      weight: "800",
    },
    {
      path: "./fonts/CabinetGrotesk-Light.woff2",
      style: "light",
      weight: "300",
    },
    {
      path: "./fonts/CabinetGrotesk-Medium.woff2",
      style: "medium",
      weight: "500",
    },
    {
      path: "./fonts/CabinetGrotesk-Regular.woff2",
      style: "regular",
      weight: "400",
    },
  ],
});
