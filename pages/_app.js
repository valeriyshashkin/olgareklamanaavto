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
      `}</style>
    </>
  );
}

export default MyApp;
