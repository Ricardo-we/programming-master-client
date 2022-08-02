import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { Heading, Box, Text } from "grommet";

import ProgrammingLanguagesService from "../../../services/programming-languages.service";
import CustomLink from "../../../components/CustomLink";
import useService from "../../../hooks-contexts/useService";

function ProgrammingLanguageGuides({ }) {
    const { programmingLanguageId } = useParams();
    const request = ProgrammingLanguagesService();
    const [guides, setGuides] = useService(request.getProgrammingLanguageGuides, { params: programmingLanguageId });

    // useLayoutEffect(() => {

    //     if (errors?.message) toast.error(errors.message)
    // }, [errors])


    return (
        <>
            <Heading level="1" margin="auto">{guides?.programming_language?.name}</Heading>
            <style>{`
                .custom-link{
                    color: black;
                    padding: 10px;
                    margin: 10px;
                    transition: 500ms;
                }
                .custom-link:hover {
                    background-color: var(--primary-translucid);
                }
                .pro-label {
                    color: var(--info);
                }
                .free-label {
                    color: var(--success);
                }
            `}</style>
            <Box wrap width="90%" style={{ minWidth: 200 }} margin="auto" direction="row" justify="evenly">
                {guides?.guides?.map(guide => (
                    <CustomLink className="custom-link" to={`/guides/${guide.id}`}>
                        <Box style={{ maxWidth: 300 }} direction="column">
                            <Heading level="4">{guide.title}</Heading>
                            <Text>{guide.introduction}</Text>
                            {guide.pro_only ?
                                <strong className="pro-label">Pro only</strong>
                                :
                                <strong className="free-label">Free</strong>
                            }
                        </Box>
                    </CustomLink>
                ))}
            </Box>
        </>
    );
}

export default ProgrammingLanguageGuides;