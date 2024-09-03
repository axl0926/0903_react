import ListItem from "./ListItem";
import Search from "./Search";
import { useState } from "react";

const List = ({ list, setList }) => {
    const [filterText, setFilterText] = useState("");
    return (
        <>
            <Search setFilterText={setFilterText} />
            {list
                .filter((v) => v.name.includes(filterText) || v.tel.includes(filterText) || v.memo.includes(filterText) || v.group.includes(filterText))
                .map((v, i) => (
                    <ListItem key={"List" + i} item={v} setList={setList} />
                ))}
        </>
    );
};

export default List;
