import SideBar from "../ConstantComponents/SideBar"
import styled from "styled-components"
// import Typewriter from 'typewriter-effect';
import '../Static/styles/home.css'
import RightSideBar from "../ConstantComponents/RightSideBar";
import { textColor } from "../Static/GlobalStyles";
import BlogObject from './BlogObject';


const title = "First Commit..."
const time = "Jan 2nd"
const body = "Hello World!"

export default function Blog(){

    return (
        <PageWrap>
            <SideBarWrapper>
                <SideBar/>
            </SideBarWrapper>
            <MainWrap>
                <BlogObject title={title} text={body} time={time}/>
            </MainWrap>
            <RightSideWrap>
                <RightSideBar/>
            </RightSideWrap>
        </PageWrap>
    )
}

const TypeWrap = styled.div`
height: calc(100vh - 150px);
border-bottom: 1px solid ${textColor};
`

const RightSideWrap = styled.div`
width: 100px;
display: flex;
margin: 10px 30px;

@media (max-width: 1200px) {
    display: none;
  }

`

const SideBarWrapper = styled.div`
width: 175px;
margin: 10px 30px;
display: flex;
justify-content:center;

@media (max-width: 768px) {
    display: none;
}
`

const MainWrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const PageWrap = styled.div`
display: flex;
`
