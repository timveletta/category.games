import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <p>
          Made with &#x2764; by{" "}
          <a href="https://www.timveletta.com/">Tim Veletta</a>
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
