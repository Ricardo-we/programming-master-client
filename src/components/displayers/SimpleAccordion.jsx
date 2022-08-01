import { Accordion, AccordionPanel, Box } from "grommet";

function SimpleAccordion({ panels = [{ label: "label", content: <></> }], ...props }) {
    return (
        <Accordion style={props.style}>
            {panels.map((panel, index) => (
                <AccordionPanel key={index} style={{ color: "black", }} label={panel.label}>
                    <Box pad="medium" background="white">
                        {panel.content}
                    </Box>
                </AccordionPanel>
            ))}
        </Accordion>
    );
}

export default SimpleAccordion;