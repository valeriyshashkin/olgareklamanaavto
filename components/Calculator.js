import { useState } from "react";

function Protip({ children }) {
  return (
    <>
      <span>({children})</span>
      <style jsx>{``}</style>
    </>
  );
}

function Picker({ children, onClick, name, active }) {
  function handleOnClick() {
    onClick(name);
  }

  return (
    <div onClick={handleOnClick}>
      {children}
      <style jsx>{`
        div {
          padding: 20px;
          border-radius: 24px;
          margin-right: 14px;
          cursor: pointer;
          user-select: none;
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
      <style jsx>{`
        div {
          background: ${active ? "var(--primary)" : "white"};
          border: 1px solid ${active ? "var(--primary)" : "var(--secondary)"};
          color: ${active ? "white" : "var(--secondary)"};
        }
      `}</style>
    </div>
  );
}

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("passenger");
  const [parts, setParts] = useState(["doors", "hood"]);
  const [lamination, setLamination] = useState("yes");

  function changeType(name) {
    setType(name);
  }

  function changeParts(name) {
    if (parts.includes(name)) {
      setParts(parts.filter((p) => p !== name));
    } else {
      setParts([...parts, name]);
    }
  }

  function changeLamination(name) {
    setLamination(name);
  }

  return (
    <>
      <h1>Рассчитайте стоимость оклейки прямо сейчас</h1>
      <p>Выберите тип автомобиля</p>
      <div>
        <Picker
          active={type === "passenger"}
          name="passenger"
          onClick={changeType}
        >
          Легковая
        </Picker>
        <Picker
          active={type === "universal"}
          name="universal"
          onClick={changeType}
        >
          Универсал
        </Picker>
        <Picker active={type === "bus"} name="bus" onClick={changeType}>
          Автобус
        </Picker>
      </div>
      <p>Выберите части автомобиля, которые вы хотите оклеить</p>
      <div>
        <Picker
          active={parts.includes("doors")}
          name="doors"
          onClick={changeParts}
        >
          Боковые двери
        </Picker>
        <Picker
          active={parts.includes("hood")}
          name="hood"
          onClick={changeParts}
        >
          Капот
        </Picker>
        <Picker
          active={parts.includes("trunk")}
          name="trunk"
          onClick={changeParts}
        >
          Багажник
        </Picker>
        <Picker
          active={parts.includes("roof")}
          name="roof"
          onClick={changeParts}
        >
          Крыша
        </Picker>
      </div>
      <p>
        Нужна ли ламинация?{" "}
        <Protip>
          Ламинация - специальное покрытие, предназначено для защиты пленки от
          внешних воздействий, таким образом продлевая срок службы
        </Protip>
      </p>
      <div>
        <Picker
          active={lamination === "yes"}
          name="yes"
          onClick={changeLamination}
        >
          Да
        </Picker>
        <Picker
          active={lamination === "no"}
          name="no"
          onClick={changeLamination}
        >
          Нет
        </Picker>
      </div>
      <h2>Итоговая цена: {price} рублей</h2>
      <style jsx>{`
        h1 {
          font-size: 70px;
          margin: 0;
          padding-top: 30px;
          color: var(--primary);
        }

        p {
          font-size: 24px;
          color: var(--secondary);
        }

        div {
          display: flex;
          color: var(--secondary);
        }

        h2 {
          margin-bottom: 0;
          color: var(--calculator-price);
          font-size: 30px;
        }
      `}</style>
    </>
  );
}
