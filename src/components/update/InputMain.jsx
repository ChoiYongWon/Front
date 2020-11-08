import React from 'react'

const InputMain = (props) => {

    var Title = props.Title;
    var Region = props.Region;

    const onChange = (mainValue) => {
        const value = mainValue.target.value;
        const type = mainValue.target.name;
        console.log([type], value);
        props.SET_CONFIG({
            notice: {
                [type]: value
            }
        })
    }



    return (
        <>
            <div className="main input__main">
                <div className="main__title--name">제목</div>
                <input type="text" className="main__title--value"
                    name='Title' onChange={onChange} value={Title || ''} />
                <div className="main__location--name">장소</div>
                <select className="main__location--value"
                    name='Region' onChange={onChange} value={Region}>
                    <option value="수성구">수성구</option>
                    <option value="중구">중구</option>
                    <option value="동구">동구</option>
                    <option value="서구">서구</option>
                    <option value="서구">달서구</option>
                    <option value="남구">남구</option>
                    <option value="북구">북구</option>
                </select>
            </div>
        </>
    )

}

export default InputMain;