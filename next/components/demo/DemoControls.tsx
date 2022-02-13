import TitledCard from "../layout/TitledCard"
import SectionHeader from "./common/SectionHeader"

const DemoControls = ({}) => {
    return (
        <TitledCard title="Controls">
            <SectionHeader sectionTitle="Radio Control"/>
            <div style={{
                display: 'flex',
                alignItems: 'baseline'
            }}>
                <input type="radio" />
                <p>Some radio option</p>
            </div>
            <SectionHeader sectionTitle="Check box"/>
            <SectionHeader sectionTitle="Input"/>
        </TitledCard>
    )
}

export default DemoControls
