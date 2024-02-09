import localFont from "next/font/local";
import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import type { AppProps } from "next/app";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavbarMobile from "@/components/Global/NavbarMobile";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function App({ Component, pageProps }: AppProps) {
  const { isMd } = useMediaQuery();
  const pathname = usePathname();
  return (
    <>
      <div className={cabinetGrotesk.className}>
        {isMd ? <Navbar /> : <NavbarMobile />}
        <main
          className={classNames({
            "px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto":
              pathname !== "/search",
          })}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
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
