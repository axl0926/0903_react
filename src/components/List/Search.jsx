import { useState } from "react";

const Search = ({ setFilterText }) => {
    const [inputValue, setInputValue] = useState("");
    const handleClick = () => {
        setInputValue("");
        setFilterText("");
    };
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setFilterText(inputValue);
        }
    };
    return (
        <div className="search-wrap">
            <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={inputValue} placeholder="검색어를 입력 후 엔터를 누르세요" />
            <button onClick={handleClick}>전체 보기</button>
        </div>
    );
};

export default Search;
