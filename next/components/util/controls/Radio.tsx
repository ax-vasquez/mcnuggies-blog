import { Form } from "react-bootstrap"

interface RadioProps {
    id: string
    label?: string
    checked: boolean
    onClick: (e: any) => void
}

const Radio = ({
    id,
    label,
    checked,
    onClick
}: RadioProps) => {
    return (
        <Form.Check 
            type={`radio`}
            id={id}
            label={label}
            checked={checked}
            onClick={onClick}
        />
    )
}

export default Radio
