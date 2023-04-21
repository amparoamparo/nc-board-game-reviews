import { Link } from "react-router-dom";

export function UserLoginCard({ handleUserSelection, userOption }) {
  return (
    <Link to="" onClick={() => handleUserSelection(userOption)}>
      <article className="border rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-md hover:-translate-y-1 transition-all min-h-full p-6 gap-4 items-center active:border-gray-400">
        <img
          src={userOption.avatar_url}
          alt={userOption.name}
          width="96"
          height="96"
          className="rounded-full aspect-square object-contain "
        />
        <h2 className="text-lg font-semibold">{userOption.name}</h2>
      </article>
    </Link>
  );
}
