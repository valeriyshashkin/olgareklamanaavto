import { useState } from "react";

export default function InputWithSymbol({ type, symbol, value, onChange }) {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div className="container">
      <div>{symbol}</div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={onChange}
      />
      <style jsx>{`
        .container {
          position: relative;
        }

        input {
          padding: 10px;
          padding-left: 50px;
          width: 260px;
          border-radius: 6px;
          border: 1px solid gray;
          margin: 5px 0;
          outline-color: var(--to-color);
        }
      `}</style>
      <style jsx>{`
        .container div {
          position: absolute;
          background: ${focus ? "var(--to-color)" : "gray"};
          color: white;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          border-radius: 6px 0 0 6px;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}
