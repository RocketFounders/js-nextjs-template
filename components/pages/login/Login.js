"use client";

import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {AuthProfileSchema} from "@/schemas/profile";
import profileActions from "@/actions/profile";

export function Login() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: undefined,
            password: undefined,
        },
        onSubmit: values => profileActions.authProfile(values).then(token => {
            localStorage.setItem('jwt-token', token?.accessToken);
            profileActions.getProfile(token?.accessToken).then(profile => {
                router.push('/');
            })
        }),
        validationSchema: AuthProfileSchema,
        validateOnChange: false
    })

    return (
        <div className={'login-page'}>
            <div className={'login-card'}>
                <div>
                    <label htmlFor={'username'}>Email</label>
                    <input id={'username'} name={'username'} value={formik.values.username}
                           onChange={formik.handleChange}/>
                    {formik.errors.username && <small>{formik.errors.username}</small>}
                </div>
                <div>
                    <label htmlFor={'password'}>Password</label>
                    <input type={"password"} id={'password'} name={'password'} value={formik.values.password}
                           onChange={formik.handleChange}/>
                    {formik.errors.password && <small>{formik.errors.password}</small>}
                </div>
                <button onClick={() => formik.submitForm()}>Login</button>
                <Link href={'/restore'}>Restore password</Link>
                <Link href={'/register'}>Register</Link>
            </div>
        </div>
    );
}

export default Login;
