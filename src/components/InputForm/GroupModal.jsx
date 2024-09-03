import { useState } from "react";

const GroupModal = ({ groupList, setGroupList, setIsModalOpen }) => {
    const Storage_KEY = "groups";
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleClick = () => {
        const newGroupList = [...groupList, { id: groupList.length === 0 ? 0 : groupList[groupList.length - 1].id + 1, groupName: input }];
        localStorage.setItem(Storage_KEY, JSON.stringify(newGroupList));
        setGroupList(newGroupList);
    };
    const modalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="modal-wrap group-modal">
            <div className="modal">
                <div className="group-list-wrap">
                    <h2>그룹 관리</h2>
                    {groupList.map((v, i) => {
                        return (
                            <div key={"GroupModal" + i} className="group-list">
                                <span>{v.groupName}</span>
                                <button
                                    onClick={() => {
                                        const newGroups = groupList.filter((group) => group.id !== v.id);
                                        localStorage.setItem(Storage_KEY, JSON.stringify(newGroups));
                                        setGroupList(newGroups);
                                    }}>
                                    X
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="group-input-wrap">
                    <input type="text" placeholder="새 그룹 이름" onChange={handleChange} />
                    <button onClick={handleClick}>추가</button>
                </div>
                <button onClick={modalClose} className="close-btn">
                    닫기
                </button>
            </div>
        </div>
    );
};

export default GroupModal;
