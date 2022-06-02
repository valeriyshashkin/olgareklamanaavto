import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Price({ title, price, features }) {
  return (
    <>
      <div className="mb-10 max-w-xs px-5 last:m-0">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl mt-2">от <span className="font-bold">{price}</span> рублей</p>
        {features.map((f, i) => (
          <div className="flex items-center my-4" key={i}>
            <BadgeCheckIcon className="w-6 h-6 shrink-0 fill-blue-500 mr-2" />
            <div key={i}>{f}</div>
          </div>
        ))}
      </div>
    </>
  );
}
