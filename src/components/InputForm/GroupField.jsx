import { useState } from "react";

import GroupModal from "./GroupModal";
const GroupField = ({ setGroup }) => {
    const Storage_KEY = "groups";
    const storedGroups = JSON.parse(localStorage.getItem(Storage_KEY) || "[]");
    if (storedGroups.length === 0) {
        storedGroups.push(
            ...[
                { id: 0, groupName: "가족" },
                { id: 1, groupName: "친구" },
                { id: 2, groupName: "회사" },
            ]
        );
        localStorage.setItem(Storage_KEY, JSON.stringify(storedGroups));
    }
    const [groupList, setGroupList] = useState(storedGroups);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChange = (e) => {
        setGroup(e.target.value);
    };
    const handleClick = () => {
        setIsModalOpen(true);
    };
    return (
        <div className="group-field">
            <div className="wrap">
                <span>그룹</span>
                <div className="select-wrap">
                    <select id="group" onChange={handleChange}>
                        {groupList.map((v, i) => {
                            return (
                                <option key={"GroupField" + i} value={v.groupName}>
                                    {v.groupName}
                                </option>
                            );
                        })}
                    </select>
                    <button className="add-group-btn" onClick={handleClick}>
                        그룹 추가
                    </button>
                </div>

                {isModalOpen && <GroupModal groupList={groupList} setGroupList={setGroupList} setIsModalOpen={setIsModalOpen} />}
            </div>
        </div>
    );
};

export default GroupField;
