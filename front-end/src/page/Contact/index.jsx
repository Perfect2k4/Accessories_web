import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="heading-01 text-center">Contact Us</h1>
      <h3 className="heading-03 text-center w-[] h-[]">
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </h3>
      <div className="flex justify-between">
        <input type="text" placeholder="First name" className="fill" />
        <input type="text" placeholder="Last name" className="fill" />
      </div>
      <div className="flex justify-center">
        <input type="email" placeholder="Email" className="fill" />
        <input type="text" placeholder="Subject" className="fill" />
      </div>
      <input type="text" placeholder="Message" className="fill" />
      <button className="w-[500px] h-[53px] text-[16px] font-bold bg-black text-white">
        Send
      </button>
    </div>
  );
};

export default Contact;
