export default function Button({ large, onClick, children, margin, labelFor }) {
  return (
    <>
      {labelFor ? (
        <label htmlFor={labelFor} onClick={onClick}>{children}</label>
      ) : (
        <button onClick={onClick}>{children}</button>
      )}
      <style jsx>{`
        button, label {
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
          display: inline-block;
        }
      `}</style>
      <style jsx>{`
        button, label {
          margin: ${margin ?? "0"};
          font-size: ${large ? "20px" : "14px"};
        }
      `}</style>
    </>
  );
}
