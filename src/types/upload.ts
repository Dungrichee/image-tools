export interface IFunctionInfo {
    title: string;
    description?: string;
}

export interface IUploadImageCard {
    type?: string;
}

export interface IImage {
    src: string;
    name: string;
    width: number;
    height: number;
}

export interface IUploadPage extends IFunctionInfo, IUploadImageCard {}
