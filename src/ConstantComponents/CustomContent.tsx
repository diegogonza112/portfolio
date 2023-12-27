import { Link } from 'react-scroll';
import { IconContext } from 'react-icons';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import styled from 'styled-components';
import '../Static/styles/customComponent.css'

const CustomContent = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">
        <span className="custom-bracket">&#123;</span>
        <br />
        <span className="custom-key">firstName:</span>{' '}
        <span className="custom-value">"Diego"</span>,
        <br />
        <span className="custom-key">lastName:</span>{' '}
        <span className="custom-value">"Gonzalez Delgado"</span>,
        <br />
        <span className="custom-key">status:</span>{' '}
        <span className="custom-value">418</span>,
        <br />
        <StyledLink to="section1" smooth={true} duration={500}>
          <IconContext.Provider
            value={{ className: 'arrow-icon' }}
          >
            <IoMdArrowDroprightCircle />
          </IconContext.Provider>
        </StyledLink>
        <span className="custom-key-no-margin">about:</span>{' '}
        <span className="custom-value">
          ["Full-Stack Web Developer"],
        </span>
        <br />
        <StyledLink to="section2" smooth={true} duration={500}>
          <IconContext.Provider
            value={{ className: 'arrow-icon' }}
          >
            <IoMdArrowDroprightCircle />
          </IconContext.Provider>
        </StyledLink>
        <span className="custom-key-no-margin">experience:</span>{' '}
        <span className="custom-value">
          ["JavaScript", "React", "Node.js", "CSS", "TypeScript", "Python"],
        </span>
        <br />
        <StyledLink to="section3" smooth={true} duration={500}>
          <IconContext.Provider
            value={{ className: 'arrow-icon' }}
          >
            <IoMdArrowDroprightCircle />
          </IconContext.Provider>
        </StyledLink>
        <span className="custom-key-no-margin">contact:</span>{' '}
        <span className="custom-value">
          "Lets connect!",
        </span>
        <br />
        <span className="custom-bracket">&#125;</span>
      </h1>
    </div>

  );
};

const StyledLink = styled(Link)`
cursor: pointer;
`

export default CustomContent;