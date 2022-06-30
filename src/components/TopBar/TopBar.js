import {Link} from"react-router-dom";
import "./TopBar.css"
const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft"> 
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>
      <i class= "topIcon fa-brands fa-pinterest-square"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
    
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>HOME</Link></li>
            
            <li className="topListItem"> <Link to="/" style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link></li>
            <li className="topListItem"> <Link to="/" style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link></li>
            <li className="topListItem"> <Link to="/write" style={{textDecoration:"none",color:"inherit"}}>WRITE</Link></li>
            <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
        
      </div>
      < div className="topRight">
        {
          user ?(
          <img
          className="topImg"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
         ):(
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login" style={{textDecoration:"none",color:"inherit"}}>
            LOGIN
             
          </Link></li>
          <li className="topListItem">
            <Link className="link" to="/register" style={{textDecoration:"none",color:"inherit"}}>
            REGISTER
             
          </Link></li>
          
          
          </ul>
         )
        }
     
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
     
      </div>
    </div>
  )
};

export default TopBar;
