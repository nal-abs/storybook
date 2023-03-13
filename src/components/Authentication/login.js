import { Fragment } from "react/cjs/react.development";
import Captcha from "./captcha";
import LoginInputs from "./loginInputs";
import OTP from "./otp";
import LoginProviders from "./loginProviders";

const LoginButton = ()=><OTP/>;

const Login = () => <Fragment>
    <LoginInputs />
    <LoginProviders />
    <LoginButton/>
    <Captcha/>
</Fragment>;

export default Login;