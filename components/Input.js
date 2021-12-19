export default function Input({ prefix, type, value, onChange }) {
  return (
    <div className="container">
      {prefix && <div>{prefix}</div>}
      <input type={type} value={value} onChange={onChange} />
      <style jsx>{`
        .container {
          display: flex;
        }

        input:focus {
          border-color: var(--to-color);
        }

        .container div {
          background: #eee;
          color: var(--gray);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px 0 0 6px;
          width: 40px;
          margin: 5px 0;
          border: 1px solid var(--bordergray);
          border-right: none;
        }
      `}</style>
      <style jsx>{`
        input {
          padding: 10px;
          width: ${prefix ? "260px" : "300px"};
          border-radius: ${prefix ? "0 6px 6px 0" : "6px"};
          border: 1px solid lightgray;
          margin: 5px 0;
          outline: none;
        }
      `}</style>
    </div>
  );
}
