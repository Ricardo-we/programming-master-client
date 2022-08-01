import { useState } from "react";

import { Nav, Button, Heading, Box } from "grommet";
import { Menu, Close } from "grommet-icons"

import CustomLink from "./CustomLink";

function NavBar({ heading = "Programming Master", navStyle, children, ...props }) {
    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <>
            <style>{`
                .sidebar {
                    position: absolute;
                    left: -600px;
                    top: 0;
                    height: 100vh;
                    background-color: var(--white);
                    min-width: 250px;
                    width: 300px;
                    max-width: 400px;
                    z-index: 1000;
                    transition: 500ms;
                    padding: 10px;
                }

                .overlay {
                    position: absolute;
                    background-color: transparent;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: -100vw;
                }

                .overlay-open{
                    left: 0px;
                }

                .sidebar-open {
                    transition: 500ms;
                    left: 0px;
                }

                .nav-items-container{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-evenly;
                }

            `}</style>

            <style>{`
                .close-navbar-button {
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                
                `}</style>
            {/* 
                .sidebar-link:hover {
                    background-color: #1a1a1a92;
                }
                .sidebar-link {
                    width: 100%;
                    color: var(--black);
                    transition: 500ms;
                    font-size: var(--mid-text);
                } */}
            <Nav
                gap="small"
                align={navStyle?.align || "center"}
                justify={navStyle?.justify || "between"}
                width={navStyle?.width || "100%"}
                direction={navStyle?.direction || "row"}
                pad="20px"
                background={navStyle?.background || "black"}
            >
                <Heading style={{ fontSize: 22 }}>{heading}</Heading>
                <Button icon={<Menu />} onClick={() => setNavBarOpen(prev => !prev)} />
            </Nav>

            <div
                className={navBarOpen ? "overlay overlay-open" : "overlay"}
                onClick={(e) => {
                    e.stopPropagation();
                    setNavBarOpen(false)
                }}
            >
                <div
                    className={navBarOpen ? "sidebar sidebar-open" : "sidebar"}
                    onClick={(e) => {
                        e.stopPropagation()
                        setNavBarOpen(false)
                    }}
                >
                    <div className="nav-items-container" onClick={e => e.stopPropagation()}>
                        <Button
                            className="close-navbar-button"
                            icon={<Close size="17" />}
                            onClick={() => setNavBarOpen(false)}
                        />
                        <div className="nav-items-container" style={{ marginTop: 10 }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;