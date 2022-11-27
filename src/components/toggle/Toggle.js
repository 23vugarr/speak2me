import React from "react";

const ToggleSwitch = ({ label, setChecked }) => {

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    return (
        <div className="container">
            <span id="mic">{label}{":"}</span>
            <div className="toggle-switch">
                <input onChange={handleChange} type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;