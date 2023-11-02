"use client"

import {AuthenticatedPage} from "@/components/pages/authenticated/AuthenticatedPage";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {

    return <BaseLayout navbarOn={true} footerOn={true} authLayoutOn={true}>
        <AuthenticatedPage/>
    </BaseLayout>
}
