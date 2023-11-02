"use client"

import {Navbar} from "@/components/common/Navbar";
import {Footer} from "@/components/common/Footer";
import {resetStore, useProfileDetail} from "@/store";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {isValidToken} from "@/utils/profile";
import profileActions from "@/actions/profile";

export default function BaseLayout(props) {
    const {
        children,
        navbarOn,
        footerOn,
        authLayoutOn
    } = props;

    const router = useRouter();
    const profile = useProfileDetail();
    const [hasProfile, setHasProfile] = useState(!!profile && !!profile.id);

    const getProfile = async (token) => {
        try {
            profileActions.getProfile(token).then(profileDetail => {
                setHasProfile(!!profileDetail && !!profileDetail.id)
            });
        } catch (e) {
            setHasProfile(false)
            console.log(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');

        if (!hasProfile) {
            getProfile(token).then();
        }

        if (authLayoutOn && (!token || !isValidToken(token))) {
            localStorage.removeItem('jwt-token');
            resetStore();
            router.push('/login');
        }

    }, [hasProfile, profile])

    return (
        <main>
            {navbarOn && <Navbar profile={profile}/>}
            {children}
            {footerOn && <Footer/>}
        </main>
    )
}
