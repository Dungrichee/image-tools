// import fs from 'fs';
// import axios from 'axios';
import Replicate from 'replicate';
import { NextApiRequest } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        imageDataUri: string;
    };
}

console.log('process.env.REPLICATE_API_TOKEN', process.env.REPLICATE_API_TOKEN);

const replicate = new Replicate({
    auth:
        process.env.REPLICATE_API_TOKEN ||
        'r8_VGADgDJGRR6uVtRl3OoESBobHjF6ZXh06qWFm',
});

// export default async function handler(req: any, res: any) {
//     if (req.method === 'POST') {
//         try {
//             const form: any = new formidable.IncomingForm();
//             form.uploadDir = path.join(process.cwd(), 'public/uploads');
//             form.keepExtensions = true;

//             form.parse(req, async (err: any, fields: any, files: any) => {
//                 if (err) {
//                     console.error('Lỗi khi xử lý hình ảnh:', err);
//                     res.status(500).json({
//                         success: false,
//                         error: 'Lỗi khi xử lý hình ảnh',
//                     });
//                     return;
//                 }

//                 const uploadedFile = files.image;

//                 if (!uploadedFile) {
//                     res.status(400).json({
//                         success: false,
//                         error: 'Không tìm thấy tệp hình ảnh.',
//                     });
//                     return;
//                 }

//                 const newFilename = `${uuidv4()}.jpg`;
//                 const newFilePath = path.join(form.uploadDir, newFilename);

//                 console.log(
//                     'newFilename',
//                     newFilename,
//                     'newFilePath',
//                     newFilePath,
//                 );

//                 fs.renameSync(uploadedFile.path, newFilePath);

//                 // const file = fs.readFileSync(newFilePath);
//                 const imageBuffer = fs.readFileSync(newFilePath);

//                 // Chuyển đổi đối tượng Buffer thành chuỗi Base64
//                 const imageDataUri = `data:image/jpeg;base64,${imageBuffer.toString(
//                     'base64',
//                 )}`;

//                 const imageUrl: any = await replicate.run(
//                     'tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
//                     {
//                         input: {
//                             img: imageDataUri,
//                             // img: fs.readFileSync(`public/uploads/${newFilename}`),
//                             // img: `http://localhost:3000/uploads/${newFilename}`,
//                         },
//                     },
//                 );

//                 // await downloadAndSaveImage(imageUrl, savePath);

//                 console.log({ imageUrl });

//                 res.status(201).json({
//                     success: true,
//                     filename: newFilename,
//                     imageUrl,
//                 });
//             });
//         } catch (error) {
//             console.error('Lỗi khi xử lý hình ảnh:', error);
//             res.status(500).json({
//                 success: false,
//                 error: 'Lỗi khi xử lý hình ảnh',
//             });
//         }
//     } else {
//         res.status(405).end(); // Chỉ chấp nhận yêu cầu POST
//     }
// }

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

// const downloadAndSaveImage = async (imageUrl: string, savePath: string) => {
//     const response = await axios.get(imageUrl, {
//         responseType: 'arraybuffer',
//         proxy: {
//             protocol: 'http',
//             host: '185.199.228.220',
//             port: 7492,
//             auth: {
//                 username: 'skadptkd',
//                 password: 'jlw1nom0gj4q',
//             },
//         },
//     });

//     if (response.status === 200) {
//         fs.writeFileSync(savePath, Buffer.from(response.data));
//         return true;
//     } else {
//         return false;
//     }
// };
