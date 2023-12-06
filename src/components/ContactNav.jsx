import React from 'react';
import { useParams } from 'react-router-dom';
import profile from "./images/profile.jpg";

const ContactNav = () => {

    const { num } = useParams();

    console.log("MESG SECTION LOG : " + num);


  return (
    <div>

      <section className="flex items-center p-2 bg-gray-700 h-14">
        
        <div className="flex-1 flex items-center p-2">
          <img className="w-10 rounded-full " src={profile} alt="my-profile" />
          <p className="ml-3 text-white font-semibold">Whatsapp User { num }</p>
        </div>

        <div className="flex-1 pl-2 w-full flex justify-end">
          <div className="rounded-full flex items-center justify-center w-16 hover:cursor-pointer px-3">
            <span className="text-xl text-gray-500">
              <ion-icon name="videocam"></ion-icon>
            </span>
            <span className="text-xl text-gray-500 pl-1">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </div>

          <span className="text-xl text-gray-300 px-3 hover:cursor-pointer">
            <ion-icon name="search"></ion-icon>
          </span>
          <span className="text-xl text-gray-300 px-3 hover:cursor-pointer">
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </span>
        </div>
      </section>

    </div>
  )
}

export default ContactNav