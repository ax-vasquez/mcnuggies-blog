import Head from 'next/head'
import { useState } from 'react'
import TitledCard from "../layout/TitledCard"
import Checkbox from '../util/controls/Checkbox'
import Radio from '../util/controls/Radio'
import LabeledControl from '../util/fields/LabeledControl'
import SectionHeader from "./common/SectionHeader"

const DemoControls = ({}) => {
    const [radioSelected, setRadioSelected] = useState(false)
    const [checkboxSelected, setCheckboxSelected] = useState(false)
    const [inputText, setInputText] = useState(``)

    const onRadioChange = (e: any) => {
        setRadioSelected(!radioSelected)
    }

    const onCheckboxChange = (e: any) => {
        setCheckboxSelected(!checkboxSelected)
    }

    const onInputChange = (e: any) => {
        setInputText(e.target.value)
    }

    return (
        <TitledCard title="Controls">
            <SectionHeader sectionTitle="Radio Control"/>
            <LabeledControl 
                label='Label Right'
                labelPos='right'
                component={(
                    <Radio 
                        id={`label-right-radio`}
                        checked={radioSelected}
                        onClick={onRadioChange}
                    />
                )}
            />
            <LabeledControl 
                label='Label Left'
                labelPos='left'
                component={(
                    <Radio 
                        id={`label-left-radio`}
                        checked={radioSelected}
                        onClick={onRadioChange}
                    />
                
                )}
            />
            <SectionHeader sectionTitle="Check box"/>
            <LabeledControl 
                label='Label Right'
                labelPos='right'
                component={(
                    <Checkbox 
                        id={`label-right-checkbox`}
                        checked={checkboxSelected}
                        onClick={onCheckboxChange}
                    />
                )}
            />
            <LabeledControl 
                label='Label Left'
                labelPos='left'
                component={(
                    <Checkbox 
                        id={`label-left-checkbox`}
                        checked={checkboxSelected}
                        onClick={onCheckboxChange}
                    />
                )}
            />
            <SectionHeader sectionTitle="Input"/>
            <input placeholder='Input placeholder' type="text" value={inputText} onChange={onInputChange}/>
        </TitledCard>
    )
}

export default DemoControls
