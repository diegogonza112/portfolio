import GlobalStyles from "./Static/GlobalStyles";
import Header from "./ConstantComponents/Header";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog"


function App() {
  return (
    <AppWrap>
      <>
      <GlobalStyles/>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
      </>
    </AppWrap>
  );
}

const AppWrap = styled.div`
`

export default App;
