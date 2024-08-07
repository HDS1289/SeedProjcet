import {Row, Col, Nav} from 'react-bootstrap';
import {FaRegClipboard} from "react-icons/fa6";
import {IoCalendarNumberOutline} from "react-icons/io5";
import {TbClipboardText} from "react-icons/tb";
import {Gear, House, DoorOpen, Bank, Bell, Sticky, ChevronRight} from 'react-bootstrap-icons';
import {useLocation, Link} from 'react-router-dom';
import { useState } from 'react';

const SideBar = ({toggleWelcomeMessage}) => {
    const location = useLocation()
    
    const navItems = [
        {path: '/adminMain', icon: <Bank className='float-start mt-1' />, label: '관리자 메인'},
        {path: '/adminUser', icon: <Bell className='float-start mt-1' />, label: '회원'},
        {path: '/adminRestaurant', icon: <Sticky className='float-start mt-1' />, label: '식당'},
        {path: '/adminReservation', icon: <TbClipboardText className='float-start mt-1' />, label: '예약'},
        {path: '/adminAdvertisement', icon: <IoCalendarNumberOutline className='float-start mt-1' />, label: '광고'},
        {path: '/adminAnswer', icon: <FaRegClipboard className='float-start mt-1' />, label: '답변'},
    ]

    let sessionStorage = window.sessionStorage;

    return (
        <div id='sidebar-wrapper' className='border border-dark text-center '>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                    <Gear className='gearIcon mt-5 '/>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='d-flex align-items-center justify-content-center'>
                    <a className='link-dark' href='/adminMain'>
                        <House className='me-4 fs-5'/>
                    </a>
                    <a className='link-dark' href='/userLogin'>
                        <DoorOpen className='fs-5' onClick={()=> {
                                    sessionStorage.clear();
                                }}
                        />
                    </a>
                </Col>
            </Row>
            <div className='mt-4'><hr /></div>
            <Nav className='flex-column'>
                {navItems.map((item, index) => (
                    <Nav.Item className="p-2" key={index}>
                        {item.icon}
                        <Link className='float-start ms-3 link-secondary' to={item.path}>{item.label}</Link>
                        {location.pathname.startsWith(item.path) && <ChevronRight className='float-end' />}
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
}

export default SideBar;