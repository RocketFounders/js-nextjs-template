import {Profile} from "@/components/pages/profile/Profile";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return <BaseLayout navbarOn={true} footerOn={true} authLayoutOn={true}>
        <Profile/>
    </BaseLayout>
}
