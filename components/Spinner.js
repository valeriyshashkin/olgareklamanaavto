// https://codepen.io/mrrocks/pen/EiplA
export default function Spinner({ width }) {
  return (
    <>
      <svg
        width={width + "px"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66 66"
      >
        <circle
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
      <style jsx>{`
        svg {
          animation: rotator 1.4s linear infinite;
        }

        @keyframes rotator {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(270deg);
          }
        }

        circle {
          stroke-dasharray: 187;
          stroke-dashoffset: 0;
          transform-origin: center;
          animation: dash 1.4s ease-in-out infinite;
          stroke: white;
        }

        @keyframes dash {
          0% {
            stroke-dashoffset: 187;
          }
          50% {
            stroke-dashoffset: 20;
            transform: rotate(135deg);
          }
          100% {
            stroke-dashoffset: 187;
            transform: rotate(450deg);
          }
        }
      `}</style>
    </>
  );
}