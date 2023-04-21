import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <section className="space-y-8 pb-8 grid justify-items-start">
      <Outlet />
    </section>
  );
}
