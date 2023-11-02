import Login from "@/components/pages/login/Login";
import BaseLayout from "@/components/common/BaseLayout";

export default function Page() {
    return (
        <BaseLayout navbarOn={true} footerOn={false} authLayoutOn={false}>
            <Login/>
        </BaseLayout>
    );
};
