import React from 'react';
import contactUsBanner from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
  return (
    <section className='md:mt-16 lg:mt-32'
    style={{
        background: `url(${contactUsBanner})`
    }}
    >
     <div className='card py-16'>
         <h4 className='text-center text-primary'>Contact Us</h4>
           <h2 className='text-center text-white text-2xl mb-8'> Stay connected with us</h2>
                <form className='flex flex-col mx-auto w-96'>
                  <input type="email" placeholder="Email Address" className="input input-bordered input-accent w-full mb-4" /> 
                    <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full mb-4" /> 
                    <textarea name="message" className="textarea textarea-info mb-8 h-28" placeholder="Your Message"></textarea>
                    <div className='mx-auto'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form> 
        </div>   
    </section>
  );
};

export default ContactUs;