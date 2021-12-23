export default function Input({ prefix, postfix, type, value, onChange }) {
  return (
    <div className="container">
      {prefix && <div>{prefix}</div>}
      <input type={type} value={value} onChange={onChange} />
      {postfix && <div>{postfix}</div>}
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
          width: 40px;
          margin: 5px 0;
          border-color: var(--bordergray);
          border-style: solid;
        }

        input {
          padding: 10px;
          border: 1px solid lightgray;
          margin: 5px 0;
          outline: none;
        }
      `}</style>
      <style jsx>{`
        input {
          width: ${prefix || postfix ? "260px" : "300px"};
          border-radius: ${prefix
            ? "0 6px 6px 0"
            : postfix
            ? "6px 0 0 6px"
            : "6px"};
        }

        .container div {
          border-radius: ${prefix
            ? "6px 0 0 6px"
            : postfix
            ? "0 6px 6px 0"
            : "none"};
          border-width: ${prefix ? "1px 0 1px 1px" : postfix ? "1px 1px 1px 0" : "0"};
        }
      `}</style>
    </div>
  );
}
