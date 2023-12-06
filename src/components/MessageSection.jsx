import React from 'react';
import ContactNav from './ContactNav';
import ContactContent from './ContactContent';
import ContactMessageBar from './ContactMessageBar';

const MessageSection = () => {
  return (
    <div className="w-3/4">
        <ContactNav/>
        <ContactContent/>
        <ContactMessageBar/>
    </div>
  )
}

export default MessageSection