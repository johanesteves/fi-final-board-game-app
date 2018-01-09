import React from 'react'

const BoardGameSearchForm = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="searchText" className="col-md-4 control-label">Search: </label>
                <input name="searchText" type="text" className="col-lg-6 form-control" onChange={props.handleOnChange} />
            </form>
            <h3>Results:</h3>
        </div>
    )
};

export default BoardGameSearchForm