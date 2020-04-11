import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRequest } from "./store/actions";
import useDebounce from "./Utilities/debounceHook";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const results = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(searchRequest(debouncedQuery));
  }, [debouncedQuery]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  const resultList = useMemo(
    () =>
      results.map((item, i) => {
        return (
          <div className="result" key={i}>
            {item.name + " "}
            <span className="alias">{item.alias}</span>
          </div>
        );
      }),
    [results]
  );

  return (
    <div className="App">
      <h1>Searchable heroes</h1>
      <br />
      <div className="Wrapper">
        <div className="input-container">
          <input
            placeholder="Search DC heros by name, alias or ID"
            className="input"
            type="text"
            value={query}
            onChange={handleChange}
          />
          {loading && (
            <div class="icon-container">
              <i class="loader"></i>
            </div>
          )}
        </div>
        {resultList}
      </div>
    </div>
  );
};

export default App;
