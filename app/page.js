"use client"

import BaseLayout from "@/components/common/BaseLayout";

export default function Home() {
    return (
        <BaseLayout navbarOn={true} footerOn={true} authLayoutOn={false}>
            <div className={'layout'}>
                <div className={"content"}>
                    <div className={'start-box font-size-50 text-center'}>
                        This is home page
                    </div>
                    <div style={{padding: "10px 0 10px 0"}}></div>
                    <div className={'start-box font-size-30 text-center'}>
                        Here you can do whatever your heart desires
                    </div>

                </div>
            </div>
        </BaseLayout>
    )
}
