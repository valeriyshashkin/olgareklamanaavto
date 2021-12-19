export default function Button({ large, onClick, children, margin }) {
  return (
    <button onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        button {
          margin: ${margin ?? "0"};
          font-size: ${large ? "20px" : "14px"};
        }
      `}</style>
    </button>
  );
}
