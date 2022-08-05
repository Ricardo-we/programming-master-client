import { useState } from "react";
import { Accordion, AccordionPanel, Box, Heading } from "grommet";
import MaterialIcons from "react-google-material-icons";

function SimpleAccordion({ title, panels = [{ content: <></> }], ...props }) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <>

            <style>{`
                .simple-accordion {
                    width: 100%;
                    height: auto;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
                .simple-accordion-open {
                    height: "auto";
                }
            `}</style>

            <button
                onClick={() => setAccordionOpen(prev => !prev)}
                className={accordionOpen ? "simple-accordion simple-accordion-open" : "simple-accordion"}
                {...props.style}
            >
                <Box direction="row" align="center" justify="between" width="100%">
                    <Heading level={4} style={{ fontWeight: 300, paddingLeft: 5 }}>
                        {title}
                    </Heading>
                    <MaterialIcons style={{ backgroundColor: "red" }} icon="expand_more" />
                </Box>

                {accordionOpen && panels.map((panel, index) => (
                    <Box background="white" style={{ width: "100%", borderBottom: "1px solid #4a4646", }}>
                        {panel.content}
                    </Box>
                ))}
            </button>
        </>
    );
}


export default SimpleAccordion;