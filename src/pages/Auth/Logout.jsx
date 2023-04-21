import { Helmet, HelmetProvider } from "react-helmet-async";

export const Logout = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Signed out · Board Game Reviews</title>
        </Helmet>
        <main className="grid mx-auto justify-items-start">
          <section className="grid place-content-center mx-auto justify-items-center gap-32">
            <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
              You're signed out now.
            </h2>
            <p className="text-2xl ">Come back soon!</p>
            <div>
              <p className="text-lg text-gray-700 mt-36">
                Didn't mean to sign out?{" "}
                <a
                  href="/login"
                  className="text-lg text-black font-bold underline underline-offset-4"
                >
                  Sign back in
                </a>
                .
              </p>
            </div>
          </section>
        </main>
      </HelmetProvider>
    </>
  );
};
