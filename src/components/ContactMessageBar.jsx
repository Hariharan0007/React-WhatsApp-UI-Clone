import React from 'react'

const ContactMessageBar = () => {
  return (
    <div>
        <section className=" bg-slate-800 h-20 flex items-center bottom-0 fixed w-3/4">
        <span className="pl-3 text-3xl font-extrabold text-gray-300 px-3 hover:cursor-pointer">
          <ion-icon name="add"></ion-icon>
        </span>
        <div className="bg-slate-700 h-12 rounded-md ml-3 w-full flex items-center text-gray-300">
          <span className="px-4 text-3xl hover:cursor-pointer">
            <ion-icon name="happy-outline"></ion-icon>
          </span>
          <input
            className="bg-slate-700 outline-none w-full"
            type="text"
            placeholder="Type a message"
          />
        </div>
        <span className="mx-4 text-3xl text-gray-300 hover:cursor-pointer">
          <ion-icon name="mic"></ion-icon>
        </span>
      </section>
    </div>
  )
}

export default ContactMessageBar