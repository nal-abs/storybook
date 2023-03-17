import { Fragment } from 'react/cjs/react.development';
import Captcha from './captcha';
import LoginInputs from './loginInputs';
import Otp from './otp';
import LoginProviders from './loginProviders';
import { React } from 'react';

const LoginButton = () => <Otp/>;

const Login = () => <Fragment>
	<LoginInputs/>
	<LoginProviders/>
	<LoginButton/>
	<Captcha/>
</Fragment>;

export default Login;
