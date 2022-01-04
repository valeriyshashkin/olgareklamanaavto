import NavigationBar from "./NavigationBar";
import Header from "./Header";

export default function Layout({ children, active }) {
  return (
    <div>
      <Header admin />
      <h3>
        <div className="container">{active}</div>
      </h3>
      <div className="container row">
        <div className="navigation">
          <NavigationBar active={active} />
        </div>
        <div className="settings">{children}</div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          justify-content: space-between;
        }

        .container {
          max-width: 1024px;
          margin: 0 auto;
        }

        @media (max-width: 720px) {
          .navigation {
            display: none;
          }
        }

        .settings {
          width: 100%;
        }

        h3 {
          border-bottom: 1px solid var(--bordergray);
          padding-top: 70px;
          padding-bottom: 40px;
          font-size: 36px;
        }
      `}</style>
    </div>
  );
}
