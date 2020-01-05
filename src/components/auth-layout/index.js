// Styles
import * as Styles from './auth-layout.style';


const AuthLayout = ({ children }) => (
  <Styles.LayoutWrapper justifyContent='center'>
    <Styles.ContentWrapper>
      {children}
    </Styles.ContentWrapper>
  </Styles.LayoutWrapper>
);

export default AuthLayout;
