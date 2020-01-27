// Material-ui icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// Material-ui core
import Fade from '@material-ui/core/Fade';

// Main core
import AuthLayout from '@components/auth-layout';
import Flex from '@components/common/flex';
import Label from '@components/label';
import Input from '@components/input';
import Button from '@components/button';
import { Link } from '@services/routes';

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
				<Label margin>YOUR E-MAIL</Label>
				<Input
					borderRadius='rounded'
					startAdornment={<EmailIcon />}
					placeholder='test@mail.com'
					fullWidth
				/>

				<Label margin className='mt-20'>PASSWORD</Label>

				<Flex>
					<Flex flex={1} className='mr-20'>
						<Input
							borderRadius='rounded'
							type='password'
							placeholder='•••••••••'
							startAdornment={<LockIcon />}
							fullWidth
						/>
					</Flex>

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
				<Label margin>YOUR E-MAIL</Label>
				<Input
					borderRadius='rounded'
					startAdornment={<EmailIcon />}
					placeholder='test@mail.com'
					fullWidth
				/>

				<Label margin className='mt-20'>
					PASSWORD
				</Label>
				<Input
					borderRadius='rounded'
					type='password'
					placeholder='•••••••••'
					startAdornment={<LockIcon />}
					fullWidth
				/>

				<Styles.AgreementText align='center'>
					By creating an account you agree to the <br />
					<span className='underline'>Terms of Service</span> and{' '}
					<span className='underline'>Privacy Policy.</span>
				</Styles.AgreementText>

				<Button
					bg='primary'
					color='white'
					borderRadius='rounded'
					className='full-width'
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
			<Link route ='#'>
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

const LoginFooter = () => {

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Footer>
				<Styles.QuestionText color='grey.500'>Don't have an account?</Styles.QuestionText>

				<Link route='auth' params={{ page: PAGES.register.key }}>
					<Button
						bg='primary'
						color='white'
						borderRadius='rounded'
						className='btn-padding'
					>
						SING UP FOR FREE
					</Button>
				</Link>
			</Styles.Footer>
		</Fade>
	);
}

const RegisterFooter = () => {

	return (
		<Fade in timeout={{ enter }}>
			<Styles.Footer>
				<Styles.QuestionText color='grey.500'>have an account?</Styles.QuestionText>

				<Link route='auth' params={{ page: PAGES.login.key }}>
					<Button
						bg='info'
						color='white'
						borderRadius='rounded'
						className='btn-padding'
					>
						SIGN IN
					</Button>
				</Link>
			</Styles.Footer>
		</Fade>
	);
}


/////////////////////////////////
//         Main Page
/////////////////////////////////
const Auth = ({ query }) => {
	const page = PAGES[query.page] || PAGES.login;
	const [Form, Footer] =
    page.key === PAGES.login.key
      ? [LoginForm, LoginFooter]
			: [RegisterForm, RegisterFooter];

  return (
		<>
			<Header text={page.title} />

			<Form />
			
			<Footer />

		</>
	);
}

Auth.getInitialProps = async ({ query }) => ({ query });
Auth.Layout = AuthLayout;
export default Auth;
