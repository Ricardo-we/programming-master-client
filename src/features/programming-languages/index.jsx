import { useState, useLayoutEffect } from "react";

import CustomLink from "../../components/CustomLink.jsx";
import CardGroup from "../../components/displayers/CardGroup.jsx";
import ProgrammingLanguagesService from "../../services/programming-languages.service.js";
import { toast } from "react-toastify"

function ProgrammingLanguages({ }) {
    const programmingLanguagesReq = ProgrammingLanguagesService();
    const [programmingLanguages, setProgrammingLanguages] = useState([]);

    useLayoutEffect(() => {
        programmingLanguagesReq.get_()
            .then(res => setProgrammingLanguages(res.data))
            .catch(error => toast.error(error.response?.data?.error?.message))
    }, [])

    return (
        <>
            <style>{`
            .card-link {
                color: var(--primary);
            }
        `}</style>
            <CardGroup
                cardsData={programmingLanguages?.map(language => ({
                    header: <strong>{language?.name}</strong>,
                    body: language?.description,
                    footer: (
                        <CustomLink className="card-link" to={`/programming-languages/guides/${language.id}`}>
                            Check guides
                        </CustomLink>
                    )
                })
                )}
            />
        </>
    );
}

export default ProgrammingLanguages;