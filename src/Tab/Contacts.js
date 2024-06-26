import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
    return (
        <div className="pt-4 md:p-4 flex flex-col">
            {/* Mail */}
            <div className="flex ">
                <div className="p-1 w-8">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div>
                <div className="ml-4 p-1 mt-1 hover:text-red-800"><a href="mailto:utkarsh7xo@gmail.com">utkarsh7xo@gmail.com</a></div>
           
            </div>
            {/* Linked In */}
            <div className="flex rounder-lg">
                <div className="p-1 w-8">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
                <div className="ml-4 p-1 mt-1 hover:text-blue-800"><a href="https://www.linkedin.com/in/utkarsh-maurya-iitb/">utkarsh-maurya-iitb</a></div>
            </div>
            {/* WhatsApp */}
            <div className="flex">
                <div className="p-1 w-8 ">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </div>
                <div className="ml-4 p-1 mt-1 hover:text-green-800"><a href="tel:918005379332">+91 8005379332</a></div>
            
            </div>
            {/* Instagram */}
            <div className="flex">
                <div className="p-1 w-8">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </div>
                <div className="ml-4 p-1 mt-1 hover:text-pink-800"><a href="https://www.instagram.com/utkarsh_x_o/">utkarsh_x_o</a></div>
            
            </div>
        </div>
    );
}
