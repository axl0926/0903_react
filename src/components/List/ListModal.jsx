const ListModal = ({ item, setIsModalOpen }) => {
    const modalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="modal-wrap list-modal">
            <div className="modal">
                <h2>연락처 상세 정보 </h2>
                <div>
                    <span>이름:</span>
                    <span>{item.name}</span>
                </div>
                <div>
                    <span>전화번호:</span>
                    <span>{item.tel}</span>
                </div>
                <div>
                    <span>그룹:</span>
                    <span>{item.group}</span>
                </div>
                <div>
                    <span>메모:</span>
                    <span>{item.memo}</span>
                </div>
                <button onClick={modalClose} className="close-btn">
                    닫기
                </button>
            </div>
        </div>
    );
};

export default ListModal;
