export interface IFunctionInfo {
    title: string;
    description?: string;
}

export interface IUploadImageCard {
    type?: string;
}

export interface IUploadPage extends IFunctionInfo, IUploadImageCard {}
