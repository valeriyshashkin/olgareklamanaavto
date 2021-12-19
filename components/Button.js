export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          margin-left: auto;
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </button>
  );
}
