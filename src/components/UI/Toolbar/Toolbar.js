import React, {Fragment} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledButtonDropdown
} from "reactstrap";
import { NavLink as RouterNavLink } from 'react-router-dom';
import {apiURL} from "../../../constants";

const logOut = () => {
    localStorage.clear();
    window.location.reload();
}

const Toolbar = ({user}) => {
    let avatar;
    if (user && user.avatar) {
        avatar = apiURL + '/uploads/' + user.avatar;
    }
    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand tag={RouterNavLink} to='/'>Shop</NavbarBrand>
                <Nav className='ml-auto'>
                    {user ? (
                        <Fragment>
                            { user.role === 'admin' &&
                            (<Fragment>
                                <NavItem>
                                    <NavLink tag={RouterNavLink} to="/cocktails/new" exact>Add cocktail</NavLink>
                                </NavItem>
                            </Fragment>) }
                            <UncontrolledButtonDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    { avatar && <img src={avatar} style={{width: '25px', height: '25px'}} className="img-thumbnail" alt="user"/> }
                                    Hello, {user.displayName}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Show Profile</DropdownItem>
                                    <DropdownItem onClick={()=>logOut()}>Log out</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
                            </NavItem>
                        </Fragment>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Toolbar;