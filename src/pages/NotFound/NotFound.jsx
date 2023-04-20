import { Helmet, HelmetProvider } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Board Game Reviews - 404: Not found</title>
        </Helmet>
        <main>
          <h2>404: Not Found</h2>
          <h3>Nothing to see here.</h3>
          <p>
            <a href="/">Back to the home page</a>.
          </p>
        </main>
      </HelmetProvider>
    </>
  );
};
