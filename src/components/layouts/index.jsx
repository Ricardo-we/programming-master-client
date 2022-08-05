import { useState, useLayoutEffect } from "react";
import { Grommet, Heading } from "grommet";

import PageHead from "../../components/utils/Head";
import CustomLink from "../CustomLink";
import NavBar from "../NavBar";
import SimpleAccordion from "../displayers/SimpleAccordion";
import ProgrammingLanguagesService from "../../services/programming-languages.service";
import { ToastContainer } from "react-toastify";

function BaseLayout({ children }) {
    const programmingLanguagesReq = ProgrammingLanguagesService();
    const [programmingLanguages, setProgrammingLanguages] = useState([]);

    useLayoutEffect(() => {
        programmingLanguagesReq
            .get_(undefined, {
                params: { language_code: window?.navigator?.languages[1] },
            })
            .then((res) => setProgrammingLanguages(res.data));
    }, [])

    return (
        <Grommet style={{ position: "relative" }} full>
            <style>{`
                .sidebar-link {
                    padding: 10px;
                    color: black;
                }

                .programming-lang-link {
                    transition: 500ms;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                }

                .programming-lang-link:hover {
                    background-color: var(--primary-translucid);
                }
            `}</style>
            <ToastContainer />
            <PageHead title="Programming master" />
            <NavBar>
                <Heading
                    level="3"
                    textAlign="left"
                    style={{ marginTop: "10px", paddingBlock: 10 }}
                >
                    Programming master
                </Heading>
                <CustomLink to="/home" className="sidebar-link">
                    Home
                </CustomLink>
                <SimpleAccordion
                    style={{ width: "100%", padding: "6px" }}
                    title="Programming Languages"
                    panels={
                        programmingLanguages?.map(
                            (programmingLang) => ({
                                content: (
                                    <CustomLink
                                        to={
                                            "/programming-languages/guides/" +
                                            programmingLang?.id
                                        }
                                        className="programming-lang-link"
                                    >
                                        {programmingLang?.name}
                                    </CustomLink>
                                )
                            }),
                        )
                    }
                />
                <CustomLink to="/login" className="sidebar-link">
                    Sign in
                </CustomLink>
            </NavBar>

            {children}
        </Grommet>
    );
}

export default BaseLayout;