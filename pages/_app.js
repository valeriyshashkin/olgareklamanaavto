function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --primary: #4394ff;
          --secondary: gray;
          --calculator-price: #bababa;
        }

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
