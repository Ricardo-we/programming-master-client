import { Routes, Route } from "react-router-dom";

import BaseLayout from "../../components/layouts";
// VIEWS
import Guide from "../../features/guides";
import ProgrammingLanguages from "../../features/programming-languages"
import Tutorial from "../../features/tutorials";
import ProgrammingLanguageGuides from "../../features/programming-languages/views/ProgrammingLanguageGuides";
import Login from "../../features/users";
import SignUp from "../../features/users/views/sign-up";

const programmingLanguagesRoute = "programming-languages"

function BaseRouter() {
    return (
        <BaseLayout>
            <Routes>
                <Route
                    path={programmingLanguagesRoute}
                    element={<ProgrammingLanguages />}
                />
                <Route
                    path={`${programmingLanguagesRoute}/guides/:programmingLanguageId`}
                    element={<ProgrammingLanguageGuides />}
                />
                <Route
                    path={`${programmingLanguagesRoute}/:programmingLanguageId/guides/:id`}
                    element={<Guide />}
                />
                <Route path={`guides/tutorials/:id`} element={<Tutorial />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BaseLayout>
    );
}

export default BaseRouter;