import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Seo from "./Seo";
import styled from "styled-components";

const Content = styled.div`
    padding-top: 60px;
`;
export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Seo />
            <NavBar />
            <Content>{children}</Content>
        </>
    );
}
