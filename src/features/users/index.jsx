import * as yup from "yup";
import { Box } from "grommet";
import { toast } from "react-toastify";

import AutoForm from "../../components/AutoForm";
import UserService from "../../services/user.service";
import CustomLink from "../../components/CustomLink"
import { useAuth } from "../../hooks-contexts/AuthContext";
import { useLanguage } from "../../hooks-contexts/LanguageContext";

function Login({ onLoginSuccess = () => { } }) {
    const userService = UserService();
    const { user, setUser } = useAuth();
    const { language } = useLanguage();

    const formFields = [
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
        password: yup.string().min(5).max(255).required()
    });

    return (
        <Box width="80%" style={{ minWidth: 200 }} margin="auto">
            <AutoForm
                validationSchema={validationSchema}
                title={<h2 style={{ width: "100%", textAlign: "left", padding: 10 }}>Login</h2>}
                initialValues={{ email: undefined, password: undefined }}
                onSubmit={data => {
                    return userService.authenticate(data)
                        .then(res => {
                            setUser(res.data)
                            toast.success("Logged in successfully")
                            onLoginSuccess();
                        })
                        .catch(error => toast.error(error?.response?.data?.error?.message))
                }}
                fields={formFields}
                submitButtonOptions={{ primary: true, style: { padding: 7, width: "100%", textAlign: "center" } }}
                buttonText="Login"
            />
            <CustomLink className="link" to="/sign-up">Not an account yet? Sign up!</CustomLink>
        </Box>
    );
}

export default Login;