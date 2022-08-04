import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function ConvertToPNG() {
    return (
        <UserLayout>
            <UploadPage
                title="Convert image to PNG"
                description="Convert JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default ConvertToPNG;
