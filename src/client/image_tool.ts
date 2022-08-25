import BaseClass from './base';

class ImageTool extends BaseClass {
    sendEmail = async (data: any) => {
        const res = await this.doFetch(`${this.getBaseRoute()}/send_email`, {
            method: 'post',
            data,
        });

        return res;
    };
}

export default ImageTool;
