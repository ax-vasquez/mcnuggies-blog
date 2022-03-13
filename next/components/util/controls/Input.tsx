import { FormControl, InputGroup } from "react-bootstrap"

interface InputProps {
    /**
     * The string to use in the first segment of the input field; if unset, no "pre" segment
     * will exist on the field
     */
    preSegment?: string
    /**
     * The string to use in the last segment of the input field; if unset, no "post" segment
     * will exist on the field
     */
    postSegment?: string
    placeholder?: string
    ariaLabel: string
    ariaDescribedBy: string
}

const Input = ({
    preSegment,
    postSegment,
    placeholder,
    ariaLabel,
    ariaDescribedBy,
}: InputProps) => {
    return (
	<InputGroup>
		{preSegment ?
			<InputGroup.Text>{preSegment}</InputGroup.Text>
            :
                null
            }
		<FormControl
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedBy}
            />
		{postSegment ?
			<InputGroup.Text>{postSegment}</InputGroup.Text>
            :
                null
            }
	</InputGroup>
    )
}

export default Input