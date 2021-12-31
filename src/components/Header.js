import styled from "styled-components";
import {Link} from 'react-router-dom';
import {auth, provider} from "../firebase";

const Header = () => {

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((res)=>{
            console.log(res);
        }).catch(err => err.message);
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt=""/>
            </Logo>
            <NavMenu>
                <Link to="/home">
                    <img src="/images/home-icon.svg" alt=""/>
                    <span>HOME</span>
                </Link>
                <Link to="/search">
                    <img src="/images/search-icon.svg" alt=""/>
                    <span>SEARCH</span>
                </Link>
                <Link to="/watch-list">
                    <img src="/images/watchlist-icon.svg" alt=""/>
                    <span>WATCHLIST</span>
                </Link>
                <Link to="/originals">
                    <img src="/images/original-icon.svg" alt=""/>
                    <span>ORIGINALS</span>
                </Link>
                <Link to="/movies">
                    <img src="/images/movie-icon.svg" alt=""/>
                    <span>MOVIES</span>
                </Link>
                <Link to="/series">
                    <img src="/images/series-icon.svg" alt=""/>
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            <Link to="/login" className="login" onClick={handleAuth}>
                LOGIN
            </Link>
        </Nav>
    )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  background: #090b13;
  
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border: 2px solid #fff;
    border-radius: 5px;
    letter-spacing: 1.5px;
    
    &:hover{
      background: #fff;
      color: #000;
    }
  }
`

const Logo = styled.div`
  width: 80px;

  img {
    width: 100%;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin-left: 25px;
  margin-right: auto;
  
  a{
    position: relative;
    display: flex;
    
    & + a{
      margin-left: 20px;
    }
    
    span{
      padding-left: 5px;
      letter-spacing: .13em;
    }
    
    img{
      width: 20px;
    }
  }
  
  @media (max-width: 768px){
    display: none;
  }
`



export default Header;