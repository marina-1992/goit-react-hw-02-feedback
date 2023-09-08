import styled from 'styled-components';

const ButtonWraper = styled.div`
 color: black;
`


const ButtonFeedback = styled.button`
 line-height: 50px;
  height: 50px;
  text-align: center;
  width: 100px;
 font-weight: bold;
  cursor: pointer;
 background-color: #c599ee;
 margin: 10px;
 border-radius:5px;
 
  &:hover {
        background-color: #e5b9ce;}
  `; 
export { ButtonFeedback, ButtonWraper };