// 1. Chuyển đổi hình ảnh màu sang hình ảnh xám
// 2. Áp dụng bộ lọc tách nhiễu trên hình ảnh xám để giảm nhiễu
// 3. Sử dụng các phép biến dổi hình thái học như giãn, co, mở, đóng để phục hồi hình ảnh. Các phép biến đổi này sẽ giúp loại bỏ các đối tượng không cần thiết hoặc làm mờ các đường viền của các đối tượng trên hình ảnh.
// 4. Áp dụng bộ lọc khử nhiễu cuối cùng để loại bỏ nhiễu còn sót lại

// Chuyển đổi hình ảnh màu sang hình ảnh xám
export const grayscaleImage = (image: any) => {
    const grayscalePixel = (pixel: any) => {
        const average = (pixel.r + pixel.g + pixel.b) / 3;
        return { r: average, g: average, b: average };
    };

    // Tạo hình ảnh mới với các giá trị màu xám
    const grayImage = [];
    for (let i = 0; i < image.length; i++) {
        const row = [];
        for (let j = 0; j < image[i].length; j++) {
            row.push(grayscalePixel(image[i][j]));
        }
        grayImage.push(row);
    }

    return grayImage;
};

// Đọc hình ảnh vào trong một mảng 2D
export const readImageData = (imageData: ImageData) => {
    const { data, width, height } = imageData;
    const image = new Array(height);

    for (let y = 0; y < height; y++) {
        image[y] = new Array(width);
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            image[y][x] = data[i];
        }
    }

    return image;
};

//Ghi hình ảnh từ một mảng 2D
export const writeImageData = (image: any, imageData: ImageData) => {
    const { data, width, height } = imageData;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            data[i] = image[y][x];
            data[i + 1] = image[y][x];
            data[i + 2] = image[y][x];
            data[i + 3] = 255;
        }
    }
};

// Chia ảnh thành các khối (patch)
export const splitImageIntoBlocks = (
    imageData: ImageData,
    blockSize: number,
) => {
    const blocks = [];
    for (let y = 0; y < imageData.height; y += blockSize) {
        for (let x = 0; x < imageData.width; x += blockSize) {
            const block = [];
            for (let i = 0; i < blockSize; i++) {
                const row = [];
                for (let j = 0; j < blockSize; j++) {
                    const pixelIndex = ((y + i) * imageData.width + (x + j)) * 4;
                    row.push([
                        imageData.data[pixelIndex],
                        imageData.data[pixelIndex + 1],
                        imageData.data[pixelIndex + 2],
                        imageData.data[pixelIndex + 3],
                    ]);
                }
                block.push(row);
            }
            blocks.push(block);
        }
    }
    return blocks;
};

// Tính toán trọng số NLM cho mỗi khối
export const calculateNLMWeights = (
    targetBlock: any,
    otherBlocks: any,
    h: number,
    searchWindowSize: number,
    patchSize: number,
) => {
    const weights = [];
    const halfSearchWindowSize = Math.floor(searchWindowSize / 2);
    const halfPatchSize = Math.floor(patchSize / 2);
    for (let i = 0; i < otherBlocks.length; i++) {
        const otherBlock = otherBlocks[i];
        let weight = 0;
        for (let y = -halfSearchWindowSize; y <= halfSearchWindowSize; y++) {
            for (
                let x = -halfSearchWindowSize;
                x <= halfSearchWindowSize;
                x++
            ) {
                let totalDistance = 0;
                for (let yy = -halfPatchSize; yy <= halfPatchSize; yy++) {
                    for (let xx = -halfPatchSize; xx <= halfPatchSize; xx++) {
                        const ty =
                            targetBlock[y + halfPatchSize][x + halfPatchSize];
                            const oy =
                            otherBlock[y + yy + halfPatchSize][
                                x + xx + halfPatchSize
                            ];
                            const distance =
                            Math.pow(ty[0] - oy[0], 2) +
                            Math.pow(ty[1] - oy[1], 2) +
                            Math.pow(ty[2] - oy[2], 2) +
                            Math.pow(ty[3] - oy[3], 2);
                        totalDistance += distance;
                    }
                }
                weight += Math.exp(-totalDistance / h);
            }
        }
        weights.push(weight);
    }
    return weights;
};
