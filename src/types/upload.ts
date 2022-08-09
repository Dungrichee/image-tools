export interface IFunctionInfo {
    title: string;
    description?: string;
}

export interface IUploadImageCard {
    type?: string;
}

export interface IImage {
    id: string;
    file: File,
    src: string;
    name: string;
    width: number;
    height: number;
    size: number;
    resizedWidth: number;
    resizedHeight: number;
}

export interface IImageSize {
    width: number;
    height: number;
    ratio: { id: string; name: string } | null;
}

export interface IUploadPage extends IFunctionInfo, IUploadImageCard {}
