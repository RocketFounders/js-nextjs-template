"use client";

import {useFormik} from "formik";
import Link from "next/link";
import {useEffect} from "react";
import {ProfileSchema} from "@/schemas/profile";
import {useRouter} from "next/navigation";
import profileActions from "@/actions/profile";

function Register() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: undefined,
            firstName: undefined,
            lastName: undefined,
            phoneNumber: undefined,
            photoUrl: null,
            email: undefined,
            password: undefined,
            passwordRepeat: undefined,
        },
        onSubmit: (values) => handleSubmitForm(values),
        validationSchema: ProfileSchema,
        validateOnChange: false
    })

    useEffect(() => {
        const username = formik.values?.email?.split('@')?.[0]
        if (username && formik.values.username !== username) {
            formik.setFieldValue('username', username)
        }
    }, [formik.values])

    const handleSubmitForm = (values) => {
        profileActions.createProfile(values).then(() => {
            router.push('/login')
        })
    }

    return (
        <div className={'login-page'}>
            <div className={'login-card'}>
                <div>
                    <label htmlFor={'firstName'}>First name</label>
                    <input id={'firstName'} name={'firstName'} value={formik.values.firstName}
                           onChange={formik.handleChange}/>
                    {formik.errors.firstName && <small>{formik.errors.firstName}</small>}
                </div>
                <div>
                    <label htmlFor={'lastName'}>Last name</label>
                    <input id={'lastName'} name={'lastName'} value={formik.values.lastName}
                           onChange={formik.handleChange}/>
                    {formik.errors.lastName && <small>{formik.errors.lastName}</small>}
                </div>
                <div>
                    <label htmlFor={'email'}>Email</label>
                    <input id={'email'} name={'email'} value={formik.values.email}
                           onChange={formik.handleChange}/>
                    {formik.errors.email && <small>{formik.errors.email}</small>}
                </div>
                <div>
                    <label htmlFor={'phoneNumber'}>Phone number</label>
                    <input id={'phoneNumber'} name={'phoneNumber'} value={formik.values.phoneNumber}
                           onChange={formik.handleChange}/>
                    {formik.errors.phoneNumber && <small>{formik.errors.phoneNumber}</small>}
                </div>
                <div>
                    <label htmlFor={'password'}>Password</label>
                    <input id={'password'} name={'password'} value={formik.values.password}
                           type={'password'}
                           onChange={formik.handleChange}/>
                    {formik.errors.password && <small>{formik.errors.password}</small>}
                </div>
                <div>
                    <label htmlFor={'passwordRepeat'}>Repeat password</label>
                    <input id={'passwordRepeat'} name={'passwordRepeat'} value={formik.values.passwordRepeat}
                           type={'password'}
                           onChange={formik.handleChange}/>
                    {formik.errors.passwordRepeat && <small>{formik.errors.passwordRepeat}</small>}
                </div>
                <button onClick={() => formik.submitForm()}>
                    Register
                </button>
                <Link href={'/login'}>Login</Link>
            </div>
        </div>
    );
}

export default Register;
