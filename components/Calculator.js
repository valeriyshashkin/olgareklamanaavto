import { useState } from "react";

function Picker({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          padding: 20px;
          border-radius: 24px;
          border: 1px solid gray;
          margin-right: 14px;
          cursor: pointer;
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
}

export default function Calculator() {
  const [price, setPrice] = useState(0);

  return (
    <>
      <h1>Рассчитайте стоимость оклейки прямо сейчас</h1>
      <p>Выберите тип автомобиля</p>
      <div>
        <Picker>Легковая</Picker>
        <Picker>Универсал</Picker>
        <Picker>Автобус</Picker>
      </div>
      <p>Выберите части автомобиля, которые вы хотите оклеить</p>
      <div>
        <Picker>Боковые двери</Picker>
        <Picker>Капот</Picker>
        <Picker>Багажник</Picker>
        <Picker>Крыша</Picker>
      </div>
      <p>Нужна ли ламинация?</p>
      <div>
        <Picker>Да</Picker>
        <Picker>Нет</Picker>
      </div>
      <h2>Итоговая цена: {price} рублей</h2>
      <style jsx>{`
        h1 {
          font-size: 70px;
          margin: 0;
          margin-top: 30px;
        }

        p {
          font-size: 24px;
        }

        div {
          display: flex;
        }
      `}</style>
    </>
  );
}
