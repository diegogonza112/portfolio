import SideBar from "../ConstantComponents/SideBar"
import styled from "styled-components"
// import Typewriter from 'typewriter-effect';
import '../Static/styles/home.css'
import RightSideBar from "../ConstantComponents/RightSideBar";
import BlogObject from './BlogObject';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

interface BlogPost {
    title: string;
    time: string;
    text: string;
}

export default function Blog(){

    const [items, setItems] = useState<BlogPost[]>([]);

    useEffect(() => {
        db.collection('posts').get().then((querySnapshot: any) => {
          const data = querySnapshot.docs.map((doc: { data: () => any; }) => doc.data());
          setItems(data);
        });
      }, []);

    return (
        <PageWrap>
            <SideBarWrapper>
                <SideBar/>
            </SideBarWrapper>
            <MainWrap>
                {items.map((item, index) => (
                    <BlogObject key={index} title={item.title} text={item.text} time={item.time}/>
                ))}
            </MainWrap>
            <RightSideWrap>
                <RightSideBar/>
            </RightSideWrap>
        </PageWrap>
    )
}

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
