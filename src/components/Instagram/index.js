import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import instagramSvg from '../../assets/images/instagram.svg'

// styled components
const Container = styled.a`
  height: 70px;
  width: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${props => props.theme.bg};
  background-color: ${props => props.theme.bg};
  padding-bottom: 2px;

  #instagram {
    stroke: ${props => props.theme.fg};
  }

  &:hover {
    border-left: 1px solid ${props => props.theme.fg};
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.fg};

    #instagram {
      stroke: ${props => props.theme.bg};
    }
  }

`

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});


// component
export default function Base(props) {
  return (
    // <ThemeProvider theme={invertTheme}>
      <Container target="_blank" href="https://www.instagram.com/ysdnthenext/">
        <svg width="30px" height="29px" viewBox="0 0 30 30" version="1.1" shapeRendering="geometricPrecision">
            <g id="Home---Scroll-State" stroke="none" strokeWidth="1.1" fill="none" fillRule="evenodd" transform="translate(-1373.000000, -263.000000)">
                <g id="instagram" transform="translate(1372.000000, 263.000000)">
                    <rect id="Rectangle" x="1.4" y="1" width="29" height="29" rx="5"></rect>
                    <circle id="Oval" cx="15.8" cy="15.5" r="8"></circle>
                    <circle id="Oval-Copy" cx="24.9" cy="5.5" r="1.5"></circle>
                </g>
            </g>
        </svg>
      </Container>
    // </ThemeProvider>
  )
}
