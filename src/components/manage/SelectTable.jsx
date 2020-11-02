//Select
import React from 'react'



const SelectTable = (props) => {

    const handleClick = () => {

        if (props.id) {
            localStorage.setItem("SELECT_ID", props.id)
            window.open('http://localhost:3000/read', 'window_name',
                'width=530,height=633,location=no,status=no,scrollbars=yes');
        } else {
            alert("게시물을 선택해 주세요");
        }
    }


    return (
        <>
            <table className="select__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>제목</th>
                        <th>봉사날짜</th>
                        <th>봉사지역</th>
                    </tr>
                </thead>
                <tbody onClick={handleClick} >
                    <tr>
                        <td>{props.id}</td>
                        {/* <td><Link to="/read">{(props.title) ? props.title : "해당게시글을 선택하세요"}</Link></td> */}
                        <td >{(props.title) ? props.title : "수정및 삭제할 게시글을 선택하세요"}</td>
                        <td>{props.dov}</td>
                        <td>{props.nor}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default SelectTable;