export default function InputWithSymbol({ type, symbol, value, onChange }) {
  return (
    <div className="container">
      <div>{symbol}</div>
      <input type={type} value={value} onChange={onChange} />
      <style jsx>{`
        .container {
          display: flex;
        }

        input {
          padding: 10px;
          width: 260px;
          border-radius: 0 6px 6px 0;
          border: 1px solid lightgray;
          margin: 5px 0;
          outline: none;
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
    </div>
  );
}
