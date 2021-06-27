//#region Import
// Libs
import React, { useState, useEffect, useRef } from 'react';
import { fetchSearchData, search } from '../../adapters/SearchAPI';
// Components
import TextFilter from './TextFilter';
import SearchTagList from './SearchTagList';
import SearchResult from './SearchResult';
import Loading from '../components/Loading';
import { data } from 'jquery';
import Cell from './img/cells12d.jpg';
import Kanna from '../error/Kanna.png';
//#endregion Import

//#region Const Declare
const colorList = [
    { id: 1, colorCode: "#EC294B" },
    { id: 2, colorCode: "#F2AC57" },
    { id: 3, colorCode: "#0880AE" },
    { id: 4, colorCode: "#178F58" },
    { id: 5, colorCode: "#14A38B" },
    { id: 6, colorCode: "#35DF90" },
    { id: 7, colorCode: "#FF7171" },
]

const quotes = {
    1: { quote: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy, War and Peace"},
    2: { quote: "Somewhere, something incredible is waiting to be known.", author: "Sharon Begley"},
    3: { quote: "You usually have to wait for that which is worth waiting for.", author: "Craig Bruce"},
    4: { quote: "Life was always a matter of waiting for the right moment to act.", author: "Paulo Coelho"},
    5: { quote: "Mars is there, waiting to be reached.", author: "Buzz Aldrin"},
    6: { quote: "We're waiting for the pendulum to swing back again, which I am absolutely confident it will.", author: "Don Bluth"},
    7: { quote: "Your heart is full of fertile seeds, waiting to sprout.", author: "Morihei Ueshiba"},
    8: { quote: "We all have the extraordinary coded within us, waiting to be released.", author: "Jean Houston"},
}

const KANNA_IMG_STYLE = {
    height: 360,
    width: 360,
    backgroundImage: `url(${Kanna})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
}
//#endregion Const Declare

const SearchByText = () => {
    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');
    const [isAnimeLoading, setIsAnimeLoading] = useState('init');
    const [tags, setTags] = useState([]);
    const [years, setYears] = useState([]);
    const seasons = ["Winter", "Spring", "Summer", "Fall"];

    const formats = [
        { formatId: 1, formatName: "Oneshot/Movie" },
        { formatId: 2, formatName: "Series" },
    ]

    useEffect(() => {
        Promise.all([
            fetchSearchData(`${process.env.REACT_APP_BACKEND_URL}api/tag`),
            fetchSearchData(`${process.env.REACT_APP_BACKEND_URL}api/season`),
        ]).then(([tagList, seasonYearList]) => {
            setTags(tagList);
            setYears(seasonYearList.reverse());
            setIsLoading('done');
        });
    }, []);

    //State để quản lí các input form
    const [selectedName, setSelectedName] = useState("");
    const [selectedTag, setSelectedTag] = useState([]);
    const [tagListToSend, setTagListToSend] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [selectedFormat, setSelectedFormat] = useState(0);

    // Check các thay đổi trên các input 
    const handleSelectName = (event) => {
        setSelectedName(event.target.value);
    }

    // Set Random Background Color for Tag
    const setColor = () => {
        const colorRandom = (Math.floor(Math.random() * 7) + 1);
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
            setSelectedTag([...selectedTag, { tagId: event.target.value, tagName: getNameById(event.target.value), tagBgColor: setColor() }]);
            setTagListToSend([...tagListToSend, { tagId: event.target.value, tagName: getNameById(event.target.value) }]);
        }
    }

    // Handle Delete Selected Tag
    const handleDeleteTag = (tagId) => {
        setSelectedTag(selectedTag.filter(tag => tag.tagId !== tagId));
        setTagListToSend(tagListToSend.filter(tag => tag.tagId !== tagId));
    }

    const handleSelectYear = (event) => {
        setSelectedYear(event.target.value);
    }

    const handleSelectSeason = (event) => {
        setSelectedSeason(event.target.value);
    }

    const handleSelectFormat = (event) => {
        setSelectedFormat(event.target.value);
    }

    //Xuất dữ liệu ra console
    const [searchResult, setSearchResult] = useState([]);
    // Ref to disable btn when user submit data
    let searchBtn = useRef(null);

    const handleSubmitSearch = () => {
        setIsAnimeLoading('loading');
        // If Submit Button exist, disable it
        // Prevent too many request to the server
        if (searchBtn.current) {
            searchBtn.current.setAttribute("disabled", "disabled");
        }

        var obj = {
            animeName: selectedName,
            year: selectedYear,
            seasonName: selectedSeason,
            tags: tagListToSend,
            episode: selectedFormat.toString(), 
        }

        Promise.all([
            search(`${process.env.REACT_APP_BACKEND_URL}api/search`, obj),
        ]).then(([data]) => {
            setSearchResult(data);
            searchBtn.current.removeAttribute("disabled");
        });
    }

    const getRandomQuote = () => {
        return quotes[(Math.floor(Math.random() * 8) + 1)]
    }

    useEffect(() => {
        if (isAnimeLoading !== 'init') {
            setIsAnimeLoading('done');
        }
    }, [searchResult])

    //#region Render
    if (isLoading === "loading") {
        return <Loading />
    }

    let quote = getRandomQuote();
    return (
        <div className="bg-dark-container" style={{ minHeight: "100vh" }}>
            <TextFilter
                handleSelectName={handleSelectName}
                tags={tags} handleSelectTag={handleSelectTag}
                years={years} handleSelectYear={handleSelectYear}
                seasons={seasons} handleSelectSeason={handleSelectSeason}
                selectedName={selectedName} selectedYear={selectedYear} selectedSeason={selectedSeason} selectedFormat={selectedFormat}
                formats={formats} handleSelectFormat={handleSelectFormat}>
                <button className="input-group-text btn btn-info" id="basic-addon1" style={{ color: "white" }}
                    onClick={handleSubmitSearch}
                    ref={searchBtn}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </TextFilter>
            <SearchTagList selectedTag={selectedTag} handleDeleteTag={handleDeleteTag} />

            { isAnimeLoading === 'init' ?
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="pt-4 pb-2"><u>It's time to search anime!</u></h4>
                    <img className="my-2 img-fluid" src={Cell} alt="Platelet - Hataraku Saibou" />
                </div>
                : isAnimeLoading === 'loading' ? 
                    <div className="d-flex flex-column justify-content-center align-items-center py-3">
                        <h4 className="text-light">{quote.quote}</h4>
                        <p className="text-light"><i>---{quote.author}---</i></p>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : searchResult.length === 0 ?
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", height: "400px" }}>
                            <h5 className="p-2"><u>Oops... We could not find your anime...</u></h5>
                            <div className="my-2" style={KANNA_IMG_STYLE} ></div>
                        </div>
                        : <SearchResult searchResult={searchResult} />
            }
        </div>
    );
    //#endregion Render
}

export default SearchByText;