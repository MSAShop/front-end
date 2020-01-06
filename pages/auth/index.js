// React.js
import { useState } from 'react';

// Next.js
import Link from 'next/link';

// Material-ui icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// Main core
import AuthLayout from '@components/auth-layout';
import Flex from '@components/common/flex';
import Label from '@components/label';
import Input from '@components/input';
import Button from '@components/button';
import Fade from '@material-ui/core/Fade';

// Styles
import * as Styles from '@pages-style/auth.style';


// Constants
const PAGES = {
	login: { key: 'login', title: 'Sign In' },
	register: { key: 'register', title: 'Create Account' }
};
const enter = 800;


/////////////////////////////////
//         	Header              
/////////////////////////////////
const Header = ({ text }) => {

	return (
		<Fade in={true} timeout={{ enter }}>
			<Styles.Header align='center' variant='h3'>{text}</Styles.Header>
		</Fade>
	)
}


/////////////////////////////////
//         	Forms
/////////////////////////////////
const LoginForm = () => {

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Form>
				<Label ml={1.2} mb={0.4}>YOUR E-MAIL</Label>
				<Input
					borderRadius='rounded'
					startAdornment={<EmailIcon />}
					placeholder='test@mail.com'
					fullWidth
				/>

				<Label ml={1.2} mb={0.4} mt={2}>PASSWORD</Label>

				<Flex>
					<Flex flex={1}>
						<Input
							borderRadius='rounded'
							type='password'
							placeholder='•••••••••'
							startAdornment={<LockIcon />}
							fullWidth
						/>
					</Flex>

					<Styles.Spacer />

					<Flex flex={1}>
						<Button
							bg='success'
							color='white'
							borderRadius='rounded'
							className='flex-1'
						>
							SING IN
						</Button>
					</Flex>
				</Flex>
				<ForgotPassword />
			</Styles.Form>
		</Fade>
	);
}

const RegisterForm = () => {

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Form>
				<Label ml={1.2} mb={0.4}>YOUR E-MAIL</Label>
				<Input
					borderRadius='rounded'
					startAdornment={<EmailIcon />}
					placeholder='test@mail.com'
					fullWidth
				/>

				<Label ml={1.2} mb={0.4} mt={2}>PASSWORD</Label>
				<Input
					borderRadius='rounded'
					type='password'
					placeholder='•••••••••'
					startAdornment={<LockIcon />}
					fullWidth
				/>

				<Button
					bg='primary'
					color='white'
					borderRadius='rounded'
					className='full-width mt-20'
				>
					Register
				</Button>
			</Styles.Form>
		</Fade>
	);
}

const ForgotPassword = () => {

	return (
		<Flex justifyContent='center'>
			<Link href='#'>
				<Styles.QuestionText link as='a' align='center'>
					Forget Password?
				</Styles.QuestionText>
			</Link>
		</Flex>
	);
}


/////////////////////////////////
//         Footers
/////////////////////////////////

const LoginFooter = ({ changePage }) => {
	const handleClick = () => changePage({ ...PAGES.register });

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Footer>
				<Styles.QuestionText color='grey.500'>Don't have an account?</Styles.QuestionText>

				<Button
					bg='primary'
					color='white'
					borderRadius='rounded'
					className='btn-padding'
					onClick={handleClick}
				>
					SING UP FOR FREE
				</Button>
			</Styles.Footer>
		</Fade>
	);
}

const RegisterFooter = ({ changePage }) => {
	const handleClick = () => changePage({ ...PAGES.login });

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Footer>
				<Styles.QuestionText color='grey.500'>have an account?</Styles.QuestionText>

				<Button
					bg='info'
					color='white'
					borderRadius='rounded'
					className='btn-padding'
					onClick={handleClick}
				>
					SIGN IN
				</Button>
			</Styles.Footer>
		</Fade>
	);
}


/////////////////////////////////
//         Main Page
/////////////////////////////////
const Auth = () => {
	const [page, setPage] = useState(PAGES.login);
	const [Form, Footer] =
		page.key === PAGES.login.key ? [LoginForm, LoginFooter] : [RegisterForm, RegisterFooter];

  return (
		<>
			<Header text={page.title} />

			<Form />
			
			<Footer changePage={setPage}/>

		</>
	);
}

Auth.Layout = AuthLayout;
export default Auth;
