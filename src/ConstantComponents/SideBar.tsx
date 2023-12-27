import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { textColor } from "../Static/GlobalStyles";

const SideBar = () => {
    return (
    <SideWrap>
        <NavWrap>
            <Navul>
                <BorderLeft/>
                <IconContext.Provider value={{ size: '30px'}}>
                    <NavItem>
                        <a  target="_blank" rel="noreferrer" href="https://github.com/diegogonza112"><FaGithubAlt/></a>
                    </NavItem>
                    <NavItem>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/diegoo.gonza/"><FaInstagram/></a>
                    </NavItem>
                    <NavItem>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/diego-gonza/"><FaLinkedin/></a>
                    </NavItem>
                </IconContext.Provider>
                <BorderRight/>
            </Navul>
        </NavWrap>
    </SideWrap>
    )
}

const BorderLeft = styled.div`
height: 150px;
border-left: 1px solid ${textColor};
/* border-bottom: 3px dashed #fff; */
`

const BorderRight = styled.div`
height: 150px;
border-right: 1px solid ${textColor};
/* border-top: 3px dashed #fff; */
`

const Navul = styled.ul`
display: flex;
flex-direction: column;
padding-left:0px;

`

const NavItem = styled.li`
color: #fff;
text-decoration: none;
list-style-type: none;
margin: 30px;
/* border-bottom: 1px solid ${textColor}; */

&:nth-child(2) {
    border-top: 1px solid ${textColor};
}

&:nth-child(3) {

}
&:nth-child(4) {
    border-bottom: 1px solid ${textColor};
}

`

const NavWrap = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
position: sticky;
`

const SideWrap = styled.div`
height: calc(100vh - 250px);
width: 100px;
display: flex;
flex-direction: column;
margin: 10px 30px;
position: fixed;
  /* top: 0;
  left: 0; */



`

export default SideBar;