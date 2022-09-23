import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = styled(motion.header)`
    position: fixed;
    display: flex;
    align-items: center;
    background-color: red;
    height: 60px;
    width: 100%;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 100px;
    width: 100%;
`;
const Col = styled.div`
    display: flex;
    align-items: center;
`;
const Items = styled.ul`
    display: flex;
    align-items: center;
`;
const Item = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0px 15px;
`;
const Circle = styled(motion.div)`
    position: absolute;
    bottom: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: black;
`;
const Svg = styled.svg``;

export default function NavBar() {
    const { pathname } = useRouter();
    const curLocation = pathname === "/" ? "home" : pathname.slice(1);
    const [curState, setCurState] = useState<string>();
    const menus = ["home", "about", "skill", "project"];
    const menusKr = ["홈", "소개", "기술", "프로젝트"];
    useEffect(() => {
        setCurState(curLocation);
    }, [pathname]);
    return (
        <Nav>
            <Row>
                <Col>
                    <Link href="/">
                        <Item>
                            <Svg width="32" viewBox="0 0 640 512">
                                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                            </Svg>
                            CHS
                        </Item>
                    </Link>
                </Col>
                <Col>
                    <Items>
                        {menus.map((menu, index) => (
                            <Link key={menu} href={menu === "home" ? "/" : menu}>
                                <Item onClick={() => setCurState(menu)}>
                                    {menusKr[index]}
                                    {curState === menu && <Circle layoutId="pointer" />}
                                </Item>
                            </Link>
                        ))}
                    </Items>
                </Col>
            </Row>
        </Nav>
    );
}
