import React from 'react';
import { TbResize } from 'react-icons/tb';
import { BiCrop, BiDonateHeart } from 'react-icons/bi';
import { SiConvertio } from 'react-icons/si';
import { MdOutlineBrandingWatermark, MdOutlineContactSupport, MdOutlineImage } from 'react-icons/md';
import { AiOutlineFileJpg } from 'react-icons/ai';

const ComponentOptions = [
    {
        title: 'Resize Image',
        url: '/resize_image',
        icon: <TbResize fill='white' />,
    },
    {
        title: 'Convert Image',
        icon: <SiConvertio fill='white' />,
        subMenu: [
            {
                title: 'Convert to JPG',
                url: '/convert_to_jpg',
                icon: <AiOutlineFileJpg fill='white' />,
            },
            {
                title: 'Convert to PNG',
                url: '/convert_to_png',
                icon: <MdOutlineImage fill='white' />,
            },
            // {
            //     title: 'To .pdf',
            //     url: 'convert_to_pdf',
            //     icon: <AiOutlineFilePdf />,
            // }
        ],
    },
    {
        title: 'Crop Image',
        url: '/crop_image',
        icon: <BiCrop fill='white' />,
    },
    // {
    //     title: 'Remove Background',
    //     url: 'remove_background',
    //     icon: <GrDocumentImage color='red' />,
    // },
    {
        title: 'Watermark Image',
        url: '/watermark_image',
        icon: <MdOutlineBrandingWatermark fill='white' />,
    },
    {
        title: 'Contact',
        url: '/contact',
        icon: <MdOutlineContactSupport fill='white' />,
    },
    {
        title: 'Donate',
        url: '/donate',
        icon: <BiDonateHeart fill='white' />,
    },
];

export default ComponentOptions;
