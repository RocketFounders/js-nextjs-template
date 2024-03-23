import {Profile} from "@/components/pages/profile/Profile";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return <BaseLayout Component={Profile}
                       navbarOn
                       footerOn
                       redirectCondition={(hasProfile, profile) => !hasProfile}
                       redirectUrl={"/login"}
    />
}
