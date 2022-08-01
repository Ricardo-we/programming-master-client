import { Box, Card, CardHeader, CardFooter } from "grommet";

const CustomCardBody = ({ children, header }) => {

    return (
        <>
            <CardHeader>
                {header}
            </CardHeader>
            <Box style={{ maxHeight: 200, overflowY: "auto" }}>
                {children}
            </Box>
        </>
    )
}

function CardGroup({ cardsData = [{ header: <></>, body: <></>, footer: <></> }], rawData = [{}] }) {

    return (
        <>
            <Box wrap gap="10px" justify="evenly" align="center" direction="row">
                {cardsData?.map((card, index) => (
                    <Card pad="10px" gap="5px" key={index} style={{ minWidth: 200, maxWidth: 350, height: "fit-content" }}>
                        {/* {card.header && (
                            <CardHeader>{card.header}</CardHeader>
                        )} */}
                        {card.body && (
                            <CustomCardBody header={card.header}>
                                {card.body}
                            </CustomCardBody>
                        )}
                        {card.footer && (
                            <CardFooter>{card.footer}</CardFooter>
                        )}
                    </Card>
                ))}
            </Box>
        </>
    );
}

export default CardGroup;