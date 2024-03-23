import BaseLayout from "@/components/common/BaseLayout";
import {Restore} from "@/components/pages/restore/Restore";

export default function Page() {
    return <BaseLayout Component={Restore}
                       redirectCondition={(hasProfile, profile) => hasProfile}
                       redirectUrl={"/"}
                       navbarOn
                       footerOn
    />
};

