export default function Title({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          text-align: center;
          padding-top: 20px;
        }
      `}</style>
    </>
  );
}
