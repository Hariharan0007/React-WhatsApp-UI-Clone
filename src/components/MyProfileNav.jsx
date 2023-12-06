import React from "react";
import profile from './images/profile.jpg';

const MyProfileNav = () => {
  return (
    <div>
      
      <section className="flex items-center p-2 bg-gray-700 h-14">
        <div className="flex-1 p-2">
          <img className="w-10 rounded-full " src={profile} alt="my-profile" />
        </div>
        <div className="flex-1 pl-2 w-full flex justify-evenly">
          <span className="text-2xl text-gray-300 px-2">
            <ion-icon name="people"></ion-icon>
          </span>
          <span className="text-2xl text-gray-300 px-2">
            <ion-icon name="sync-circle"></ion-icon>
          </span>
          <span className="text-2xl text-gray-300 px-2">
            <ion-icon name="ellipsis-horizontal-circle"></ion-icon>
          </span>
          <span className="text-2xl text-gray-300 px-2">
            <ion-icon name="folder"></ion-icon>
          </span>
          <span className="text-2xl text-gray-300 px-2">
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </span>
        </div>
      </section>


    </div>
  );
};

export default MyProfileNav;
