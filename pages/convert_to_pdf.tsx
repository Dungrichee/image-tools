import React from 'react';

import UserLayout from 'containers/user_layout';
import UploadPage from 'containers/upload_page';

function ConvertToPDF() {
    return (
        <UserLayout>
            <UploadPage
                title="Convert image to PDF"
                description="Convert JPG by defining new height and width pixels.
Resize many JPG images at once online."
            />
        </UserLayout>
    );
}

export default ConvertToPDF;
