import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRequest } from "./store/actions";
import useDebounce from "./Utilities/debounceHook";

const App = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const queryIsVlid = query !== "" && query !== " ";
  const debouncedQuery = useDebounce(query, 800);
  const results = useSelector((state) => state.result);
  useEffect(() => {
    queryIsVlid && dispatch(searchRequest(debouncedQuery));
  }, [debouncedQuery]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  const resultList = useMemo(() => {
    if (queryIsVlid)
      return results.map((item, i) => {
        return (
          <div key={i}>
            {item.name + " "}
            <span>{item.alias}</span>
          </div>
        );
      });
    return [];
  }, [debouncedQuery, results]);

  return (
    <div className="App">
      <h1>Searchable heroes</h1>
      <br />
      <input type="text" value={query} onChange={handleChange} />
      {resultList}
    </div>
  );
};

export default App;
