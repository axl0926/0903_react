const TextField = ({ fieldData, setFieldValue, isValid, setIsValid }) => {
    const handleChange = (e) => {
        setFieldValue(e.target.value);
        setIsValid(fieldData.regex.test(e.target.value));
    };

    return (
        <div className="text-field">
            <div className="wrap">
                <span>{fieldData.name}</span>
                <input type="text" id={fieldData.id} placeholder={fieldData.name} onChange={handleChange} />
            </div>
            {!isValid && <span className="error-message">{fieldData.errorMessage}</span>}
        </div>
    );
};

export default TextField;
