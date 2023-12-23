import styled from "styled-components";
import { useState } from "react";
import './styles/widget.css'
import { textColor } from "./GlobalStyles";

const Widget = () => {


    const [activeTab, setActiveTab] = useState("dubs");

    const handleClick = (tab: string) => {
      setActiveTab(tab);
    };
  
    const renderContent = () => {
      switch (activeTab) {
        case "dubs":
          return (<ItemContentWrap>
                    <DescriptionWrap>
                        <H1>Dubs Advising</H1>
                        <Ul>
                            <Li>Developed a website for a sports advising company I co-founded</Li>
                            <Li>Implemented many technologies such as Twilio, Stripe, and Paypal to create a seamless customer experience</Li>
                            <Li>Managed a team of three engineers to build and improve the site</Li>
                            <Li>Implemented the frontend in React and TypeScript, with a backend in Python using the Flask framework</Li>
                            <ConcordiaProjectDiv>
                            <Project target='_blank' href="https://dubsadvising.com/">Dubs Advising</Project>
                            </ConcordiaProjectDiv>
                        </Ul>
                        
                    </DescriptionWrap>
                </ItemContentWrap>);
        case "pubs":
            return (<ItemContentWrap>
                      <DescriptionWrap>
                          <H1>Publications section coming soon...</H1>
                      </DescriptionWrap>
                  </ItemContentWrap>);
        case "work":
        return (<ItemContentWrap>
                  <DescriptionWrap>
                      <H1>Work section coming soon...</H1>
                  </DescriptionWrap>
              </ItemContentWrap>);
      }
    };

    return (
        <WidgetWrap>
            <HeaderWrap>
                <StyledUl>
                    <Button onClick={() => handleClick("dubs")}>
                    {activeTab === "dubs" ? (
                        <ActiveHeaderItem>Projects</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Projects</HeaderItem>
                        )}
                    </Button>
                    <Button onClick={() => handleClick("pubs")}>
                    {activeTab === "pubs" ? (
                        <ActiveHeaderItem>Publications</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Publications</HeaderItem>
                        )}
                    </Button>
                    <Button onClick={() => handleClick("work")}>
                    {activeTab === "work" ? (
                        <ActiveHeaderItem>Work</ActiveHeaderItem>
                        ) : (
                        <HeaderItem>Work</HeaderItem>
                        )}
                    </Button>
                </StyledUl>
            </HeaderWrap>
            <ContentWrap>{renderContent()}</ContentWrap>
        </WidgetWrap>
    )
}

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
margin: 10px;
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

`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 10px;
  border-bottom: 1px solid black;

`;

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 33%;
border: none;
background: none;
`

const StyledUl = styled.ul `
list-style-type: none;
display: flex;
width: 100%;
justify-content: space-evenly;
padding-left: 0px;

`

const HeaderItem = styled.li`
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

const ActiveHeaderItem = styled(HeaderItem)`

&:before {
width: 100%;
}
`;

const HeaderWrap = styled.div `
width: 100%;
`

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