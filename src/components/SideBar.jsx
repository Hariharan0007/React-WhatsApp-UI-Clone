import React from 'react'
import MyProfileNav from './MyProfileNav'
import SearchContact from './SearchContact'
import ContactsList from './ContactsList'
import GetWhatsapp from './GetWhatsapp'

const SideBar = () => {
  return (
    <div className="w-1/4 h-screen">
        <MyProfileNav/>
        <SearchContact/>
        <ContactsList/>
        <GetWhatsapp/>
    </div>
  )
}

export default SideBar