"use server";
import {Navbar} from "@/components/common/Navbar";
import {Footer} from "@/components/common/Footer";
import profileService from "@/services/profile";
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export default async function BaseLayout({
                                             Component,
                                             navbarOn,
                                             footerOn,
                                             pageProps,
                                             redirectCondition,
                                             redirectUrl
                                         }) {

    let hasProfile = false;
    let profile = null;
    const cookieStore = cookies();

    const getCurrentProfile = async (token) => {
        try {
            const [data, error] = await profileService.getProfile(token)
            if (data?.id) {
                hasProfile = true;
                profile = data;
            }

        } catch (e) {
            console.log(e);
        }
    }

    if (cookieStore.has("jwtToken") && !hasProfile) {
        const token = cookieStore.get("jwtToken");
        await getCurrentProfile(token.value);
    }

    if (redirectUrl && redirectCondition && redirectCondition(hasProfile, profile)) {
        redirect(redirectUrl)
    }

    return (
        <main>
            {navbarOn && <Navbar hasProfile={hasProfile} profile={profile}/>}
            {!!Component ? <Component hasProfile={hasProfile} profile={profile} {...pageProps}/> : null}
            {footerOn && <Footer hasProfile={hasProfile}/>}
        </main>
    )
}
