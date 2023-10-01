import { v4 as uuidV4 } from 'uuid';
import { IImage } from 'types';
import { calculatePercentage } from './calculate';

export const preSaveImages = (file: File, percentage: number) => {
    return new Promise<IImage>((resolve, reject) => {
        const imageObj = new Image();
        imageObj.src = URL.createObjectURL(file);
        imageObj.onload = () =>
            resolve({
                id: uuidV4(),
                file,
                src: imageObj.src,
                width: imageObj.width,
                height: imageObj.height,
                name: file.name,
                size: file.size,
                resizedHeight: calculatePercentage(imageObj.height, percentage),
                resizedWidth: calculatePercentage(imageObj.width, percentage),
            });

        imageObj.onerror = reject;
    });
};

export const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
