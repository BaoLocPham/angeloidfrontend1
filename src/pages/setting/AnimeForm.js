//dependencies
import React, { useEffect, useState } from 'react';
// import { useParams, Redirect } from 'react-router-dom';
import {
    useParams,
    Redirect
} from "react-router-dom";

//style
import './AnimeForm.css';

//Child component
import AnimeImageForm from './AnimeImageForm';
import AnimeDetailForm from './AnimeDetailForm';
import AnimeTagForm from './AnimeTagForm';
import CharacterFormList from './CharacterFormList';

// Model for notification
import CustomedModal from '../components/Modal';
const modalConfigs = {
    inputFail: { header: "Failed", body: "Fail to add new anime please check your input carefully!" },
    inputConnectError: { header: "Connection fail", body: "Fail to connect to server!" },
}

// Declare color code for tag background
const colorList = [
    { id: 1, colorCode: "#FF7171" },
    { id: 2, colorCode: "#F2AC57" },
    { id: 3, colorCode: "#0880AE" },
    { id: 4, colorCode: "#178F58" },
    { id: 5, colorCode: "#14A38B" },
    { id: 6, colorCode: "#35DF90" },
]

var characterId = 0;

const AnimeForm = () => {
    //Model properties and method to call model
    const [profileModalShow, setProfileModalShow] = useState(false);
    const [modalProfile, setModalProfile] = useState({});
    const toggleModal = (modalConfig) => {
        setModalProfile(modalConfig);
        setProfileModalShow(!profileModalShow);
    }

    const [defaultThumbnail, setDefaultThumbnail] = useState("https://steamuserimages-a.akamaihd.net/ugc/1625192018160506083/C15D4EA1F20C70D056721EF003BB703643EAFDF0/");
    const [defaultWallpaper, setDefaultWallpaper] = useState("https://steamuserimages-a.akamaihd.net/ugc/1755813918770084879/217A2F65616B66DC92206F403A2F6412BF7DD9E3/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true");

    //all properties of anime input
    const [uploadThumbnail, setUploadThumbnail] = useState("");
    const [uploadWallpaper, setUploadWallpaper] = useState("");
    const [selectedTag, setSelectedTag] = useState([]);
    const [inputAnime, setInputAnime] = useState({
        animeName: "",
        content: "",
        status: "",
        trailer: "",
        episodeDuration: "",
        episode: "",
        startDay: "",
        web: "",
        season: {
            year: "",
            seasonName: ""
        },
        studioId: ""
    });
    const [characters, setCharacter] = useState([]);
    const [uploadStatus, setUploadStatus] = useState(false);

    // Thumbnail upload
    const handleUploadThumbnail = (event) => {
        try {
            if (!event.target.files[0].type.match(/image.*/)) {
                alert('You can\'t upload this type of file.');
                return;
            } else if (event.target.files[0].size > 1e6) {
                alert('You can\'t upload file has size greater than 1 mb.');
                return;
            }

            let reader = new FileReader();
            reader.onload = function (e) {
                setUploadThumbnail(e.target.result.split(',')[1]);
                setDefaultThumbnail(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch {
        }

    };

    // Wallpaper upload
    const handleUploadWallpaper = (event) => {
        try {
            if (!event.target.files[0].type.match(/image.*/)) {
                alert('You can\'t upload this type of file.');
                return;
            } else if (event.target.files[0].size > 1e6) {
                alert('You can\'t upload file has size greater than 1 mb.');
                return;
            }
            let reader = new FileReader();
            reader.onload = function (e) {
                setUploadWallpaper(e.target.result.split(',')[1]);
                setDefaultWallpaper(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch {

        }
    };

    // Anime detail update
    const handleInputAnime = (obj) => {
        setInputAnime(Object.assign({}, inputAnime, obj));
    }

    // Set Random Background Color for Tag
    const setColor = () => {
        const colorRandom = (Math.floor(Math.random() * 6) + 1)
        for (let color of colorList) {
            if (color.id === colorRandom) {
                return color.colorCode;
            }
        }
    }

    // Check selected tagId is duplicate with tagId in selectedTag
    const containTagId = (tagId) => {
        for (let tagItem of selectedTag) {
            if (tagItem.tagId == tagId) {
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

    // Add Selected Tag
    const handleSelectTag = (event) => {
        event.preventDefault();
        if (!containTagId(event.target.value)) {
            setSelectedTag([...selectedTag, { tagId: event.target.value, tagName: getNameById(event.target.value), tagBgColor: setColor() }])
        }
    }

    // Delete Selected Tag
    const handleDeleteTag = (tagId) => {
        setSelectedTag(selectedTag.filter(tag => tag.tagId !== tagId))
    }

    // Handle Add new Character
    const handAddNewCharacter = () => {
        setCharacter([
            ...characters, {
                id: characterId,
                characterName: "",
                characterRole: "",
                characterImage: "",
                seiyuu: {
                    seiyuuName: "",
                    seiyuuImage: ""
                }
            }
        ])
        characterId--;
    }

    // Handle Delete selected Character
    const handleDeleteCharacter = (selectedId) => {
        setCharacter(characters.filter(character => character.characterId !== selectedId));
    }

    const handleInputCharactersInfo = (obj, id) => {
        setCharacter(prev => {
            return prev.map(character => (
                (character.characterId === id) ? Object.assign({}, character, obj) : character
            ));
        });
    }

    //List of content need to load from db
    const [seasons, setSeason] = useState([]);
    const [studios, setStudio] = useState([]);
    const [tags, setTag] = useState([]);
    const [loadStatus, setLoadStatus] = useState(true);

    // Get animeId to show
    let { animeId } = useParams();
    //Async fetch data when load form
    const fetchAnimeRelateData = async () => {
        // fetch anime data 
        fetch(`http://localhost:5000/api/anime/${animeId}`,
            {
                method: "GET"
            }).then(res => res.json())
            .then(res => {
                setInputAnime(
                    {
                        animeName: res.animeName,
                        content: res.content,
                        status: res.status,
                        trailer: res.trailer,
                        episodeDuration: res.episodeDuration,
                        episode: res.episode,
                        startDay: res.startDay,
                        web: res.web,
                        season: {
                            year: res.season.year,
                            seasonName: res.season.seasonName
                        },
                        studioId: res.studioId
                    }
                );
                setCharacter(res.characters);
                setSelectedTag(res.tags);

                setDefaultThumbnail(`data:image/*;base64,${res.thumbnail}`);
                setUploadThumbnail(res.thumbnail);

                setDefaultWallpaper(`data:image/*;base64,${res.wallpaper}`);
                setUploadWallpaper(res.wallpaper);

            })
            .catch(err => setInputAnime({}));
        //Fetch all season
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/season`,
            { method: "GET" }
        ).then(res => res.json())
            .then(res => setSeason(res))
            .catch(error => {
                setLoadStatus(false);
            });

        // Fetch all tag
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/tag`,
            { method: "GET" }
        ).then(res => res.json())
            .then(res => {
                setTag(res)
            })
            .catch(error => {
                setLoadStatus(false);
            });

        // Fetch all studio
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/studio`,
            { method: "GET" }
        ).then(res => res.json())
            .then(res => setStudio(res))
            .catch(error => {
                setLoadStatus(false);
            });
    };

    //Load data form db when page is loaded and Redirect to error page when load data fail
    useEffect(() => {
        //Call fetch anime
        fetchAnimeRelateData();
        window.scrollTo(0, 0);
    }, [])

    if (loadStatus === false) {
        return (
            <Redirect to='/Error' />
        );
    }
    // console.log(characters);

    // Insert new anime and redirect or notify error to user
    const handleClickInsert = (event) => {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...inputAnime,
                    thumbnail: uploadThumbnail,
                    wallpaper: uploadWallpaper,
                    tags: selectedTag,
                    characters: characters
                })
            }
        ).then(async res => {
            //Fail to add
            if (res.status === 409 || res.status === 500) {
                toggleModal(modalConfigs.inputFail);
                return;
            }

            //Add success
            setUploadStatus(true);
        })
            .catch(error => {
                //Connect fail
                setLoadStatus(false);
            });
    }

    const handleClickUpload = (event) => {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/${animeId}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...inputAnime,
                    thumbnail: uploadThumbnail,
                    wallpaper: uploadWallpaper,
                    tags: selectedTag,
                    characters: characters
                })
            }
        ).then(async res => {
            //Fail to add
            if (res.status === 409 || res.status === 500) {
                toggleModal(modalConfigs.inputFail);
                return;
            }

            //Add success
            setUploadStatus(true);
        })
            .catch(error => {
                //Connect fail
                setLoadStatus(false);
            });
    }


    if (uploadStatus === true) {
        return (
            <Redirect to='/setting/anime' />
        );
    }

    //View of anime form
    return (
        <div className="mb-5">
            {/* Mobile View */}
            <h1 style={{ color: "white", marginTop: "50%", marginLeft: "50%" }} className="d-block d-sm-block d-md-none d-lg-none d-xl-none"><b>Mở Desktop lên bạn</b></h1>

            {/* Desktop View */}
            <div className="AnimeForm-Frame col-12 col-md-10 mx-md-5 d-none d-sm-none d-md-block">
                <h4 className="p-5"><b>Upload new anime</b></h4>
                {/* Form Input Anime Info */}
                <form>
                    <div className="row px-5">
                        <AnimeImageForm
                            defaultThumbnail={defaultThumbnail}
                            handleUploadThumbnail={handleUploadThumbnail}
                            defaultWallpaper={defaultWallpaper}
                            handleUploadWallpaper={handleUploadWallpaper}
                        />

                        <AnimeDetailForm
                            studios={studios}
                            seasons={seasons}
                            inputAnime={inputAnime}
                            handleInputAnime={handleInputAnime}
                        />

                        <AnimeTagForm
                            tags={tags}
                            selectedTag={selectedTag}
                            handleSelectTag={handleSelectTag}
                            handleDeleteTag={handleDeleteTag}
                        />

                        <CharacterFormList
                            characters={characters}
                            handAddNewCharacter={handAddNewCharacter}
                            handleInputCharactersInfo={handleInputCharactersInfo}
                            handleDeleteCharacter={handleDeleteCharacter}
                        />

                        {/* Insert Button */}
                        { (inputAnime.animeName === "") ? 
                        <div className="my-3 d-flex justify-content-end">
                            <button type="submit" className="UploadButton btn" onClick={handleClickInsert}>Insert</button>
                        </div>

                            :

                            <div className="my-3 d-flex justify-content-end">
                                <button type="submit" className="UploadButton btn" onClick={handleClickUpload}>Upload</button>
                            </div>

                        }

                    </div>
                </form>
            </div>

            {/* Model to notify to user */}
            <CustomedModal
                modalHeader={modalProfile.header}
                modalBody={modalProfile.body}
                handleToggle={toggleModal}
                show={profileModalShow}
            />
        </div>
    );
}

export default AnimeForm;