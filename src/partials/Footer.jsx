import React from 'react';
import { Link } from 'react-router-dom';

import JuanLogo from '../images/juan-logo.webp'

function Footer() {
  return (
<footer className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py12 border-t border-gray-200 dark:border-gray-800 -mt-px font-poppins">
            <div className='text-xs flex justify-end'>
                <p>Copyright &copy; 2023 <span>Juan Serna</span> All Rights Reserved</p>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;
