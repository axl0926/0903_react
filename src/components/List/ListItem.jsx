import ListModal from "./ListModal";
import { useState } from "react";

const ListItem = ({ item, setList }) => {
    const Storage_KEY = "list";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const deleteItem = () => {
        setList((prev) => {
            const next = prev.filter((v) => v.id !== item.id);
            localStorage.setItem(Storage_KEY, JSON.stringify(next));
            return next;
        });
    };
    return (
        <div className="list-item">
            <div className="list-info">
                <span>{item.name}</span>
                <span>{item.tel}</span>
                <span>{item.group}</span>
            </div>
            <div className="list-btns">
                <button onClick={openModal}>세부사항</button>
                <button onClick={deleteItem}>삭제</button>
            </div>
            {isModalOpen && <ListModal item={item} setIsModalOpen={setIsModalOpen} />}
        </div>
    );
};

export default ListItem;
