import { removeBackgroundFromImageBase64, RemoveBgResult } from 'remove.bg';

export default async function removeBg(req: any, res: any) {
    const { imgBase64 } = req.body;
    const outputFile = ``;

    const result: RemoveBgResult = await removeBackgroundFromImageBase64({
        base64img: imgBase64,
        apiKey: '6t7oQacHnM7snQDeqCniAkXx',
        size: 'regular',
        type: 'auto',
        outputFile,
    });

    res.json({ data: `data:image/jpeg;base64,` + result.base64img });
}
