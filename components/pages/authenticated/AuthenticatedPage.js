"use client";

import {useAllProfiles} from "@/store";
import {useEffect} from "react";
import profileActions from "@/actions/profile";
import {useCookies} from "next-client-cookies";
import {ProfileCard} from "@/components/common/ProfileCard";

export const AuthenticatedPage = () => {
    const cookies = useCookies();
    const profiles = useAllProfiles();

    useEffect(() => {
        const token = cookies.get("jwtToken")
        if (!profiles?.[0]?.id && token) {
            profileActions.getAllProfiles(token).then()
        }
    }, []);

    return <div className={'layout'}>
        <h2>This page can only be viewed by authorized users</h2>
        <br/>
        <div className={"profile-list"}>
            {profiles.map(item => <ProfileCard key={item.id} profile={item}/>)}
        </div>
    </div>
}
