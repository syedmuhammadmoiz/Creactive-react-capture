import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link> </h1>
             <ul> 
                 <li>
                 <Link id="logo" to="/">1. About Us</Link>
                 </li>
                 <li>
                 <Link id="logo" to="/work">2. Our Work</Link>
                 </li>
                 <li>
                 <Link id="logo" to="/contact">3. ContactUs</Link>
                 </li>
             </ul>
        </StyledNav>

    )
}

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
    color: white;
    text-decoration: none;
}
ul{
    display:flex;
    list-style:none;
}
#logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative; 
}
`;

export default Nav
