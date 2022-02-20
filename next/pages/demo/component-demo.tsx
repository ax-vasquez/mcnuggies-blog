import { NextPage } from "next";
import Link from "next/link";
import DemoControls from "../../components/demo/DemoControls";
import { DemoHeadings } from "../../components/demo/DemoHeadings";
import DemoLists from "../../components/demo/DemoLists";
import { PageLayout } from "../../components/layout/PageLayout";

const ComponentDemoPage: NextPage = () => {
    return (
        <PageLayout
            pageTitle="Component Demo"
        >
            <h1>
                Components demo
            </h1>
            <br />
            <DemoHeadings />
            <DemoLists />
            <DemoControls />
        </PageLayout>
    )
}

export default ComponentDemoPage