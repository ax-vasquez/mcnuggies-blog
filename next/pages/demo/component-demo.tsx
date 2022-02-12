import { NextPage } from "next";
import Link from "next/link";
import { DemoHeadings } from "../../components/demo/DemoHeadings";
import { PageLayout } from "../../components/util/PageLayout";

const ComponentDemoPage: NextPage = () => {
    return (
        <PageLayout
            pageTitle="Component Demo"
        >
            <Link href='/'>
                <a>Home</a>
            </Link>
            <DemoHeadings />
        </PageLayout>
    )
}

export default ComponentDemoPage