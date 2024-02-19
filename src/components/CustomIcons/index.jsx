import React from 'react';
import { IconContext } from 'react-icons';
import { MdEmail } from "react-icons/md";
import {
    FaPhoneAlt,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";

import { CiHome } from "react-icons/ci";
import {
    FaBook,
    FaCircleQuestion
} from "react-icons/fa6";

import { IoMdContact } from "react-icons/io";

export default function CustomIcon({ icon, color, size }) {
    const iconMapping = {
        //social media
        email: MdEmail,
        contato: FaPhoneAlt,
        facebook: FaFacebookF,
        instagram: FaInstagram,
        whatsapp: FaWhatsapp,

        //menu mobile
        inicio: CiHome,
        curso: FaBook,
        pergunta: FaCircleQuestion,
        contatos: IoMdContact

    };

    const IconComponent = iconMapping[icon];




    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    )
}