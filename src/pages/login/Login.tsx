import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { checkLogin } from '../../api/login';

/**
 * Interface for the form
 */
interface formValues {
    email: string,
    password: string
}

/**
 * Login Component which contains login form, submit handler, validation via formik
 * 
 * @returns Login Component
 */
export function Login() {

    // Initial Values of form
    const initialValues: formValues = {
        email: "",
        password: ""
    }

    // Validation schema for the login form
    const validationSchema = Yup.object({
        email: Yup.string().email("Please enter valid email!").required("Field is required!"),
        password: Yup.string().min(8, "Password must be atleast 8 characters").required("Field is required!"),
    });

    // Submit Handler to manage the details of login. It has a fake api to check the email and password
    const handleSubmit = (values: formValues, actions: FormikHelpers<formValues>): void => {
        checkLogin(values.email, values.password)
            .then((res) => {
                if (res === 1) {
                    toast.success('Login Success.');
                } else {
                    toast.error('Invalid Credentials.');
                }
            }).catch(() => {
                toast.error('Something went wrong! please try again later.');
            }).finally(() => {
                actions.setSubmitting(false);
            })
    }

    return (
        <div className="max-w-[500px] m-[50px_auto] min-[530px]:w-full w-[calc(100%-30px)] rounded-[6px] shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)] bg-white gap-5 grid">
            <h2 className="uppercase min-[530px]:text-[28px] text-[24px] text-[#333] font-bold min-[530px]:px-8 px-5 py-5 leading-none border-b-[1px] border-[rgba(0,0,0,.1)] ">Login Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="min-[530px]:p-8 p-5 pt-0 min-[530px]:pt-0 grid gap-7">
                            <div className="block">
                                <label className="text-[#666] text-[15px] w-full uppercase font-medium mb-1 block" htmlFor={"email"}>Email</label>
                                <Field className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-[1px] border-[#EDEBED] rounded-[4px] leading-[18px] py-3 w-full px-3 text-[14px]" placeholder="Enter Email" type="text" id="email" name="email" />
                                {errors.email && touched.email && (<span className="text-[#ff0000] text-[15px] leading-[22px] block">{errors.email}</span>)}
                            </div>
                            <div className="block ">
                                <label className="text-[#666] text-[15px] w-full uppercase font-medium mb-1 block" htmlFor={"password"}>Password</label>
                                <Field className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-[1px] border-[#EDEBED] rounded-[4px] leading-[18px] py-3 w-full px-3 text-[14px]" placeholder="Password" type="password" id="password" name="password" />
                                {errors.password && touched.password && (<span className="text-[#ff0000] text-[15px] leading-[22px] block">{errors.password}</span>)}
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="bg-[#9A098B] border-[2px] border-[#9A098B] text-white py-3.5 px-10 leading-none uppercase font-medium rounded-[4px] text-[18px]  hover:border-[#9A098B] hover:bg-transparent hover:text-[#9A098B]">{isSubmitting ? "Loading..." : "Login"}</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
