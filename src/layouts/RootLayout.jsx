import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="App p-6 pt-8 sm:pt-12 lg:px-20 xl:px-64 space-y-8 sm:space-y-24">
      <div className="flex flex-col sm:flex-row mb-0 justify-between">
        <Header />
        <Nav />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
