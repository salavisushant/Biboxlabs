import styled from "styled-components";
import "./nav.css";
import {Link} from 'react-router-dom'

const Div = styled.nav`
position:fixed;
display: flex;
padding:5px 10px;
width: 100%;
height:100px;
top: 0;
margin-left: 5%;
right: 0;
align-items: center;
background-color:#901045;;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 80px 60px rgba(0, 0, 0, 0.10)
`

export const Navbar = () => {
   let count = localStorage.getItem('count')
  return (
    <>
    <Div className="nav">
       <Link to=""> <img className="img1" src="https://user-images.githubusercontent.com/87421852/162576949-bc8894db-cbf4-48ed-9e93-f67de9b000aa.png" alt="logo" /></Link>
        <p style={{ color: '#FEFEFE' }}>Lets be Creative !!!</p>
        {/* <Link to="/bag" style={{ marginLeft: "20%",fontSize: "3vw",color: '#FEFEFE'}}>Clip Bag</Link> */}
        <Link style={{ marginLeft: "20%",display:"flex" }} to="/bag"><img src="https://img.icons8.com/ios-filled/50/ffffff/bag-front-view.png" alt="" /><p className="countP">{ count}</p></Link>
    </Div>          
    </>
  );
}