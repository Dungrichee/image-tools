import watermarkImageSlice from './watermark_image/watermark_image_slice';
import imageSlice from './image_storage/image_slice';
import resizeSlice from './resize/resize_slice';
import apiStatusSlice from './api_status/api_status_slice';

const rootReducer = {
    watermarkImageSlice,
    imageSlice,
    resizeSlice,
    apiStatusSlice,
};

export default rootReducer;
