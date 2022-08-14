import BaseClass from './base';

class ImageTool extends BaseClass {
    removeBackgroundImage = async (imgBase64: string) => {
        const res = await this.doFetch(`${this.getBaseRoute()}/remove_bg`, {
            method: 'POST',
            data: {
                imgBase64,
            },
        });
        return res
    };
}

export default ImageTool;
