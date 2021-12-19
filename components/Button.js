export default function Button({ onClick, children, margin }) {
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
        }
      `}</style>
    </button>
  );
}
