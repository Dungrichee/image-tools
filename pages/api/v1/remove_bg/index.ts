import fs from 'fs';
import Replicate from 'replicate';
import axios from 'axios';
import { NextApiRequest } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        imageDataUri: string;
    };
}

const replicate = new Replicate({
    auth:
        process.env.REPLICATE_API_TOKEN ||
        'r8_VGADgDJGRR6uVtRl3OoESBobHjF6ZXh06qWFm',
});

export default async function handler(req: ExtendedNextApiRequest, res: any) {
    if (req.method === 'POST') {
        try {
            const { imageDataUri } = req.body;

            if (!imageDataUri) throw Error('Hinh anh khong hop le');

            const imageUrl: any = await replicate.run(
                'tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
                {
                    input: {
                        img: imageDataUri,
                        // img: fs.readFileSync(`public/uploads/${newFilename}`),
                        // img: `http://localhost:3000/uploads/${newFilename}`,
                    },
                },
            );

            // await downloadAndSaveImage(imageUrl, savePath);

            res.status(201).json({
                imageUrl,
            });
        } catch (error) {
            console.error('Lỗi khi xử lý hình ảnh:', error);
            res.status(500).json({
                success: false,
                error: 'Lỗi khi xử lý hình ảnh',
            });
        }
    } else {
        res.status(405).end(); // Chỉ chấp nhận yêu cầu POST
    }
}

const downloadAndSaveImage = async (imageUrl: string, savePath: string) => {
    const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        proxy: {
            protocol: 'http',
            host: '185.199.228.220',
            port: 7492,
            auth: {
                username: 'skadptkd',
                password: 'jlw1nom0gj4q',
            },
        },
    });

    if (response.status === 200) {
        fs.writeFileSync(savePath, Buffer.from(response.data));
        return true;
    } else {
        return false;
    }
};