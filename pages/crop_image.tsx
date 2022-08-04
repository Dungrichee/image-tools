import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function CropImage() {
    return (
        <UserLayout>
            <UploadPage
                title="Crop Image"
                description="Crop JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default CropImage;
