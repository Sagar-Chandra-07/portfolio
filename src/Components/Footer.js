import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";



const Footer = () => {
  const copyRight= new Date().getFullYear()
  return (
    <footer>

      {/* <h4>Developed by Sagar Chandra Kalauni</h4> */}
      <h4 style={{fontFamily:"fantasy"}}>Copyright &copy; {copyRight} Sagar Chandra Kalauni</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SagarChandra07" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sagar-chandra-kalauni-822822315/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='mailTo:sagarchandra5730@gmail.com' target='_blank' rel='noreferrer'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer