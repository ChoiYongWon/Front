import React from "react";

const MenuInfo = (props) => {

  const handleClick = (event) => {
    event.persist();
    props.LOGOUT()
    localStorage.removeItem("KAKAO_ACCESS_TOKEN")
  }


  return (
    <>
      <div className="content__info__wrapper">
        <div className="content__info__title">안녕하세요 {props.username}님</div>
        <div className="content__info__card">
          <div className="content__info__card--key">MODE</div>
          <div className="content__info__card--value">관리자 모드</div>
        </div>
        <div className="content__info__card">
          <div className="content__info__card--key">LOGIN</div>
          <div className="content__info__card--value" onClick={handleClick}>LOGOUT</div>
        </div>
      </div>
    </>
  );
  }
export default MenuInfo;