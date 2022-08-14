export interface IErrorsDetail {
    [x: string]: { id: string; message: string }[];
}

export interface IErrors {
    id: string;
    message: string;
    statusCode: number;
    errors: IErrorsDetail;
    detail?: string;
}
