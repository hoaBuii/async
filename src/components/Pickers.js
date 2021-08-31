import React from 'react';

const Pickers = ({value, onChange, options}) => {
    return(
        <select value={value} onChange={e => onChange(e.target.value)}>
            {
                options.map((option, i)=>{
                    return(
                        <option value={option} key={i}>{option}</option>
                    );
                })
            }
        </select>
    );
}


export default Pickers;