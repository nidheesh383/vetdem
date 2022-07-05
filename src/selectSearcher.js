import React, { useState, useEffect } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./selectSearcher.css";
import clinic from "../src/clinic.json"

const SelectSearcher = ({changedata, handleChange}) => {
  const [data, setData] = useState(clinic);

  
  return (

    <div className="App">
      <div style={{ margin: "0 auto", width: '300px' }}>
        <SelectSearch
        value={changedata}
          options={data}
          onChange={(e) => handleChange(e.target.value)}
          search
          filterOptions={fuzzySearch}
          placeholder="Search something"
        />
      </div>
    </div>
  );
};
export default SelectSearcher;