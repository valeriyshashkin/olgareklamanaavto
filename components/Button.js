import Spinner from "./Spinner";

export default function Button({
  large,
  onClick,
  children,
  margin,
  labelFor,
  red,
  loading,
}) {
  return (
    <>
      {labelFor ? (
        <label htmlFor={labelFor} onClick={onClick}>
          {loading && <div><Spinner width={large ? 24 : 18} /></div>}
          {children}
        </label>
      ) : (
        <button onClick={onClick} disabled={loading}>
          {loading && <div><Spinner width={large ? 24 : 18} /></div>}
          {children}
        </button>
      )}
      <style jsx>{`
        button,
        label {
          border: none;
          border-radius: 6px;
          padding: 10px;
          display: inline-block;
          position: relative;
        }

        div {
          position: absolute;
          left: 50%;
          transform: translate(-50%);
        }
      `}</style>
      <style jsx>{`
        button,
        label {
          margin: ${margin ?? "0"};
          font-size: ${large ? "20px" : "14px"};
          background: ${loading
            ? "var(--loadinggray)"
            : red
            ? "var(--red)"
            : "var(--to-color)"};
          color: ${loading ? "transparent" : "white"};
          cursor: ${loading ? "default" : "pointer"};
        }

        div {
          color: ${loading ? "white" : "transparent"};
        }
      `}</style>
    </>
  );
}
