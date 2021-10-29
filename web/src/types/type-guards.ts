import { 
    TextInputFieldConfig ,
    TextAreaFieldConfig,
    RadioSelectFieldConfig,
    NumberSelectFieldConfig,
    ButtonGridFieldConfig
} from './common'

type FieldConfig = TextAreaFieldConfig | TextInputFieldConfig | RadioSelectFieldConfig | NumberSelectFieldConfig | ButtonGridFieldConfig

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
export function isJSXElement (object: any | JSX.Element): object is JSX.Element {
    return (object as JSX.Element).props !== undefined
}

export function isTextInput (field: FieldConfig): field is TextInputFieldConfig {
    return (field as TextInputFieldConfig).onChange !== undefined
}

// TODO: Differentiate the input and textarea types so these type guards make sense
export function isTextArea (field: FieldConfig): field is TextAreaFieldConfig {
    return (field as TextAreaFieldConfig).onChange !== undefined
}

export function isRadioSelect (field: FieldConfig ): field is RadioSelectFieldConfig {
    return (field as RadioSelectFieldConfig).items !== undefined
}

export function isNumberSelect (field: FieldConfig ): field is NumberSelectFieldConfig {
    return (field as NumberSelectFieldConfig).maxValue !== undefined && (field as NumberSelectFieldConfig).minValue !== undefined
}

export function isButtonGrid (field: FieldConfig ): field is ButtonGridFieldConfig {
    return (field as ButtonGridFieldConfig).buttons !== undefined
}
