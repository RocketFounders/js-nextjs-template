"use client";

import {useEffect} from "react";
import {useProfileDetail} from "@/store";
import profileActions from "@/actions/profile";

export const Profile = () => {
    const profile = useProfileDetail();

    useEffect(() => {
        try {
            const token = localStorage.getItem('jwt-token');
            profileActions.getProfile(token).then()
        } catch (e) {
            console.log(e);
        }
    }, []);


    return <div className={'layout'}>
        <ul>
            <li>
                firstName: {profile.firstName}
            </li>
            <li>
                lastName: {profile.lastName}
            </li>
            <li>
                email: {profile.email}
            </li>
        </ul>
    </div>
}
