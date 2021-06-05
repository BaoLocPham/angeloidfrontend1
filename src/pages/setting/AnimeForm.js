import './AnimeForm.css';
import React, { useRef, useState } from 'react';
import CharacterFormList from './CharacterFormList';

// Declare color code for tag background
const colorList = [
    { id: 1, colorCode: "#EC294B" },
    { id: 2, colorCode: "#F2AC57" },
    { id: 3, colorCode: "#0880AE" },
    { id: 4, colorCode: "#178F58" },
    { id: 5, colorCode: "#14A38B" },
    { id: 6, colorCode: "#35DF90" },
    { id: 7, colorCode: "#FF7171" },
]

// Declare season name
const seasons = [
    { seasonId: 1, seasonName: "Spring" },
    { seasonId: 2, seasonName: "Summer" },
    { seasonId: 3, seasonName: "Autumn" },
    { seasonId: 4, seasonName: "Winter" }
]

var characterId = 0;

const AnimeForm = () => {
    const [uploadThumbnail, setUploadThumbnail] = useState("https://steamuserimages-a.akamaihd.net/ugc/1625192018160506083/C15D4EA1F20C70D056721EF003BB703643EAFDF0/");
    const [uploadWallpaper, setUploadWallpaper] = useState("https://steamuserimages-a.akamaihd.net/ugc/1755813918770084879/217A2F65616B66DC92206F403A2F6412BF7DD9E3/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true");
    const [selectedTag, setSelectedTag] = useState([]);

    // Handle Upload Thumbnail
    const handleUploadThumbnail = (event) => {
        if (!event.target.files[0].type.match(/image.*/)) {
            alert('You can\'t upload this type of file.');
            return;
        } else if (event.target.files[0].size > 1e6) {
            alert('You can\'t upload file has size greater than 1 mb.');
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result)
            setUploadThumbnail(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    // Handle Upload Wallpaper
    const handleUploadWallpaper = (event) => {
        if (!event.target.files[0].type.match(/image.*/)) {
            alert('You can\'t upload this type of file.');
            return;
        } else if (event.target.files[0].size > 1e6) {
            alert('You can\'t upload file has size greater than 1 mb.');
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
            setUploadWallpaper(e.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    };


    const thumbnailImage = {
        backgroundImage: `url(${uploadThumbnail})`,
        backgroundSize: 'cover',
        width: "30%",
        height: '19rem',
        backgroundPosition: "center",
        cursor: "pointer",
        marginLeft: "35%",
        paddingTop: "19rem"
    }

    const wallpaperImage = {
        backgroundImage: `url(${uploadWallpaper})`,
        backgroundSize: 'cover',
        width: "100%",
        height: '19rem',
        backgroundPosition: "center",
        cursor: "pointer",
        paddingTop: "19rem"
    }

    //Khởi tạo giá trị cho các input form (sau này sẽ lấy dữ liệu từ api)
    const tags = [
        { tagId: 0, tagName: "" },
        { tagId: 1, tagName: "Isekai" },
        { tagId: 2, tagName: "Slice of life" },
        { tagId: 3, tagName: "School" },
        { tagId: 4, tagName: "Fantasy" },
        { tagId: 5, tagName: "Comedy" },
        { tagId: 6, tagName: "Romance" },
        { tagId: 7, tagName: "Action" },
        { tagId: 8, tagName: "Drama" },
        { tagId: 9, tagName: "School" }
    ]

    // Set Random Background Color for Tag
    const setColor = () => {
        const colorRandom = (Math.floor(Math.random() * 7) + 1)
        for (let color of colorList) {
            if (color.id === colorRandom) {
                return color.colorCode;
            }
        }
    }

    // Check selected tagId is duplicate with tagId in selectedTag
    const containTagId = (tagId) => {
        for (let tagItem of selectedTag) {
            if (tagItem.tagId === tagId) {
                return true;
            }
        }
        return false;
    }

    // Get TagName by TagId
    const getNameById = (tagId) => {
        for (let tagItem of tags) {
            if (tagItem.tagId == tagId) {
                return tagItem.tagName;
            }
        }
        return null;
    }

    // Handle Add Selected Tag
    const handleSelectTag = (event) => {
        event.preventDefault();
        if (!containTagId(event.target.value)) {
            setSelectedTag([...selectedTag, { tagId: event.target.value, tagName: getNameById(event.target.value), tagBgColor: setColor() }])
        }
    }

    // Handle Delete Selected Tag
    const handleDeleteTag = (tagId) => {
        setSelectedTag(selectedTag.filter(tag => tag.tagId !== tagId))
    }

    return (
        <div>
            {/* Mobile View */}
            <h1 style={{ color: "white", marginTop: "50%", marginLeft: "50%" }} className="d-block d-sm-block d-md-none d-lg-none d-xl-none"><b>Mở Desktop lên bạn</b></h1>

            {/* Desktop View */}
            <div className="AnimeForm-Frame col-12 col-md-10 mx-md-5 d-none d-sm-none d-md-block">
                <h4 className="p-5"><b>Upload new anime</b></h4>
                {/* Form Input Anime Info */}
                <form>
                    <div className="row px-5">
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

                        {/* Anime Name */}
                        <div className=" col-12 col-md-6 my-1">
                            <label htmlFor="animeName" className="form-label">Anime Name</label>
                            <input type="text" className="form-control" id="animeName" name="animeName" />
                        </div>

                        {/* Studio */}
                        <div className=" col-12 col-md-6 my-1">
                            <label htmlFor="studio" className="form-label">Studio</label>
                            <input type="text" className="form-control" id="studio" name="studio" />
                        </div>

                        {/* Description */}
                        <div class=" col-12 col-md-6 my-1">
                            <label htmlfor="description" class="form-label">Description</label>
                            <textarea className="form-control" id="description" rows="9"></textarea>
                        </div>
                        <div class=" col-12 col-md-6">

                            {/* Episodes */}
                            <div className="my-1">
                                <label htmlFor="episodes" className="form-label">Episodes</label>
                                <input type="text" className="form-control" id="episodes" name="episodes" />
                            </div>

                            {/* Duration */}
                            <div className="my-1">
                                <label htmlFor="duration" className="form-label">Duration</label>
                                <input type="text" className="form-control" id="duration" name="duration" />
                            </div>

                            {/* Season */}
                            <div className="my-1">
                                <label htmlFor="duration" className="form-label">Season</label>
                                <select className="form-select" aria-label="Default select example">
                                    {seasons.map(season =>
                                        <option key={season.seasonId} value={season.seasonId}>{season.seasonName}</option>
                                    )}
                                </select>
                            </div>

                            {/* Year */}
                            <div className="my-1">
                                <label htmlFor="year" className="form-label">Year</label>
                                <input type="text" className="form-control" id="year" name="year" />
                            </div>
                        </div>

                        {/* Select Tag */}
                        <div className="col-12 col-md-6">
                            <label htmlFor="duration" className="form-label">Tag</label>
                            <select value="" className="form-select" defaultValue={""} onChange={handleSelectTag} aria-label="Default select example">
                                <option hidden disabled value=""></option>
                                {tags.slice(1).map(tag => (
                                    <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                                ))}
                            </select>
                        </div>
                        {/* Show Tag */}
                        <div className="p-0 mt-3">
                            {selectedTag.map(tag =>
                                <div key={tag.tagId} style={{ color: "white", backgroundColor: tag.tagBgColor }} className="btn rounded-pill mx-2 mb-2 mx-md-3 mb-md-3">{tag.tagName}<i onClick={() => handleDeleteTag(tag.tagId)} className="ms-2 fa fa-times"></i></div>
                            )}
                        </div>

                        {/* Character */}
                        <CharacterFormList />

                        {/* Upload Button */}
                        <div className="my-3 d-flex justify-content-end">
                            <button type="submit" className="UploadButton btn">Upload</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default AnimeForm;