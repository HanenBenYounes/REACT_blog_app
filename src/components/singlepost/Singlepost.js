import './singlepost.css';
const Singlepost = () => {
  return (
    <div className='singlepost'>
      <div className="singlePostWrapper">
        <img
        src="https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="singlePostImg"/>
       <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
       <div className="singlePostEdit">
        <i className="singlePostIcon far fa-edit"></i>
        <i className="singlePostIcon far fa-trash-alt"></i>
        </div></h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
            Author: <b> Safak</b></span>
            <span className="singlePostDate">
                1hour ago
            </span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
    
      </div>
    </div>
  )
}

export default Singlepost;
