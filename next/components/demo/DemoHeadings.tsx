
import { FunctionComponent } from "react";
import TitledCard from "../layout/TitledCard";

export const DemoHeadings: FunctionComponent = ({

}) => {
    return (
        <section
            id='demo-headings'
        >
            <TitledCard
                title="Headings"
                description={
                    <>
                        Heading styles are defined in <code>./next/styles/_headings.scss</code>. Most of the "base" styles should be handled there. However, if you have special use-cases, such as style for a specific
                        type of component, you can override the style in the components corresponding <code>*.module.scss</code> file.
                    </>
                }
            >
                
                <h1>
                    Heading 1
                </h1>
                <h2>
                    Heading 2
                </h2>
                <h3>
                    Heading 3
                </h3>
                <h4>
                    Heading 4
                </h4>
            </TitledCard>
        </section>
        
    )
}