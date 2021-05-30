//dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//local dependencies
import './TextFilter.css';

const TextFilter = ({ handleSelectName, tags, handleSelectTag, years, handleSelectYear, seasons, handleSelectSeason, formats, handleSelectFormat}) => {
    return (
        <div className="row w-100 h-auto mx-0 text-filter">

            {/* Name input */}
            <div className="col-12 col-md-2 p-0 search-box-name px-3">
                <p>Name</p>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" onChange={handleSelectName} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>

            {/* Other properties structure*/}
            <div className="col-12 col-md-10 p-0 pt-3 pt-md-0 search-bar">
                <div className="p-0 d-flex flex-row search-properties">

                    {/* Tag input */}
                    <div className="search-box">
                        <p>Tag</p>
                        <select className="form-select" defaultValue={""} onChange={handleSelectTag} aria-label="Default select example">
                            <option hidden disabled value=""></option>
                            {tags.map(tag => (
                                <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Year input */}
                    <div className="search-box">
                        <p>Year</p>
                        <select className="form-select" defaultValue={""} onChange={handleSelectYear}  aria-label="Default select example">
                            <option hidden disabled value=""></option>
                            {years.map(year => (
                                <option key={year.yearId} value={year.yearId}>{year.year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Season input */}
                    <div className="search-box">
                        <p>Season</p>
                        <select className="form-select" defaultValue={""} onChange={handleSelectSeason} aria-label="Default select example">
                            <option hidden disabled value=""></option>
                            {seasons.map(season => (
                                <option key={season.seasonId} value={season.seasonId}>{season.seasonName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Format input */}
                    <div className="search-box">
                        <p>Format</p>
                        <select className="form-select" defaultValue={""} onChange={handleSelectFormat} aria-label="Default select example">
                            <option hidden disabled value=""></option>
                            {formats.map(format => (
                                <option key={format.formatId} value={format.formatId}>{format.formatName}</option>
                            ))}
                        </select>
                    </div>

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