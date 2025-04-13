import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Socialmedia = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          <li className='socialmedia-links rounded-tr-md'><a href='https://www.linkedin.com/in/hemashree-ms/' target='_blank' rel='noreferrer' className='flex text-white items-center w-full justify-between'>LinkedIn <FaLinkedin size={30}/></a></li>
          <li className='socialmedia-links'><a href='https://github.com/Hemashree21' target='_blank' rel='noreferrer' className='flex text-white items-center w-full justify-between'>GitHub <FaGithub size={30}/></a></li>
          <li className='socialmedia-links'><a href='mailto:hemashree21.msh@gmail.com' target='_blank' rel='noreferrer' className='flex text-white items-center w-full justify-between'>Email <HiOutlineMail size={30}/></a></li>
          <li className='socialmedia-links rounded-br-md'><a href='https://docs.google.com/document/d/1ZoIvotQFD6XpZCLlFJ7Cq_2p8TiDUhNR/edit?usp=sharing&ouid=103992464292348292552&rtpof=true&sd=true' target='_blank' rel='noreferrer' download='true' className='flex text-white items-center w-full justify-between'>Resume <BsFillPersonLinesFill size={30}/></a></li>
        </ul>
    </div>
  )
}

export default Socialmedia