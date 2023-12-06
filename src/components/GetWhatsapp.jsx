import React from 'react'
import logo from './images/whatsapp_logo.png'

const GetWhatsapp = () => {
  return (
    <div>
        <section className="bg-slate-900 h-20 flex justify-center items-center">
            <div className="flex items-center text-green-700 font-semibold hover:cursor-pointer">
                <img className="w-8 mx-5" src={logo} alt="" />
                <p>Get Whatsapp for Windows</p>
                <span className="text-xl pt-1"><ion-icon name="chevron-forward-outline"></ion-icon></span>
            </div>   
        </section>
    </div>
  )
}

export default GetWhatsapp