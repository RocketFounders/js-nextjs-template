import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect E-mail!").required("Required field!").typeError("Incorrect E-mail!"),
    password: Yup.string().required("Required field!"),
    passwordRepeat: Yup.string().required("Required field!").test('comparePass',
        'Passwords must match!',
        (value, context) => {
            return value === context.parent?.password
        }),
    phoneNumber: Yup.string().required("Required field!").test('comparePhone',
        'Incorrect phone number!',
        (value) => {
            let re = /^(\+[1-9][0-9]*(\([0-9]*\)|-[0-9]*-))?[0]?[1-9][0-9\- ]*$/im;
            return re.test(value);
        }),
    username: Yup.string().required("Required field!"),
    firstName: Yup.string().required("Required field!"),
    lastName: Yup.string().required("Required field!"),
})

export const AuthProfileSchema = Yup.object().shape({
    // username field and all variables named username contains email value
    username: Yup.string().email("Incorrect E-mail!").required("Required field!").typeError("Incorrect E-mail!"),
    password: Yup.string().required("Required field!"),
})
