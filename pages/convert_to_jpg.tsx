import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function ConvertToJPG() {
    return (
        <UserLayout>
            <UploadPage
                title="Convert image to JPG"
                description="Convert JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default ConvertToJPG;
