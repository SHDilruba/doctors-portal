import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer
       style={{
          background: `url(${footer})`,
          backgroundSize: 'cover'
       }}
     className="mt-32 px-40">
      <div className="grid grid-cols-3 md:gap-36 lg:gap-64">
         <div className='flex flex-col pr-64'>
             <span className="footer-title">Services</span> 
              <Link to='/' className="link link-hover">Marketing</Link>
              <Link to='/' className="link link-hover">Advertisement</Link>
              <Link to='/' className="link link-hover">Branding</Link>
              <Link to='/' className="link link-hover">Design</Link>
          </div> 
          <div className='flex flex-col'>
              <span className="footer-title">Company</span> 
              <Link to='/' className="link link-hover">About us</Link>
              <Link to='/' className="link link-hover">Contact</Link>
              <Link to='/' className="link link-hover">Jobs</Link>
              <Link to='/' className="link link-hover">Press kit</Link>
           </div> 
          <div className='flex flex-col'>
              <span className=" footer-title">Legal</span> 
              <Link to='/' className="link link-hover">Terms of use</Link>
              <Link to='/' className="link link-hover">Privacy policy</Link>
              <Link to='/' className="link link-hover">Cookie policy</Link>
        </div>
     <div>
   </div>
  </div>
  <div className='text-center pb-16'>
       <p>Copyright © 2022 - All right reserved</p>
  </div>
</footer>
  );
};

export default Footer;