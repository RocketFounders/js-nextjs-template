"use client";

import {useState} from "react";
import {useFormik} from "formik";
import profileActions from "@/actions/profile";
import {useCookies} from "next-client-cookies";
import {useRouter} from "next/navigation";

export const Profile = ({profile}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const cookies = useCookies();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            firstName: profile?.firstName,
            lastName: profile?.lastName,
            phoneNumber: profile?.phoneNumber,
            email: profile?.email,
        },
        onSubmit: (values) => profileActions.update(values, cookies.get("jwtToken"))
    })

    const handleClick = () => {
        if (!isUpdate) {
            setIsUpdate(true)
            return
        }

        formik.submitForm().then(r => {
            router.refresh();
            setIsUpdate(false)
        })
    }

    return <div className={'layout'}>
        {!isUpdate ?
            <ul>
                <li>
                    First name {profile.firstName}
                </li>
                <li>
                    Last name {profile.lastName}
                </li>
                <li>
                    Phone number {profile.phoneNumber}
                </li>
                <li>
                    Email {profile.email}
                </li>
            </ul>
            : <ul>
                <li>
                    <label>First name</label>
                    <input id={"firstName"}
                           onChange={formik.handleChange}
                           value={formik.values.firstName}
                    />
                </li>
                <li>
                    <label>Last name</label>
                    <input id={"lastName"}
                           onChange={formik.handleChange}
                           value={formik.values.lastName}
                    />
                </li>
                <li>
                    <label>Phone number</label>
                    <input id={"phoneNumber"}
                           onChange={formik.handleChange}
                           value={formik.values.phoneNumber}/>
                </li>
                <li>
                    <label>Email</label>
                    <input id={"email"}
                           onChange={formik.handleChange}
                           value={formik.values.email}/>
                </li>
            </ul>}
        <button onClick={handleClick} style={{fontSize: "14px"}}>
            {isUpdate ? "Save" : "Update profile"}
        </button>
    </div>
}
