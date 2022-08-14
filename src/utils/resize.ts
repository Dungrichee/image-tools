import { saveAs } from 'file-saver';
import JSZip from 'jszip';

import { IImage } from 'types';

export const resizeImage = (width: number, height: number, nameF: string) => {
    const image = document.createElement('img');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    image.src = '';
    image.width = width;
    image.height = height;

    image.onload = () => {
        if (!context) return;

        context.drawImage(image, 0, 0, width, height);

        const newImageUrl = canvas.toDataURL('image/jpeg', 100);
        const fileName: string = `${width} x ${height} - ${nameF}`;

        saveAs(newImageUrl, fileName);
    };
};

interface IResizeImage {
    image: IImage;
    width: number;
    height: number;
    index?: number;
    length?: number;
    isRemoveBg?: boolean;
}

export const resizeImages = (
    props: IResizeImage,
    callback?: (
        newImages: {
            url: string;
            fileName: string;
        }[],
    ) => void,
    removeBg?: (imgBase64: string) => void
) => {
    const { image, width, height, index, length, isRemoveBg = false } = props;
    const { file } = image;
    const newImages: { url: string; fileName: string }[] = [];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
        if (!event.target) return;
        const imageUrl = event.target.result;
        const image = document.createElement('img');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        image.src = imageUrl as string;
        image.width = width;
        image.height = height;

        image.onload = () => {
            if (!context) return;

            context.drawImage(image, 0, 0, width, height);

            const fileName: string = `${width} x ${height} - ${file.name}`;
            let newImageUrl = canvas.toDataURL('image/jpeg', 100);
            
            if (isRemoveBg && removeBg) return removeBg(newImageUrl);

            if (!length) return saveAs(newImageUrl, fileName);

            newImageUrl = newImageUrl.replace(
                /^data:image\/(png|jpg|jpeg);base64,/,
                '',
            );

            newImages.push({ url: newImageUrl, fileName });

            if (index === length && callback) {
                callback(newImages);
                // downloadZipImageFolder(newImages);
            }
        };
    };
};

export const downloadZipImageFolder = (
    images: { fileName: string; url: string }[],
) => {
    const zip = new JSZip();
    const imageFolder = zip.folder('resize_image');

    for (const image of images) {
        imageFolder?.file(image.fileName, image.url, {
            base64: true,
        });
    }

    zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'resize_image.zip');
    });
};
