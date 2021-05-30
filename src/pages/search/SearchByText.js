import React, { useState, useEffect } from 'react';
import TextFilter from './TextFilter';
import SearchTagList from './SearchTagList';
import SearchResult from './SearchResult';

const SearchByText = () => {

    //Khởi tạo giá trị cho các input form (sau này sẽ lấy dữ liệu từ api)
    const tags = [
        { tagId: 1, tagName: "Isekai" },
        { tagId: 2, tagName: "Slice of life" },
        { tagId: 3, tagName: "School" },
        { tagId: 4, tagName: "Fantasy" }
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
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("");

    // Check các thay đổi trên các input 

    const handleSelectName = (event) => {
        setSelectedName(event.target.value);
    }

    const handleSelectTag = (event) => {
        setSelectedTag(event.target.value);
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
                handleSelectName = {handleSelectName}
                tags={tags} handleSelectTag={handleSelectTag} 
                years={years} handleSelectYear={handleSelectYear} 
                seasons={seasons} handleSelectSeason={handleSelectSeason}
                formats={formats} handleSelectFormat={handleSelectFormat}/>
            <SearchTagList />
            <SearchResult />
        </div>
    );
}

export default SearchByText;