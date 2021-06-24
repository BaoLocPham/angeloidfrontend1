import React from "react";

const AnimeDetailForm = ({ studios, seasons, inputAnime, handleInputAnime }) => {
    return (
        <div className="row">

            {/* Anime Name */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="animeName" className="form-label">
                    Anime Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="animeName"
                    name="animeName"
                    defaultValue={inputAnime.animeName}
                    onChange={(event) =>
                        handleInputAnime({ animeName: event.target.value })
                    }
                />
            </div>

            {/* Studio */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="studio" className="form-label">
                    Studio
                </label>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={(inputAnime !== undefined) ? inputAnime.studioId : ""}
                    defaultValue={inputAnime.studioId}
                    onChange={(event) =>
                        handleInputAnime({ studioId: event.target.value })
                    }
                >
                    <option hidden disabled value=""></option>
                    {studios.map((studio) => (
                        <option key={`studio${studio.studioId}`} value={studio.studioId}>
                            {studio.studioName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Description */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    rows="9"
                    defaultValue={inputAnime.content}
                    onChange={(event) =>
                        handleInputAnime({ content: event.target.value })
                    }
                ></textarea>
            </div>
            <div className=" col-12 col-md-6">
                {/* Episodes */}
                <div className="my-1">
                    <label htmlFor="episodes" className="form-label">
                        Episodes
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="episodes"
                        name="episodes"
                        defaultValue={inputAnime.episode}
                        onChange={(event) =>
                            handleInputAnime({ episode: event.target.value })
                        }
                    />
                </div>

                {/* Duration */}
                <div className="my-1">
                    <label htmlFor="duration" className="form-label">
                        Duration
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        name="duration"
                        defaultValue={inputAnime.episodeDuration}
                        onChange={(event) =>
                            handleInputAnime({ episodeDuration: event.target.value })
                        }
                    />
                </div>

                {/* Season */}
                <div className="my-1">
                    <label htmlFor="duration" className="form-label">
                        Season
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={(inputAnime.season !== undefined) ? inputAnime.season.seasonName : ""}
                        defaultValue={(inputAnime.season !== undefined) ? inputAnime.season.seasonName : ""}
                        onChange={(event) =>
                            handleInputAnime({
                                season: {
                                    ...inputAnime.season,
                                    seasonName: event.target.value,
                                },
                            })
                        }
                    >
                        <option hidden disabled value=""></option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                    </select>
                </div>

                {/* Year */}
                <div className="my-1">
                    <label htmlFor="year" className="form-label">
                        Year
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={(inputAnime.season !== undefined) ? inputAnime.season.year : ""}
                        defaultValue={(inputAnime.season !== undefined) ? inputAnime.season.year : ""}
                        onChange={(event) =>
                            handleInputAnime({
                                season: { ...inputAnime.season, year: event.target.value },
                            })
                        }
                    >
                        <option hidden disabled value=""></option>
                        {seasons.map((season) => (
                            (season != 0) ? <option key={`season${season}`} value={season}>
                                {season}
                            </option> : ""
                        ))}
                    </select>
                </div>
            </div>

            {/* Status */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="status" className="form-label">
                    Status
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="status"
                    name="status"
                    defaultValue={inputAnime.status}
                    onChange={(event) => handleInputAnime({ status: event.target.value })}
                />
            </div>

            {/* startDay */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="startDay" className="form-label">
                    StartDay
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="startDay"
                    name="startDay"
                    defaultValue={inputAnime.startDay}
                    onChange={(event) =>
                        handleInputAnime({ startDay: event.target.value })
                    }
                />
            </div>

            {/* web link */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="web" className="form-label">
                    Web link
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="web"
                    name="web"
                    defaultValue={inputAnime.web}
                    onChange={(event) => handleInputAnime({ web: event.target.value })}
                />
            </div>

            {/* trailer */}
            <div className=" col-12 col-md-6 my-1">
                <label htmlFor="trailer" className="form-label">
                    Trailer link
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="trailer"
                    name="trailer"
                    defaultValue={inputAnime.trailer}
                    onChange={(event) =>
                        handleInputAnime({ trailer: event.target.value })
                    }
                />
            </div>
        </div>
    );
};

export default AnimeDetailForm;
