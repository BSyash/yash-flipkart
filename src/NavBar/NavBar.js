import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, NavbarText
} from 'reactstrap';
import LogIn from '../LogIn/LogIn';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavBar = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['logInCookie']);

    const [isOpen, setIsOpen] = useState(false);
    const cartitem = useSelector(state => state.mobilecategory.cartitems)
    const cartCounter = useSelector(state => state.mobilecategory.cartItemsCounter)






    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='mainNav'>
            <Navbar color="primary" light expand="md" className='text-white'>
                <NavbarBrand href="/"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className='justify-content-between'>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" >flipcart</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>flipcart</NavLink>
                        </NavItem>
                    </Nav>

                    <Nav className='mr-auto' navbar >
                        <NavbarText> {cookies?.logInCookie?.email ? `@${cookies?.logInCookie?.email} ` : ''}</NavbarText>
                        <NavItem>
                            {
                                cookies?.logInCookie?.email ? <Button color='white' onClick={() => removeCookie('logInCookie')}>log out</Button> : <LogIn />
                            }
                        </NavItem>
                        <NavItem>

                            <Link to='/cartitems'><i class="fas fa-shopping-cart"></i></Link>
                            <span className='cart'>{cartitem?.length}</span>

                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
