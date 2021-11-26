import Subtitle from "./Subtitle";
import Image from "next/image";

function Item({ children, price }) {
  return (
    <div className="container">
      <div className="image">
        <Image alt="" src="/06082021-002007-1.jpg" layout="fill" />
      </div>
      <p className="title">{children}</p>
      <p className="price">{price} руб.</p>
      <style jsx>{`
        .image {
          height: 200px;
          position: relative;
        }

        .title {
          padding: 20px;
          margin: 0;
          color: var(--primary);
          height: 50px;
        }

        .price {
          padding: 20px;
          padding-top: 0;
          margin: 0;
          font-size: 30px;
          color: var(--secondary);
        }

        .container {
          width: 200px;
          border: 1px solid var(--secondary);
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
}

function NavigationArrow({ left, right }) {
  return (
    <div>
      {left && "←"}
      {right && "→"}
      <style jsx>{`
        div {
          width: 60px;
          margin-right: 20px;
          border: 1px solid var(--secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--secondary);
        }
      `}</style>
    </div>
  );
}

export default function Catalog() {
  return (
    <>
      <Subtitle>Каталог</Subtitle>
      <div>
        <NavigationArrow left />
        <Item price={10000}>Полная оклейка легкового автомобиля</Item>
        <Item price={30000}>Полная оклейка автобуса</Item>
        <Item price={5000}>Небольшая наклейка на автомобиль</Item>
        <NavigationArrow right />
      </div>
      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  );
}
