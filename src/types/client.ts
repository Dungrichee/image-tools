import { Method, ResponseType, CancelToken } from 'axios';

export type Options = {
    headers?: { [x: string]: string };

    method?: Method;

    url?: string;

    data?: any;

    cancelToken?: CancelToken;

    responseType?: ResponseType;
};
