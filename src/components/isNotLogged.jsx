import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuthenticated";

const notLoggedButtons = () => {
  if (!isAuthenticated()) {
    return (
      <div className="grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 sm:col-span-2">
        <Link
          to="/login"
          className="w-60 max-w-full sm:max-w-none text-center py-3.5 mb-5 md:mb-7 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-md shadow-button hover-scale tracking-add mt-5 xl:mt-5 xl:h-14"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="w-60 max-w-full sm:max-w-none text-center py-3.5 mb-5 md:mb-7 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-tertiary rounded-md shadow-button hover-scale tracking-add mt-5 xl:mt-5 xl:h-14"
        >
          Regístrate
        </Link>
      </div>
    );
  }
};

export default notLoggedButtons;
