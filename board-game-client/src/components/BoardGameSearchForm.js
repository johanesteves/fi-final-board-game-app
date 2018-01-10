import React from 'react'

const BoardGameSearchForm = (props) => {
    return (
        <div className="container">
            <br />
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="searchText">Search</label>
                    <input name="searchText" type="text" className="form-control mx-sm-3" onChange={props.handleOnChange} />
                </div>
            </form>
        </div>
    )
};

export default BoardGameSearchForm