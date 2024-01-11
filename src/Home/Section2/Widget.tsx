import styled from "styled-components";
import { useState } from "react";
import '../../Static/styles/widget.css'
import { textColor } from "../../Static/GlobalStyles";


const Widget = () => {

  const renderOne = (
    <ItemContentWrap>
      <DescriptionWrap>
          <H1>Dubs Advising</H1>
          <Ul>
              <Li>Developed a website for a sports advising company I co-founded in React, with a backend written in Flask(Python)</Li>
              <Li>Integrated the Twilio, Stripe, and Paypal APIs to create a seamless customer experience</Li>
              <ConcordiaProjectDiv>
              <Project target='_blank' href="https://dubsadvising.com/">Dubs Advising</Project>
              </ConcordiaProjectDiv>
          </Ul>
      </DescriptionWrap>
    </ItemContentWrap>)
  const renderTwo = (
    <ItemContentWrap>
      <DescriptionWrap>
        <Ul>  <Li>Identifying Mood Motifs using High-Resolution Mood Symptom Time Series and Dynamic Time Warping</Li>
              <Li>Implemented an algorithm in MatLab to identify mood motifs in mood symptom time series</Li>
              <ConcordiaProjectDiv>
              <Project target='_blank' href="https://github.com/diegogonza112/DTWMotif-Clustering">Learn More...</Project>
              <Project target='_blank' href="https://drive.google.com/file/d/1y9efjGIeR7uMZBoGqjmxt4nbSiwcvBwb/view">View Poster</Project>
              </ConcordiaProjectDiv>
          </Ul>
      </DescriptionWrap>
    </ItemContentWrap>
  )
  const renderThree = (
    <ItemContentWrap>
      <DescriptionWrap>
        <Ul>
          <H1>Avanade Inc.</H1>
            <Li>Interned as a full stack software engineer doing IT consulting with Canada Post</Li>
          <H1>HubSpot Inc.</H1>
            <Li>Interned as a frontend software engineer implementing the Sales Meetings UI</Li>
        </Ul>
        <ConcordiaProjectDiv>
            <Project target='_blank' href="https://drive.google.com/file/d/1V7zRJIufe7RoFGFehpeWxARTll5c7-_Z/view">View my full resume</Project>
        </ConcordiaProjectDiv>
      </DescriptionWrap>
    </ItemContentWrap>
  )

  const [expandedItems, setExpandedItems] = useState([false, false, false]);

  const toggleItem = (index: number) => {
      setExpandedItems(expandedItems.map((item, i) => i === index ? !item : false));
  };

  const renderItem = (index: number) => {
      return (
          <div onClick={() => toggleItem(index)}>
              {index === 0 ? (<HeaderItem>Projects</HeaderItem>):(index === 1 ? (<HeaderItem>Publications</HeaderItem>):(<HeaderItem>Work Experience</HeaderItem>))}
              {expandedItems[index] && (index === 0 ? (renderOne):(index === 1 ? (renderTwo):(renderThree)))}
          </div>
      );
  };

  return (
    <WidgetWrap>
        <ContentWrap>{renderItem(0)}</ContentWrap>
        <ContentWrap>{renderItem(1)}</ContentWrap>
        <ContentWrap>{renderItem(2)}</ContentWrap>
        {expandedItems.every(v => v === false) ? (
          <ConcordiaProjectDiv>
              <Project target='_blank' href="https://drive.google.com/file/d/1V7zRJIufe7RoFGFehpeWxARTll5c7-_Z/view">View my full resume</Project>
          </ConcordiaProjectDiv>
        ):null}
    </WidgetWrap>
  );
};

const ConcordiaProjectDiv = styled.div`
display: flex;
width: 100%;
justify-content: center;

`

const Project = styled.a`
margin: 10px;
padding: 20px;
text-decoration: none;
border: 1px solid ${textColor};
transition: all 0.5s ease-out;

&:hover {
  background-color: darkgray;
  cursor: pointer;
}
`

const Ul = styled.ul`
margin: 20px;
`

const Li = styled.li`
text-align: left;
margin: 10px;
`

const H1 = styled.h1`
font-family: 'Fira Code Light';
`

const DescriptionWrap = styled.div `
display: flex;
flex-direction: column;
width: 100%;
`

const ItemContentWrap = styled.div `
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
overflow:auto;
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const HeaderItem = styled.li`
list-style-type: none;
text-align: center;
margin: 10px 20px;
position: relative;
transition: border-bottom 0.3s ease-in-out;
font-size: 2rem;
cursor: pointer;


border-bottom: 1px solid ${textColor};

&:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #333;
  transition: width 0.3s ease-in-out;
}

&:hover:before {
  width: 100%;
}

`;


const WidgetWrap = styled.div`  

display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
height: 100%;
width: 100%;
@media (max-width: 767px) {
  width: 90%;
  margin: 0px 10px;
}

`

export default Widget;