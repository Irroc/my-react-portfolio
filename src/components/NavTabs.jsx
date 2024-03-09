import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs navBar">
      <li className="nav-item navItems">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active navText' : 'nav-link navText'}
        >
          About me
        </Link>
      </li>
      <li className="nav-item navItems">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active navText' : 'nav-link navText'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item navItems">
        <Link
          to="/ContactMe"
          className={currentPage === '/ContactMe' ? 'nav-link active navText' : 'nav-link navText'}
        >
          Contact Me
        </Link>
      </li>
      <li className="nav-item navItems">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active navText' : 'nav-link navText'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
