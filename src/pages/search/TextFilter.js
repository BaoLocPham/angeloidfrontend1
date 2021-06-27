//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//local dependencies
import './TextFilter.css';

const TextFilter = ({
    children, handleSelectName, tags, handleSelectTag, years, handleSelectYear, seasons, handleSelectSeason, formats, handleSelectFormat,
    selectedName, selectedYear, selectedSeason, selectedFormat
}) => {
    return (
        <div className="row w-100 h-auto mx-0 text-filter">

            {/* Name input */}
            <div className="col-12 col-md-2 p-0 search-box-name px-3">
                <p>Name</p>
                <div className="input-group">
                    {children}
                    <input type="text" className="form-control" value={selectedName} onChange={handleSelectName} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>

            {/* Other properties structure*/}
            <div className="col-12 col-md-10 p-0 pt-3 pt-md-0 search-bar">
                <div className="p-0 d-flex flex-row search-properties">

                    {/* Tag input */}
                    <div className="search-box">
                        <p>Tag</p>
                        <select value="" className="form-select" defaultValue={""} onChange={handleSelectTag} aria-label="Default select example">
                            <option hidden disabled value=""></option>
                            {tags.map(tag => (
                                <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Year input */}
                    <div className="search-box">
                        <p>Year</p>
                        <select className="form-select" value={selectedYear} onChange={handleSelectYear} aria-label="Default select example">
                            <option value="">Any</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Season input */}
                    <div className="search-box">
                        <p>Season</p>
                        <select className="form-select" value={selectedSeason} onChange={handleSelectSeason} aria-label="Default select example">
                            <option value="">Any</option>
                            {seasons.map(season => (
                                <option key={season} value={season}>{season}</option>
                            ))}
                        </select>
                    </div>

                    {/* Format input */}
                    <div className="search-box">
                        <p>Format</p>
                        <select className="form-select" value={selectedFormat} onChange={handleSelectFormat} aria-label="Default select example">
                            <option value="0">Any</option>
                            {formats.map(format => (
                                <option key={format.formatId} value={format.formatId}>{format.formatName}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* search button */}
                    {/* <div className="change-search-button d-flex align-items-end">
                        <button className="btn btn-info" style={{ color: "white" }}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div> */}

                    {/* Change search type button */}
                    <div className="change-search-button d-flex align-items-end">
                        <Link to="/search/image">
                            <button type="button" className="btn btn-success">
                                <i className="fa fa-file-image-o" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextFilter;