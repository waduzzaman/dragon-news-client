import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RiteSideNav/RightSideNav';

const Main = () =>
{
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* the className='d-none d-lg-block' will not show on the small device  */}
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>

            

        </div>

    );
};

export default Main;