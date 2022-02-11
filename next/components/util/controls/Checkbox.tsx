import { Form } from "react-bootstrap"

interface CheckboxProps {
    id: string
    label?: string
    checked: boolean
    onClick: (e: any) => void
}

const Checkbox = ({
    id,
    label,
    checked,
    onClick
}: CheckboxProps) => {
    return (
        <Form.Check 
            type={`checkbox`}
            id={id}
            label={label}
            checked={checked}
            onClick={onClick}
        />
    )
}

export default Checkbox