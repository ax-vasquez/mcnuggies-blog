import { ButtonData } from "./common"

type ModalField = {
    name: string
    required: boolean
}

export type ModalTextAreaData = ModalField & {
    /**
     * The placeholder string to display in the field if the user hasn't provided any input yet
     */
    placeholder: string
}

/**
 * General-purpose text input field data
 */
export type ModalTextInputData = ModalField & {
    /**
     * The placeholder string to display in the field if the user hasn't provided any input yet
     */
    placeholder: string
    /**
     * Whether or not to mask ("hide") the input, such as for passwords or tokens
     */
    mask: boolean
}

export type ModalRadioSelectData = ModalField & {
    /**
     * The default radio item to select; no default selection if unset
     */
    default?: string
    /**
     * The radio list items
     */
    [index: number]: string
}

export type ModalNumberSelectData = ModalField & {
    /**
     * The minimum acceptable number for this input field; no minimum if unset
     */
    minValue?: number
    /**
     * The maximum acceptable number for this input field; no maximum if unset
     */
    maxValue?: number
    /**
     * The default value to use if the user didn't explicitly-provide one
     */
    default?: number
}

/**
 * The shape of the data for any given modal in this site (they all use the same base component and this data shape)
 */
export type ModalData = {
    title: string
    /**
     * The data in a modal can be either a key-value set of configured fields, or a custom JSX element
     */
    data: {
        /**
         * The various fields in the body of the Modal
         * 
         * The field at index 0 will be at the top of the list of fields in the modal, followed
         * by index 1, then 2, etc. Use the index to order your modal fields how you like.
         */
        [index: number]: ModalTextAreaData | ModalTextInputData | ModalRadioSelectData | ModalNumberSelectData
    } | JSX.Element
    submitData: ButtonData
    cancelData: ButtonData
}
