
interface LabeledFieldProps {
    label: string
    labelPos: 'left' | 'right'
    component: any
}

const LabeledControl = ({ label, labelPos, component }: LabeledFieldProps) => {
    return (
        <div className={`control-labeled-${labelPos}`}>
            {labelPos === 'right' ?
                (
                    <>
                        {component}
                        <p>{label}</p>
                    </>
                )
            :
                (
                    <>
                        <p>{label}</p>
                        {component}
                    </>
                )
            }
            
        </div>
    )
}

export default LabeledControl
