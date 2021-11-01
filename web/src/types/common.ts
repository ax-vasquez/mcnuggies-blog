type GenericField = {
    name: string
    required: boolean
}

export type TextAreaFieldConfig = GenericField & {
    /**
     * The placeholder string to display in the field if the user hasn't provided any input yet
     */
    placeholder: string
    /**
     * The input handler
     */
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * General-purpose text input field data
 */
export type TextInputFieldConfig = GenericField & {
    /**
     * The value stored in the input (if any)
     */
    value: string
    /**
     * The placeholder string to display in the field if the user hasn't provided any input yet
     */
    placeholder: string
    /**
     * Whether or not to mask ("hide") the input, such as for passwords or tokens
     */
    mask: boolean
    /**
     * The input handler
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type RadioSelectFieldConfig = GenericField & {
    /**
     * The default radio item to select; no default selection if unset
     */
    default?: string
    /**
     * The radio list items
     */
    items: {
        [index: number]: string
    }
}

export type ButtonGridFieldConfig = GenericField & {
    buttons: {
        [key: string]: ButtonConfig & {
            active: boolean
        }
    }
}

export type NumberSelectFieldConfig = GenericField & {
    /**
     * The minimum acceptable number for this input field; no minimum if unset
     */
    minValue: number
    /**
     * The maximum acceptable number for this input field; no maximum if unset
     */
    maxValue: number
    /**
     * The default value to use if the user didn't explicitly-provide one
     */
    default?: number
}

export type ButtonConfig = {
    label: string
    onClick: () => void
}
