import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">MyApp</NavbarBrand>
			<Nav className="mr-auto" navbar>
				<NavItem className="mr-3">
					<Link to="/" className="nav-link">
						Dashboard
					</Link>
				</NavItem>
				<NavItem className="mr-3">
					<Link to="/product" className="nav-link">
						Products
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/cart" className="nav-link">
						Cart
					</Link>
				</NavItem>
			</Nav>
			<Link to="/cart" className="text-dark text-decoration-none">
				<div className="d-flex justify-content-center align-items-center">
					<FontAwesomeIcon icon={faShoppingCart} />
					<h3 className="mx-2">1</h3>
				</div>
			</Link>
		</Navbar>
	);
};

export default Header;
