import TextField from "./TextField";
import GroupField from "./GroupField";
import { useState } from "react";
const InputForm = ({ setList }) => {
    const FieldData = {
        name: { id: "name", name: "이름", errorMessage: "이름은 한글 2~6글자로 입력", regex: /^[가-힣]{2,6}$/ },
        tel: { id: "tel", name: "전화번호", errorMessage: "01로 시작하는 올바른 전화번호를 입력해주세요", regex: /^01[016789]-\d{3,4}-\d{4}$/ },
        memo: { id: "memo", name: "메모", errorMessage: "", regex: /.*/ },
    };
    const Storage_KEY = "list";
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [memo, setMemo] = useState("");
    const [group, setGroup] = useState(JSON.parse(localStorage.getItem("groups") || "[]")?.[0]?.groupName || "가족");

    const [isNameValid, setIsNameValid] = useState(true);
    const [isTelValid, setIsTelValid] = useState(true);
    const [isMemoValid, setIsMemoValid] = useState(true);
    const handleSubmit = () => {
        if (isNameValid && isTelValid && isMemoValid) {
            const data = JSON.parse(localStorage.getItem(Storage_KEY) || "[]");
            data.push({
                id: data.length === 0 ? 0 : data[data.length - 1].id + 1,
                name: name,
                tel: tel,
                group: group,
                memo: memo,
            });
            localStorage.setItem(Storage_KEY, JSON.stringify(data));
            setList(data);
        } else {
            alert("입력을 확인해주세요");
        }
    };
    return (
        <div className="input-wrap">
            <TextField fieldData={FieldData.name} setFieldValue={setName} isValid={isNameValid} setIsValid={setIsNameValid} />
            <TextField fieldData={FieldData.tel} setFieldValue={setTel} isValid={isTelValid} setIsValid={setIsTelValid} />
            <GroupField setGroup={setGroup} />
            <TextField fieldData={FieldData.memo} setFieldValue={setMemo} isValid={isMemoValid} setIsValid={setIsMemoValid} />
            <button onClick={handleSubmit}>저장</button>
        </div>
    );
};

export default InputForm;
