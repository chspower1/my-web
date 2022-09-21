import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

const Nav = styled(motion.header)`
    position: fixed;
    background-color: red;
    height: 60px;
    width: 100%;
`;
const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 100px;
`;
const Col = styled.div``;
const Items = styled.ul`
    display: flex;
    gap: 30px;
`;
const Item = styled.li``;
const Svg = styled.svg``;

export default function NavBar() {
    const { scrollY } = useScroll();
    useEffect(() => {
        scrollY.onChange(() => console.log(scrollY.get()));
    }, [scrollY.get()]);
    return (
        <Nav>
            <Row>
                <Col>
                    <Svg width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </Svg>
                </Col>
                <Col>
                    <Items>
                        <Item>홈</Item>
                        <Item>소개</Item>
                        <Item>기술</Item>
                        <Item>프로젝트</Item>
                    </Items>
                </Col>
                <Col></Col>
            </Row>
        </Nav>
    );
}
