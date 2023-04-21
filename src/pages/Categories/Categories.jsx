import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import reqURLs from "../../api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then(() => {
      setIsLoading(false);
    });
  }, []);

  const getCategories = async () => {
    const response = await fetch(`${reqURLs.APICategories}`);
    const { categories } = await response.json();
    setCategories(categories);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Categories - Board Game Reviews</title>
        </Helmet>
        <div className="grid mx-auto justify-items-start gap-8">
          <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
            Categories
          </h2>
          {isLoading ? (
            <p className="text-xl font-medium text-gray-600">
              Loading categories...
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-12 mx-auto">
              {categories.map((category, index) => {
                const categoryLowercase = category.slug.split("-").join(" ");
                const categorySentenceCase =
                  categoryLowercase.charAt(0).toUpperCase() +
                  categoryLowercase.slice(1);
                return (
                  <article className="">
                    <Link
                      to={`/reviews?category=${category.slug}`}
                      className="border rounded-xl overflow-hidden bg-white hover:shadow-md hover:-translate-y-1 transition-all min-h-full p-6 gap-10 items-center active:border-gray-400 justify-between flex flex-col flex-grow my-4 px-4"
                    >
                      <div className="flex flex-col flex-grow gap-4 my-4 px-4">
                        <div className="flex justify-between">
                          <h3
                            className="text-lg font-bold  tracking-wider text-black"
                            aria-hidden="true"
                          >
                            {categorySentenceCase}
                          </h3>
                        </div>
                        <p>{category.description}</p>
                        <div className="mt-auto text-lg text-black font-bold flex justify-between">
                          <p>{categorySentenceCase} reviews</p>
                          <span
                            className="material-symbols-sharp rotate-90"
                            aria-hidden="true"
                          >
                            straight
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </HelmetProvider>
    </>
  );
};

export default Categories;
