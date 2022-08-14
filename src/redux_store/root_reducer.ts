import localImageSlice from './local_image/local_image_slice';
import watermarkImageSlice from './watermark_image/watermark_image_slice';
import removeBgSlice from './remove_bg/remove_bg_slice';
import apiStatusSlice from './api_status/api_status_slice';

const rootReducer = {
    localImageSlice,
    watermarkImageSlice,
    removeBgSlice,
    apiStatusSlice,
};

export default rootReducer;
