import { TextInput, FormField } from "grommet";

const fields = new Map()
fields.set("basic", (props) => (
    <FormField style={props.style} label={props.label}>
        <TextInput {...props} placeholder={props.label || props.placeholder} />
    </FormField>
))

function FormFieldSelector(props) {
    const SelectedField = fields.get(props.fieldType || "basic")

    return SelectedField ? <SelectedField {...props} /> : null;
}

export default FormFieldSelector;