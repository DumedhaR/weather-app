import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="bg-white text-md md:text-lg text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition mt-12"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
