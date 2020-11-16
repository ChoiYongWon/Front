import React from "react"
import styled from "styled-components"
import TextBox from "../../atoms/TextBox"
import RadioButtonRect from "../../atoms/RadioButtonRect"
import RadioButton from "../../atoms/RadioButton"
import SelectBox from "../../atoms/SelectBox"
import DateSelector from "../../atoms/DateSelector"

const VolunteerUpdateFormWrapper = styled.div`
    display: grid;
    width: 90%;
    height:100%;
    background-color: #f1f3f6;
    justify-items: center;
    align-content: center;
`

const SelectBoxOptions1 = ["우선순위","1","2","3","4","5"]
const SelectBoxOptions2 = ["전체","수성구","중구","동구","서구","남구","북구","달서구"]

const NTextBox = TextBox.withComponent('input.attrs.text').extend`
    background-color: black;
`;

const VolunteerUpdateForm = ({name,region, address, nameOnChange, genderOnChange, typeOnChange, priorityOnChange, dateOnChange, phoneOnChange, regionOnChange, AddressOnChange}) => {
    return (
        <>
        <VolunteerUpdateFormWrapper>
            <NTextBox width="40%" height="2.2rem" onChange={nameOnChange} defaultValue={name} placeholder="이름 입력"></NTextBox>
            <RadioButtonRect name="gender" onClick={genderOnChange} value="male">남성</RadioButtonRect>
            <RadioButtonRect name="gender"  onClick={genderOnChange} value="male">여성</RadioButtonRect>
            <RadioButton onClick={typeOnChange}>노력봉사</RadioButton>
            <RadioButton onClick={typeOnChange}>말벗봉사</RadioButton>
            <SelectBox width="20%" height="2.2rem" options={SelectBoxOptions1} onChange={priorityOnChange}></SelectBox>
            <DateSelector width="35%" height="2.2rem" onChange={dateOnChange}></DateSelector>
            <TextBox width="35%" height="2.2rem" onChange={phoneOnChange} placeholder="- 를 제외하고 입력"></TextBox>
            <SelectBox width="95%" height="2.3rem" onChange={regionOnChange} defaultValue={region} options = {SelectBoxOptions2}></SelectBox>
            <TextBox width="90%" height="2.3rem" onChange={AddressOnChange} defaultValue={address} placeholder="상세 주소를 입력해주세요."></TextBox>
        </VolunteerUpdateFormWrapper>
        </>
    )
}

export default VolunteerUpdateForm