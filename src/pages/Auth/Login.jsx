import { UserLoginCard } from "../../components/UserLoginCard";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../auth/auth";
import reqURLs from "../../api";

export function Login() {
  const { user, login } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${reqURLs.APIUsers}`);
      const { users } = await response.json();
      setAllUsers(users);
    };
    getUsers();
  }, [allUsers]);

  const handleUserSelection = (userOption) => {
    login(userOption);
  };

  // Redirect to the dashboard if the user is logged in
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Sign in to Board Game Reviews - Board Game Reviews`}</title>
        </Helmet>
        <div className="grid mx-auto justify-items-start">
          <section className="grid place-content-center mx-auto justify-items-start gap-8">
            <h2 className="font-Mulish tracking-wide text-2xl md:text-5xl font-black">
              Sign in
            </h2>
            <p className="text-xl">Pick a user to log in as them:</p>
            <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-12">
              {allUsers.map((userOption, index) => {
                return (
                  <UserLoginCard
                    key={index}
                    handleUserSelection={handleUserSelection}
                    userOption={userOption}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </HelmetProvider>
    </>
  );
}
