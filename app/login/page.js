import Login from "@/components/pages/login/Login";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return <BaseLayout Component={Login}
                       navbarOn
                       redirectCondition={(hasProfile, profile) => hasProfile}
                       redirectUrl={"/profile"}
    />
};
