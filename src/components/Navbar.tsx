import { Link } from 'react-scroll';

/* interface NavbarProps {
  // Define any props you need for the navbar
} */

const Navbar: React.FC/* <NavbarProps> */ = () => {


  return (
<nav className="navbar">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </nav>
  );
};

export default Navbar;