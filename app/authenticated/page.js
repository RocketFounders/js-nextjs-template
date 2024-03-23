import {AuthenticatedPage} from "@/components/pages/authenticated/AuthenticatedPage";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return <BaseLayout Component={AuthenticatedPage}
                       navbarOn
                       footerOn
                       redirectCondition={(hasProfile, profile) => !hasProfile}
                       redirectUrl={"/login"}
    />
}
