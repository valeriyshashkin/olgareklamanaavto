function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        * {
          font-family: Open Sans;
        }

        :root {
          --from-color: #00f260;
          --to-color: #0575e6;
          --lightgray: #eee;
          --gray: #555;
          --bordergray: lightgray;
          --skeletongray: #d1d1d1;
        }
      `}</style>
    </>
  );
}

export default MyApp;
