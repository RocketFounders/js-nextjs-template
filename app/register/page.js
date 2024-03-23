import Register from "@/components/pages/register/Register";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return <BaseLayout Component={Register} navbarOn footerOn
                       redirectCondition={(hasProfile, profile) => hasProfile}
                       redirectUrl={"/"}
    />
};

