import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function ResizeImage() {
    return (
        <UserLayout>
            <UploadPage
                title="Resize Image"
                description="Resize JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default ResizeImage;
