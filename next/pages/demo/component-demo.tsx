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
            <div>
                This page contains all commonly-used components throughout the site. It's meant as a both a testing area for developers looking to tweak styles to their liking, or
                for those simply browsing for a site starter and want to take inventory of what this site template offers. Each section card can be expanded and collapsed. Just click
                on the title row for whichever card you want to review.
            </div>
            <br />
            <DemoHeadings />
            <DemoLists />
            <DemoControls />
        </PageLayout>
    )
}

export default ComponentDemoPage