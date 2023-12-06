import React from "react";

const SearchContact = () => {
  return (
    <div>
      <section className="h-12 bg-slate-800 flex items-center">
        <div className="bg-slate-700 h-9 rounded-md ml-3 w-full flex items-center text-gray-300">
          <span className="px-4 text-lg">
            <ion-icon name="search"></ion-icon>
          </span>
          <input
            className="bg-slate-700 outline-none w-full"
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
        <span className="mx-4 text-gray-300">
          <ion-icon name="filter"></ion-icon>
        </span>
      </section>
    </div>
  );
};

export default SearchContact;
