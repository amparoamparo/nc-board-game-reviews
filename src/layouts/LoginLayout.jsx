import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <div>
      <section className="space-y-8 pb-8 grid justify-items-start">
        <Outlet />
      </section>
    </div>
  );
}
