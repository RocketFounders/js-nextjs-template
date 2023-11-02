import Register from "@/components/pages/register/Register";
import BaseLayout from "@/components/common/BaseLayout";

const Page = () => {
    return <BaseLayout navbarOn={true} footerOn={true} authLayoutOn={false}>
        <Register/>
    </BaseLayout>
};

export default Page;
