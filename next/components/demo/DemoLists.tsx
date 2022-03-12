import { FunctionComponent, useState } from "react"
import TitledCard from "../layout/TitledCard"
import SectionHeader from "./common/SectionHeader"

const LIST_ITEMS = [
    `item 1`,
    `item 2`,
    `item 3`,
]

interface ListElementProps {
    type: string
    children: any
}

/**
 * Convenience component to make the list generator method cleaner
 * 
 * This method isolates the logic that determines what type of list the list generator
 * should create (ul or ol).
 */
const ListElement = ({type, children}: ListElementProps) => {
    return (
        type === `ol` ?
            <ol>
                {children}
            </ol>
        :
            <ul>
                {children}
            </ul>
    )
}

/**
 * Recursive list generator
 * 
 * When the nesting level is 0, it will generate a list with no child items (the base case)
 */
const listGenerator = (nestingLevel: number, type: `ol` | `ul`) => {
    return (
        (nestingLevel > 0) ?
        (
            <ListElement type={type}>
                {LIST_ITEMS.map((item, i) => (
                    <li key={`${type}-${i}`}>
                        {item}
                        {listGenerator((nestingLevel - 1), type)}
                    </li>
                ))}
            </ListElement>
        )
        :
        (
            <ListElement type={type}>
                {LIST_ITEMS.map(item => <li key={`${item}-nestLevel-${nestingLevel}`}>{item}</li>)}
            </ListElement>
        )
    )
}

const DemoLists: FunctionComponent = ({}) => {
    const [ulNestLevel, setUlNestLevel] = useState(0)
    const [olNestLevel, setOlNestLevel] = useState(0)

    return (
        <section
            id="demo-lists"
        >
            <TitledCard
                title="Lists"
                description={
                    <>
                        List styles are defined in <code>./next/styles/_general.scss</code>. If you have special use-cases, such as style for a specific
                        type of component, you can override the style in the components corresponding <code>*.module.scss</code> file.
                    </>
                }
            >
                <div>
                    <SectionHeader
                        sectionTitle="Ordered lists"
                    >
                        <div className="number-input-container">
                            ol nesting level:
                            <input type='number' max={5} min={0} defaultValue={olNestLevel} onChange={e => setOlNestLevel(parseInt(e.target.value))}/>
                        </div>
                    </SectionHeader>
                    {listGenerator(olNestLevel, `ol`)}
                </div>
                <div>
                    <SectionHeader
                        sectionTitle="Unordered lists"
                    >
                        <div>
                            ul nesting level:
                            <input type='number' max={5} min={0} defaultValue={ulNestLevel} onChange={e => setUlNestLevel(parseInt(e.target.value))}/>
                        </div>
                    </SectionHeader>
                    {listGenerator(ulNestLevel, `ul`)}
                </div>
            </TitledCard>
        </section>

    )
}

export default DemoLists
