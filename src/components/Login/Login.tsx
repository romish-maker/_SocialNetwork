import React from 'react';
import {reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form";
import {Field} from "redux-form";

export type LoginFormPropsType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormPropsType>> = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="Login" component="input"/>
            </div>
            <div>
                <Field name="Password" component="input"/>
            </div>
            <div>
                <Field name="RememberMe" component="input" type="checkbox"/>
                <span>remember me</span>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormPropsType>({form: 'login'})(LoginForm)


export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
