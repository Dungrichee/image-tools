import { IContactForm } from 'types/email';
import BaseClass from './base';

class ImageTool extends BaseClass {
    sendEmail = async (data: IContactForm) => {
        const res = await this.doFetch(`${this.getBaseRoute()}/send_email`, {
            method: 'post',
            data,
        });

        return res;
    };

    restorationImage = async (data: any) => {
        const res = await this.doFetch(`${this.getBaseRoute()}/gfpgan`, {
            method: 'post',
            data,
        })

        return res
    }

    removeBackground = async (data: any) => {
        const res = await this.doFetch(`${this.getBaseRoute()}/remove_bg`, {
            method: 'post',
            data,
        })

        return res
    }

    uploadWithGGDrive = async () => {
        const res = await this.doFetch(`${this.getBaseRoute()}/upload_file_with_ggdrive`, {
            method: 'get',
        });

        return res;
    }
}

export default ImageTool;
