import BaseLayout from "@/components/common/BaseLayout";
import {Home} from "@/components/pages/home/Home";

export default function Page() {
    return (
        <BaseLayout navbarOn footerOn
                    Component={Home}>
        </BaseLayout>
    )
}
