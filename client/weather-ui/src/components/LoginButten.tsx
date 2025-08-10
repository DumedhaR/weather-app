import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="bg-white text-md md:text-lg text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition mt-10"
      onClick={() => loginWithRedirect()}
    >
      Get Started
    </button>
  );
};

export default LoginButton;
