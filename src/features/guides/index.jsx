import { useLayoutEffect, useState } from "react";
import { Heading, Box } from "grommet";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import GuidesService from "../../services/guides.service";
import MdViewer from "../../components/displayers/MdViewer";
import CustomLink from "../../components/CustomLink";
import { useAuth } from "../../hooks-contexts/AuthContext";
import ModalLogin from "../users/components/ModalLogin";

function Guide({ }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth()

    const [modalVisible, setModalVisible] = useState(false);
    const [guide, setGuides] = useState({});
    const [tutorials, setTutorials] = useState([]);
    const guidesRequest = GuidesService();

    useLayoutEffect(() => {
        Promise.all([
            guidesRequest.get_(id),
            guidesRequest.getGuideTutorials(id)
        ])
            .then(results => {
                setGuides(results[0].data);
                setTutorials(results[1].data);
            })
            .catch(error => {
                toast.error(error?.response?.data?.error?.message)
                if (!user.token)
                    return setModalVisible(true)
                return navigate("/programming-languages/guides")

            })

    }, []);


    return (
        <>
            <ModalLogin
                visible={modalVisible}
                handleClose={() => {
                    setModalVisible(false)
                    navigate(-1)
                }}
            />
            <style>{`
            .tutorial-link {
                color: var(--primary);
            }
        `}</style>

            <Box margin="auto" width="80%">
                <Heading style={{ marginBottom: 10 }} level="2">{guide.title}</Heading>
                <MdViewer programmingLanguage={guide?.programming_language?.extension_name} >
                    {guide?.guide_contents_md || "# Not contents yet..."}
                </MdViewer>

                <Heading style={{ marginTop: 30 }} level="3">Tutorials</Heading>
                <Box width="98%" margin="auto">
                    {tutorials?.tutorials?.map((tutorial, index) => (
                        <CustomLink className="tutorial-link" to={`/guides/tutorials/${tutorial.id}`}>
                            {tutorial.title || "Tutorial " + index + 1}
                        </CustomLink>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Guide;