import { Helmet, HelmetProvider } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Page not found · Board Game Reviews</title>
        </Helmet>
        <main className="space-y-12">
          <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
            We couldn't find the page you're looking for
          </h2>
          <p className="text-lg">
            Please check the address to make sure it was correct, or try again
            later.
          </p>
          <div>
            <p className="text-lg text-gray-700">
              You can also:{" "}
              <a
                href="/"
                className="text-lg text-black font-bold underline underline-offset-4"
              >
                read the latest reviews
              </a>{" "}
              or{" "}
              <a
                href="/reviews"
                className="text-lg text-black font-bold underline underline-offset-4"
              >
                browse all reviews
              </a>
            </p>
          </div>
        </main>
      </HelmetProvider>
    </>
  );
};
