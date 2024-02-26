import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Modern icons library that every designer should have, ready for instant use anytime and anywhere on your projects."
        />
        <meta
          name="keywords"
          content="magicoon, magicoon Library, Library icons, icons, icon, free icons, icons free, icons set, essential icons, icons pack, icons sketch, icons svg, icons xd, icons eps, icons ai, icons png, icons figma, icons pdf, popular icon, icons library, modern icons, UI designer, Free icons library, Download for free, icons app, app icons, ecommerce icon, svg icons, Premium Icons, ui, ui, ui ux"
        />
        <meta name="author" content="Seyfeddine Beroual" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          property="og:description"
          content="magicoon is a high-quality vector UI icons library that provides multiple formats and styles, Made for designers and developers."
        />
        <meta property="og:title" content="magicoon Library" />
        <meta property="og:type" content="digital product" />
        <meta property="og:url" content="http://www.magicoon.com" />
        <meta
          property="og:image"
          content="http://www.magicoon.com/img//og_magicoon.png"
        />

        <meta
          property="twitter:description"
          content="magicoon is a high-quality vector UI icons library that provides multiple formats and styles, Made for designers and developers."
        />
        <meta
          property="twitter:title"
          content="magicoon - 4,800+ UI icons library"
        />
        <meta property="twitter:type" content="digital product" />
        <meta property="twitter:url" content="http://www.magicoon.com" />
        <meta
          property="twitter:image"
          content="http://www.magicoon.com/img//og_magicoon.png"
        />

        <title>magicoon v1.3 - 5400+ Free and Premium UI Icons Library</title>
        <link
          rel="shortcut icon"
          type="image/svg+xml"
          href="./img/favicon.svg"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-882VHK47YB"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
