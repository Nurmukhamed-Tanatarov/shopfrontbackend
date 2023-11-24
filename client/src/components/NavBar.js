import React, { useContext } from 'react';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite"
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';

const NavBar = observer(() =>{
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className='ml-4'>Выйти</Button>
                    </Nav>
                :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.serIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
      </Navbar>
      
    );
});

export default NavBar;