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

// Styles
import * as Styles from '@pages-style/login.style';


const FormView = () => {

	return (
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
		</Styles.Form>
	);
}

const ForgotPassword = () => {

	return (
		<Flex justifyContent='center'>
			<Link>
				<Styles.QuestionText link as='a' align='center'>
					Forget Password?
				</Styles.QuestionText>
			</Link>
		</Flex>
	);
}

const FooterView = () => {

	return (
		<Styles.Footer>
			<Styles.QuestionText color='grey.500'>
				Don't have an account?
			</Styles.QuestionText>

			<Button
				bg='primary'
				color='white'
				borderRadius='rounded'
				className='btn-padding'
			>
				SING UP FOR FREE
			</Button>
		</Styles.Footer>
	);
}


const Auth = () => {
  return (
		<>
			<Styles.Header align='center' variant='h3'>Sign In</Styles.Header>

			<FormView />

			<ForgotPassword />
			
			<FooterView />
		</>
	);
}

Auth.Layout = AuthLayout;
export default Auth;
