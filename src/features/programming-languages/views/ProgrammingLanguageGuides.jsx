import { useParams } from "react-router-dom";

import { Heading, Box, Text } from "grommet";

import { useLanguage } from "../../../hooks-contexts/LanguageContext";
import ProgrammingLanguagesService from "../../../services/programming-languages.service";
import CustomLink from "../../../components/CustomLink";
import useService from "../../../hooks-contexts/useService";

function ProgrammingLanguageGuides({ }) {
    const { programmingLanguageId } = useParams();
    const language = useLanguage().language?.jsonContent;
    const request = ProgrammingLanguagesService();
    const [guides,] = useService(request.getProgrammingLanguageGuides, { params_payload: programmingLanguageId, });

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
                    <CustomLink className="custom-link" to={`/programming-languages/${programmingLanguageId}/guides/${guide.id}`}>
                        <Box style={{ maxWidth: 300 }} direction="column">
                            <Heading level="4">{guide.title}</Heading>
                            <Text>{guide.introduction}</Text>
                            {guide.pro_only ?
                                <strong className="pro-label">{language?.labels?.pro || "Pro"}</strong>
                                :
                                <strong className="free-label">{language?.labels?.free || "Free"}</strong>
                            }
                        </Box>
                    </CustomLink>
                ))}
            </Box>
        </>
    );
}

export default ProgrammingLanguageGuides;