import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function RemoveBackground() {
    return (
        <UserLayout>
            <UploadPage
                title="Remove background image"
                description="Crop JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default RemoveBackground;
