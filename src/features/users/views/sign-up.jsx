import * as yup from "yup";
import { Box } from "grommet";
import { toast } from "react-toastify";

import { useAuth } from "../../../hooks-contexts/AuthContext";
import AutoForm from "../../../components/AutoForm";
import UserService from "../../../services/user.service";

function SignUp() {
    const userRequests = UserService();
    const { user, setUser } = useAuth();

    const formFields = [
        {
            type: "text",
            label: "Full name",
            name: "fullname"
        },
        {
            type: "email",
            label: "Email",
            name: "email"
        },
        {
            type: "password",
            label: "Password",
            name: "password"
        }
    ]

    const validationSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().min(5).max(255).required(),
        fullname: yup.string().required().min(10)
    });

    const handleSubmit = (data) => {
        return userRequests.post(data)
            .then(res => {
                setUser(res.data)
            })
            .catch(error => toast.error(error.response?.data?.message || error.toString()));
    }

    return (
        <Box width="70%" style={{ minWidth: 200 }} margin="auto">
            <AutoForm
                validationSchema={validationSchema}
                submitButtonOptions={{ primary: true, style: { padding: 7, width: "100%", textAlign: "center" } }}
                title={<h2 style={{ width: "100%", textAlign: "left", padding: 10 }}>Sign up</h2>}
                buttonText="Sign up!"
                initialValues={{}}
                onSubmit={handleSubmit}
                fields={formFields}
            />
        </Box>
    );
}

export default SignUp;