import { useState, useLayoutEffect, useCallback } from "react";
import { Box, Heading } from "grommet";
import { useParams, useNavigate } from "react-router-dom";

import "@uiw/react-textarea-code-editor/dist.css";

// import CardGroup from "../../../components/displayers/CardGroup";
import CodeEditor from "@uiw/react-textarea-code-editor";
import NavBar from "../../components/NavBar";
import TutorialService from "../../services/tutorial.service";
import GuidesService from "../../services/guides.service";
import MdViewer from "../../components/displayers/MdViewer";
import CustomLink from "../../components/CustomLink";
import { toast } from "react-toastify";


function Tutorial() {
    const { id } = useParams();
    const navigate = useNavigate();
    const tutorialsRequest = TutorialService();
    const guidesRequest = GuidesService();

    const [code, setCode] = useState("");
    const [tutorial, setTutorial] = useState({});
    const [guideTutorials, setGuideTutorials] = useState([]);

    const programmingLanguageInfo = guideTutorials?.guide?.programming_language;

    useLayoutEffect(() => {
        getGuideAndTutorials()
    }, [id])

    const getGuideAndTutorials = useCallback(() => {
        tutorialsRequest.get_(id)
            .then(tutorial => {
                setTutorial(tutorial.data)
                return guidesRequest.getGuideTutorials(tutorial?.data?.guide.id);
            })
            .then(guideTutorials_ => setGuideTutorials(guideTutorials_.data))
            .catch(error => {
                toast.error(error.response?.data?.error.message)
                navigate(-1)
            })

    }, [id])


    return (
        <Box direction="column" align="center" justify="evenly">
            <style>{`
            .tutorial-link {
                color: var(--black);
                padding: 15px;
                transition: 500ms;
                width: 100%;
            }
            .tutorial-link:hover {
                color: var(--light-gray);
            }
        `}</style>
            <NavBar
                heading={tutorial.guide?.title}
                navStyle={{
                    width: "95%",
                    margin: "auto",
                    background: "white",
                    align: "center",
                    justify: "end",
                    direction: "row-reverse",
                    position: "sticky"
                }}
            >
                <Heading level="3">{tutorial.guide?.title}</Heading>
                {guideTutorials.tutorials && guideTutorials.tutorials?.map((tutorial, index) => (
                    <CustomLink className="tutorial-link" key={index} to={`/guides/tutorials/${tutorial.id}`}>
                        {tutorial.title || "Tutorial " + index + 1}
                    </CustomLink>
                ))}
            </NavBar>

            <Box width="85%" margin="auto">
                <Heading level="4">{tutorial.tutorial?.title}</Heading>
                <MdViewer programmingLanguage={programmingLanguageInfo?.extension_name} >
                    {tutorial?.tutorial?.md_body || "## Hello"}
                </MdViewer>

                <Heading level="4">Try it</Heading>
                <CodeEditor
                    value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        width: "100%",
                        minHeight: "150px",
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </Box>
        </Box>
    );
}

export default Tutorial;