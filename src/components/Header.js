import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
    // <header>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav">
    //         {/* <li className="nav-item">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li> */}
    //         <li className="nav-item">
    //           <Link to="/posts" className="nav-link">
    //             Posts
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/users" className="nav-link">
    //             Users
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Header;
