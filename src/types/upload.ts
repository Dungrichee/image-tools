export interface IFunctionInfo {
    title: string;
    description?: string;
}

export interface IUploadImageCard {
    type?: string;
}

export interface IImage {
    id: string;
    src: string;
    name: string;
    width: number;
    height: number;
    size: number;
}

export interface IImageSize {
    width: number;
    height: number;
}

export interface IUploadPage extends IFunctionInfo, IUploadImageCard {}
