import axios from 'axios';
import { Options } from 'types/client';

export default class BaseClass {
    url = '';
    urlVersion = 'api/v1';
    defaultHeaders: { [x: string]: string } = {};

    getBaseRoute() {
        return `${this.url}${this.urlVersion}`
    }

    getOptions(options: Options) {
        const newOptions = { ...options };
        let headers = { ...this.defaultHeaders };

        if (options.headers) {
            headers = { ...headers, ...options.headers };
        }

        return { ...newOptions, headers };
    }

    doFetch = async (url: string, options: Options) => {
        const { data } = await this.doFetchWithResponse(url, options);
        return data;
    };

    doFetchWithResponse = async (url: string, options: Options) => {
        try {
            const response = await axios({ url, ...this.getOptions(options) });
            const { data, headers } = response;

            return { data, headers };
        } catch (error: any) {
            return error;
        }
    };
}
