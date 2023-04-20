import { Outlet } from "react-router-dom";

export default function ReviewsLayout() {
  return (
    <div>
      <section className="space-y-24 pb-8 grid justify-items-start justify-center">
        <Outlet />
      </section>
    </div>
  );
}
