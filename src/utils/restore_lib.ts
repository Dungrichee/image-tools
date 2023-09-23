import Wavelet from 'wavelet';
import * as nj from 'numjs';

// Hàm tính độ tương đồng giữa hai patch
export function patchSimilarity(patch1: any, patch2: any, h: number) {
    const diff = nj.subtract(patch1, patch2);
    const sumSquare = nj.sum(nj.square(diff));
    return Math.exp(-sumSquare / h);
}

// Hàm lấy patch từ vị trí (i, j) trên ảnh
export function getPatch(image: any, i: number, j: number, patchSize: number) {
    const halfPatchSize = Math.floor(patchSize / 2);
    const patch = nj.zeros([patchSize, patchSize, 3]);

    for (let ii = 0; ii < patchSize; ii++) {
        for (let jj = 0; jj < patchSize; jj++) {
            const pixelI = i + ii - halfPatchSize;
            const pixelJ = j + jj - halfPatchSize;
            const pixel = image.get(pixelI, pixelJ);
            patch.set(ii, jj, 0, pixel.get(0));
            patch.set(ii, jj, 1, pixel.get(1));
            patch.set(ii, jj, 2, pixel.get(2));
        }
    }

    return patch;
}

// Hàm phục hồi ảnh bằng thuật toán non-local means và wavelet denoising
export function restoreImage(
    imageData: ImageData,
    sigma: any,
    h: number,
    patchSize: any,
    waveletLevel: any,
    threshold: any,
) {
    // Chuyển dữ liệu ảnh từ imageData thành ma trận Numjs
    const data = new Uint8Array(imageData.data);
    const height = imageData.height;
    const width = imageData.width;
    const image = nj.zeros([height, width, 3]);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const index = (i * width + j) * 4;
            image.set(i, j, 0, data[index]);
            image.set(i, j, 1, data[index + 1]);
            image.set(i, j, 2, data[index + 2]);
        }
    }

    // Tạo bản sao của ảnh gốc để dùng cho việc tính toán
    const imageCopy = nj.array(image.tolist());

    // Chuyển đổi wavelet
    const wavelet = new Wavelet('haar', waveletLevel);
    const coeffs = wavelet.forward2D(image.tolist());

    // Duyệt qua từng pixel để phục hồi ảnh
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const pixel = image.get(i, j);

            // Tính trọng số cho từng patch
            let weightSum = 0;
            let filteredPixel = nj.zeros([3]);
            for (let k = 0; k < height; k++) {
                for (let l = 0; l < width; l++) {
                    // const patch = getPatch(image
                }
            }
        }
    }
}
