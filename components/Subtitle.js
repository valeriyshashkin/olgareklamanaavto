export default function Subtitle({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          font-size: 40px;
          margin-top: 20px;
          color: var(--primary);
        }
      `}</style>
    </>
  );
}
