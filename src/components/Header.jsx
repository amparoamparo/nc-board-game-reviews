import { ReactComponent as Logo } from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
      <a href="/">
        <div className="flex flex-row items-center justify-center md:justify-normal space-x-4">
          <Logo
            alt=""
            width={100}
            height="100%"
            className="w-8 sm:w-10 h-auto"
          />
          <h1 className="text-lg sm:text-2xl text-red-600 font-bold">
            Board Game Reviews
          </h1>
        </div>
      </a>
    </header>
  );
}
