import React, { useState, useEffect } from 'react';
import TextFilter from './TextFilter';
import SearchTagList from './SearchTagList';
import SearchResult from './SearchResult';

const colorList = [
    { id: 1, colorCode: "#EC294B" },
    { id: 2, colorCode: "#F2AC57" },
    { id: 3, colorCode: "#0880AE" },
    { id: 4, colorCode: "#178F58" },
    { id: 5, colorCode: "#14A38B" },
    { id: 6, colorCode: "#35DF90" },
    { id: 7, colorCode: "#FF7171" },
]

const SearchByText = () => {

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

    const years = [
        { yearId: 1, year: "2021" },
        { yearId: 2, year: "2019" },
        { yearId: 3, year: "2018" },
        { yearId: 4, year: "2017" },
        { yearId: 5, year: "2016" }
    ]

    const seasons = [
        { seasonId: 1, seasonName: "Spring" },
        { seasonId: 2, seasonName: "Summer" },
        { seasonId: 3, seasonName: "Autumn" },
        { seasonId: 4, seasonName: "Winter" }
    ]

    const formats = [
        { formatId: 1, formatName: "TV" },
        { formatId: 2, formatName: "Movie" },
        { formatId: 3, formatName: "Ova" },
        { formatId: 4, formatName: "Special" }
    ]

    //State để quản lí các input form

    const [selectedName, setSelectedName] = useState("");
    const [selectedTag, setSelectedTag] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("");

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
            setSelectedTag([...selectedTag, { tagId: event.target.value, tagName: getNameById(event.target.value), tagBgColor: setColor() }])
        }
    }

    // Handle Delete Selected Tag
    const handleDeleteTag = (tagId) => {
        setSelectedTag(selectedTag.filter(tag => tag.tagId !== tagId))
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

    useEffect(() => {
        console.log("Name: " + selectedName);
        console.log("Tag: " + selectedTag);
        console.log("Year: " + selectedYear);
        console.log("Season: " + selectedSeason);
        console.log("Format: " + selectedFormat);
        console.log("--------------------------")
    }, [selectedName, selectedTag, selectedYear, selectedSeason, selectedFormat])

    return (
        <div>
            <TextFilter
                handleSelectName={handleSelectName}
                tags={tags} handleSelectTag={handleSelectTag}
                years={years} handleSelectYear={handleSelectYear}
                seasons={seasons} handleSelectSeason={handleSelectSeason}
                formats={formats} handleSelectFormat={handleSelectFormat} />
            <SearchTagList selectedTag={selectedTag} handleDeleteTag={handleDeleteTag} />
            <SearchResult />
        </div>
    );
}

export default SearchByText;