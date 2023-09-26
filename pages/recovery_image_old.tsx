import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from 'hook';
import { resetImages } from 'redux_store/image_storage/image_slice';
import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';
// import ResizeOptions from 'containers/resize_options';
// import ImageMasonry from 'components/image_masonry';
import Scrollbars from 'react-custom-scrollbars-2';
import DeleteImageButton from 'components/delete_image_button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ImageRecovery() {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { images } = useAppSelector(({ imageSlice }) => imageSlice);

    useEffect(() => {
        return () => {
            dispatch(resetImages());
        };
    }, [dispatch]);

    // function interpolate1(imageData: ImageData) {
    //     const data = imageData.data;
    //     const width = imageData.width;
    //     const height = imageData.height;

    //     for (let i = 0; i < height; i++) {
    //         for (let j = 0; j < width; j++) {
    //             const index = (i * width + j) * 4;

    //             if (i == 0 || j == 0 || i == height - 1 || j == width - 1) {
    //                 // Set the border pixel
    //                 data[index] = 0;
    //                 data[index + 1] = 0;
    //                 data[index + 2] = 0;
    //             } else {
    //                 // Calculate the average color of the surrounding pixels
    //                 const topLeftIndex = ((i - 1) * width + (j - 1)) * 4;
    //                 const topIndex = ((i - 1) * width + j) * 4;
    //                 const topRightIndex = ((i - 1) * width + (j + 1)) * 4;
    //                 const leftIndex = (i * width + (j - 1)) * 4;
    //                 const rightIndex = (i * width + (j + 1)) * 4;
    //                 const bottomLeftIndex = ((i + 1) * width + (j - 1)) * 4;
    //                 const bottomIndex = ((i + 1) * width + j) * 4;
    //                 const bottomRightIndex = ((i + 1) * width + (j + 1)) * 4;
    //                 const avgRed =
    //                     (data[topLeftIndex] +
    //                         data[topIndex] +
    //                         data[topRightIndex] +
    //                         data[leftIndex] +
    //                         data[rightIndex] +
    //                         data[bottomLeftIndex] +
    //                         data[bottomIndex] +
    //                         data[bottomRightIndex]) /
    //                     8;
    //                 const avgGreen =
    //                     (data[topLeftIndex + 1] +
    //                         data[topIndex + 1] +
    //                         data[topRightIndex + 1] +
    //                         data[leftIndex + 1] +
    //                         data[rightIndex + 1] +
    //                         data[bottomLeftIndex + 1] +
    //                         data[bottomIndex + 1] +
    //                         data[bottomRightIndex + 1]) /
    //                     8;
    //                 const avgBlue =
    //                     (data[topLeftIndex + 2] +
    //                         data[topIndex + 2] +
    //                         data[topRightIndex + 2] +
    //                         data[leftIndex + 2] +
    //                         data[rightIndex + 2] +
    //                         data[bottomLeftIndex + 2] +
    //                         data[bottomIndex + 2] +
    //                         data[bottomRightIndex + 2]) /
    //                     8;

    //                 // Set the new color of the current pixel
    //                 data[index] = avgRed;
    //                 data[index + 1] = avgGreen;
    //                 data[index + 2] = avgBlue;
    //             }
    //         }
    //     }

    //     return imageData;
    // }

    // function interpolate(imageData: ImageData) {
    //     const srcData = imageData.data;
    //     const dstData = new Uint8ClampedArray(srcData.length);

    //     const ratio = 3;

    //     const lanczos = function (x: number) {
    //         if (x === 0) {
    //             return 1;
    //         } else if (x >= -ratio && x <= ratio) {
    //             return (
    //                 (Math.sin(Math.PI * x) * Math.sin((Math.PI * x) / ratio)) /
    //                 (Math.PI * x * Math.PI * x)
    //             );
    //         } else {
    //             return 0;
    //         }
    //     };

    //     const kernel = function (u: number, x: number) {
    //         return lanczos((x - u) / ratio);
    //     };

    //     for (let y = 0; y < imageData.height; y++) {
    //         for (let x = 0; x < imageData.width; x++) {
    //             const pixelIndex = (y * imageData.width + x) * 4;

    //             let r = 0;
    //             let g = 0;
    //             let b = 0;
    //             let a = 0;

    //             for (let j = -ratio; j <= ratio; j++) {
    //                 const u = x + j;
    //                 if (u >= 0 && u < imageData.width) {
    //                     const kernelValue = kernel(u, x);
    //                     const index = (y * imageData.width + u) * 4;
    //                     r += srcData[index] * kernelValue;
    //                     g += srcData[index + 1] * kernelValue;
    //                     b += srcData[index + 2] * kernelValue;
    //                     a += srcData[index + 3] * kernelValue;
    //                 }
    //             }

    //             dstData[pixelIndex] = r;
    //             dstData[pixelIndex + 1] = g;
    //             dstData[pixelIndex + 2] = b;
    //             dstData[pixelIndex + 3] = a;
    //         }
    //     }

    //     return dstData;
    // }

    // const restoreImage1 = () => {
    //     const oldImage = document.getElementById('old-image');
    //     const restoredImage = document.getElementById('restored-image');

    //     if (!oldImage) return;

    //     // Load the old image
    //     const img = new Image();
    //     // img.src = oldImage.src;

    //     // Wait for the image to load
    //     img.onload = function () {
    //         // Create a canvas to draw the image
    //         const canvas = document.createElement('canvas');
    //         canvas.width = img.width;
    //         canvas.height = img.height;

    //         // Draw the image on the canvas
    //         const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    //         ctx.drawImage(img, 0, 0);

    //         // Get the image data from the canvas
    //         const imageData = ctx.getImageData(
    //             0,
    //             0,
    //             canvas.width,
    //             canvas.height,
    //         );

    //         // Interpolate the image data to restore the old image
    //         const restoredImageData = interpolate(imageData);

    //         // Create a new image from the restored image data
    //         const restoredImg = new ImageData(
    //             restoredImageData,
    //             canvas.width,
    //             canvas.height,
    //         );

    //         // Draw the restored image on the canvas
    //         ctx.putImageData(restoredImg, 0, 0);

    //         // Set the source of the restored image element
    //         // restoredImage.src = canvas.toDataURL();
    //     };
    // };

    // function restoreImage() {
    //     const oldImage = document.createElement('img');
    //     oldImage.src = 'old-image.jpg';

    //     oldImage.addEventListener('load', function() {
    //       const canvas = document.createElement('canvas');
    //       canvas.width = oldImage.width;
    //       canvas.height = oldImage.height;
      
    //       const context = canvas.getContext('2d') as CanvasRenderingContext2D ;
    //       context.drawImage(oldImage, 0, 0);
      
    //       const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      
    //       const restoredData = interpolate(imageData);
    //       const restoredImageData = new ImageData(restoredData, imageData.width, imageData.height);
      
    //       createImageBitmap(restoredImageData).then(function(bitmap) {
    //         context.drawImage(bitmap, 0, 0);
      
    //         const restoredImage = document.getElementById('restored-image');
    //         // restoredImage.src = canvas.toDataURL();
    //       });
    //     });
    //   }

    return (
        <UserLayout>
            {!images.length ? (
                <UploadPage
                    title="Recovery Image"
                    description="Phục hồi hình ảnh là quá trình khôi phục lại hình ảnh bị hư hỏng hoặc bị biến dạng bằng cách sử dụng các công cụ và kỹ thuật số để tạo ra một bản sao gần giống với hình ảnh ban đầu."
                    isMultiple
                />
            ) : (
                <Box className={classes.page}>
                    <Box className={classes.content}>
                        <Scrollbars>
                            <Box className={classes.cropImage}>
                                <Box textAlign="center" my={2}>
                                    <DeleteImageButton />
                                </Box>

                                <Box height="60%">
                                    <Box>
                                        <Typography>Before</Typography>
                                        <LazyLoadImage
                                            src={images[0].src}
                                            alt={images[0].name}
                                            effect="blur"
                                            width="100%"
                                            height="100%"
                                            placeholderSrc={images[0].name}
                                            style={{
                                                borderRadius: 4,
                                                display: 'block',
                                            }}
                                        />
                                    </Box>
                                    <Button variant="contained">Click</Button>
                                    <Box>
                                        <Typography>After</Typography>
                                        <LazyLoadImage
                                            src={''}
                                            alt={images[0].name}
                                            effect="blur"
                                            width="100%"
                                            height="100%"
                                            placeholderSrc={images[0].name}
                                            style={{
                                                borderRadius: 4,
                                                display: 'block',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Scrollbars>
                    </Box>

                    {/* <CropOptions getCropData={getCropData} /> */}
                </Box>
            )}
        </UserLayout>
    );
}

export default ImageRecovery;

const useStyles = makeStyles(() => ({
    page: {
        display: 'flex',
        flex: 1,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
    },
    cropImage: {
        height: '100%',
        overflow: 'hidden',
    },
}));
