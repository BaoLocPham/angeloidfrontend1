import React from 'react';

const AnimeImageForm = ({ defaultThumbnail, handleUploadThumbnail, defaultWallpaper, handleUploadWallpaper }) => {
    // Styling
    const thumbnailImage = {
        backgroundImage: `url(${defaultThumbnail})`,
        backgroundSize: 'cover',
        width: "30%",
        height: '19rem',
        backgroundPosition: "center",
        cursor: "pointer",
        marginLeft: "35%",
        paddingTop: "19rem"
    }

    const wallpaperImage = {
        backgroundImage: `url(${defaultWallpaper})`,
        backgroundSize: 'cover',
        width: "100%",
        height: '19rem',
        backgroundPosition: "center",
        cursor: "pointer",
        paddingTop: "19rem"
    }

    return (
        <div>
            {/* Thumbnail */}
            <div>
                <h4><b>Thumbnail</b></h4>
                <input style={thumbnailImage} onChange={handleUploadThumbnail} type="file" id="thumbnail" name="thumbnail" accept="image/*" />
            </div>

            {/* Wallpaper */}
            <div>
                <h4><b>Wallpaper</b></h4>
                <input style={wallpaperImage} onChange={handleUploadWallpaper} type="file" id="wallpaper" name="wallpaper" accept="image/*" />
            </div>
        </div>
    );
}

export default AnimeImageForm;