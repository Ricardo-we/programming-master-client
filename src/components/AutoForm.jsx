
import { Formik } from "formik";
import { Form, Button, Text } from "grommet";

import FormFieldSelector from "./form-fields/FormFieldSelector";

function AutoForm({ initialValues = {}, validationSchema, onSubmit, fields, ...props }) {
    if (!initialValues) throw new Error("Initial values required! use {fieldname: undefined}")
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(true)
                const submiting = onSubmit && onSubmit(values)
                submiting && submiting.then ?
                    submiting.then(() => setSubmitting(false))
                    : setSubmitting(false)
            }}
        >
            {({ isSubmitting, handleChange, handleBlur, errors, submitForm }) => (
                <Form style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }} {...props.formOptions}>
                    {props.title || <h3>Form</h3>}
                    {fields?.map((field, index) => (
                        <div style={{ width: "100%" }}>
                            <FormFieldSelector
                                {...field}
                                key={index}
                                style={{ width: "100%" }}
                                onChange={handleChange}
                            />
                            <Text color="red">
                                {errors && field.name && errors[field.name]}
                            </Text>
                        </div>
                    ))}

                    <Button
                        variant="contained"
                        type="submit"
                        onClick={submitForm}
                        fullWidth
                        disabled={props.disableOnSubmit && isSubmitting}
                        {...props.submitButtonOptions}
                    >
                        {props.buttonText || "Submit"}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default AutoForm;