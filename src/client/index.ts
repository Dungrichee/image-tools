import ImageTool from './image_tool';

class ClientClass {
    imageTool: ImageTool;
    constructor() {
        this.imageTool = new ImageTool();
    }
}

const Client = new ClientClass();
export { Client };
