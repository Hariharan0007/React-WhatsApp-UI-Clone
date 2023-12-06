import React from 'react'
import profile from './images/profile.jpg';
import { v4 as uid } from 'uuid';
import { useNavigate } from 'react-router-dom';


const ContactsList = () => {

    const nav = useNavigate();

    var users = [];

    for(let i=1;i<=20;i++){
        const newUser = {
            id:uid(),
            num:i
        }
        users = [...users,newUser]
    }


  return (
    <div>
        <section className="no-scrollbar scrollable-section">
        
        {users.map((list) => (

            <div className="bg-slate-800 hover:bg-slate-700 hover:cursor-pointer flex items-center h-20" key={list.id} onClick={() => nav(`/chat/${list.num}/${list.id}`)}>
            <div className="mx-4">
                <img className="w-16 rounded-full" src={profile} alt="" />
            </div>
            <div className="w-full mr-6">
                <div className="flex justify-between items-center"><p className="text-white text-lg">Whatsapp User {list.num}</p><p className="text-xs text-gray-400">6:30 AM</p></div>
                <p className="text-gray-400 text-sm">Hello...I am using whatsapp</p>
            </div>
            </div>

        ))}
            

            

        </section> 

        
    </div>
  )
}

export default ContactsList