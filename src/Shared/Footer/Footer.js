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
     className="mt-32 ">
      <div className="grid grid-cols-3 md:gap-8 lg:gap-32 px-16 lg:ml-36">
         <div className='flex flex-col me-8'>
             <span className="footer-title">SERVICES</span> 
              <Link to='/' className="link link-hover">Emergency Checkup</Link>
              <Link to='/' className="link link-hover">Monthly Checkup</Link>
              <Link to='/' className="link link-hover">Weekly Checkup</Link>
              <Link to='/' className="link link-hover">Deep Checkup</Link>
          </div> 
          <div className='flex flex-col'>
              <span className="footer-title">ORAL HEALTH</span> 
              <Link to='/' className="link link-hover">Fluoride Treatment</Link>
              <Link to='/' className="link link-hover">Cavity Filling</Link>
              <Link to='/' className="link link-hover">Teath Whitening</Link>
          </div>
          <div className='flex flex-col'>
              <span className=" footer-title">OUR ADDRESS</span> 
              <Link to='/' className="link link-hover">101010 Hudson</Link>
              <Link to='/' className="link link-hover">New York</Link>
              <Link to='/' className="link link-hover">USA</Link>
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