import React from 'react';
import { TbResize } from 'react-icons/tb';
import { BiCrop } from 'react-icons/bi';
import { SiConvertio } from 'react-icons/si';
import { MdOutlineBrandingWatermark, MdOutlineImage } from 'react-icons/md';
import { FcDonate } from 'react-icons/fc';
import {GrDocumentImage} from 'react-icons/gr'
import {AiOutlineFileJpg, AiOutlineFilePdf, AiOutlineHtml5} from 'react-icons/ai'

const ComponentOptions = [
    {
        title: 'Resize Image',
        url: 'resize_image',
        icon: <TbResize />,
    },
    {
        title: 'Convert Image',
        icon: <SiConvertio />,
        subMenu: [
            {
                title: 'To .jpg',
                url: 'convert_to_jpg',
                icon: <AiOutlineFileJpg />,
            },
            {
                title: 'To .png',
                url: 'convert_to_png',
                icon: <MdOutlineImage />,
            },
            {
                title: 'To .pdf',
                url: 'convert_to_pdf',
                icon: <AiOutlineFilePdf />,
            },
            {
                title: 'To .html',
                url: 'convert_to_html',
                icon: <AiOutlineHtml5 />,
            },
        ],
    },
    {
        title: 'Crop Image',
        url: 'crop_image',
        icon: <BiCrop />,
    },
    {
        title: 'Remove Background',
        url: 'remove_background',
        icon: <GrDocumentImage color='red' />,
    },
    {
        title: 'Watermark Image',
        url: 'watermark_image',
        icon: <MdOutlineBrandingWatermark />,
    },
    {
        title: 'Donate',
        url: 'donate',
        icon: <FcDonate />,
    },
];

export default ComponentOptions;
