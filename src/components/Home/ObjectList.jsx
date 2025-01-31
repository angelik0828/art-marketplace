import React from "react";
import { Link } from "react-router-dom";
import ArtworkItem from "../ArtworkItem";

const ObjectList = ({ title, seeMore, items }) => {
  return (
    <div>
      <div className="w-full font-bold flex justify-start items-end px-10 lg:px-20 xl:px-10 pt-2 pb-6 flex-wrap">
        <p className="text-3xl sm:text-4xl pr-5 py-2 xl:mr-4 sm:py-0">
          {title}
        </p>
        <Link
          to={seeMore}
          className="text-2xl tracking-tighter font-normal text-gray-600 underline hover:no-underline hover-scale--min"
        >
          Ver más
        </Link>
      </div>
      <div className="w-full flex flex-col flex-wrap xl:flex-nowrap md:flex-row md:justify-evenly lg:justify-evenly xl:justify-between xl:space-x-3 2xl:space-x-0 px-5 md:px-0 lg:px-20 xl:px-12 py-6 xl:pb-20">
        {items.length ? (
          items.map((item, i) => <ArtworkItem data={item} key={i} />)
        ) : (
          <span className="text-xl text-gray-500">
            Actualmente no hay productos para mostrar en esta sección
          </span>
        )}
      </div>
    </div>
  );
};

export default ObjectList;
