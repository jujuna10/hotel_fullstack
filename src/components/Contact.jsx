
import React from 'react'


function Contact() {

        const ourLinks = ["Home", "About", "Room", "Contact Ux"];
        const ourServices = ["FAQ", "Support", "Privacy", null];
        const finance = ["Cards", "Linked Accounts", "Payment", null]
        const company = ["About Us", "Contact", "Sustainability", "Career"];


    return (
        <div className="w-full bg-black flex justify-around py-12">
            <div className='flex flex-col gap-5'>
                <p className='text-white'>181 Bay StreetBay Wellington</p>
                <p className='text-white'>Tower, Suite 292 Toronto,</p>
                <p className='text-white'>OntarioM5j2t3</p>
            </div>
            <div className="w-[45%]">
                <div className="grid grid-cols-4 gap-8 mb-6">
                    <div className="text-white font-bold">Our Links</div>
                    <div className="text-white font-bold">Our Services</div>
                    <div className="text-white font-bold">Finance</div>
                    <div className="text-white font-bold">Company</div>
                </div>

                <div className='flex flex-col justify-center'>
                    {ourLinks.map((item, index) => (
                        <div key={index} className="flex gap-32 justify-end mb-4">
                            <div className="flex flex-col w-1/2">
                                <p className="text-white">{item}</p>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="text-white">{ourServices[index] || ""}</p>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="text-white">{finance[index] || ""}</p>
                            </div>
                            <div className="flex flex-col w-[100%]">
                                <p className="text-white">{company[index] || ""}</p>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
  );
};

export default Contact;