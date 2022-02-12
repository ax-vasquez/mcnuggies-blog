import { NextPage } from "next";
import Link from "next/link";
import { DemoHeadings } from "../../components/demo/DemoHeadings";
import DemoLists from "../../components/demo/DemoLists";
import { PageLayout } from "../../components/layout/PageLayout";

const ComponentDemoPage: NextPage = () => {
    return (
        <PageLayout
            pageTitle="Component Demo"
        >
            <Link href='/'>
                <a>Home</a>
            </Link>
            <DemoHeadings />
            <DemoLists />
        </PageLayout>
    )
}

export default ComponentDemoPage