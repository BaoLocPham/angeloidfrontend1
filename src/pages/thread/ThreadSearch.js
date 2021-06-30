import React from 'react';

const ThreadSearch = ({ handleSearchThread, setTextInput }) => {

    const formStyle = {
        backgroundColor: "#131E2A", color: "#fff",
        padding: "2.5rem 0 0.5rem 0"
    }
    const transparent = {
        backgroundColor: "#19293B",
        color: "#fff",
        border: "0"
    }

    return (
        <>
            <form className="row w-100 h-auto mx-0" style={formStyle} onSubmit={handleSearchThread}>
                <div className="col-12 p-0">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1" style={transparent}><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" style={transparent}
                            onChange={(event) => setTextInput(event.target.value)}
                            placeholder="Anime ga suki desu" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button type="submit" onSubmit={handleSearchThread} hidden />
                </div>
            </form>
        </>
    );
}

export default ThreadSearch;