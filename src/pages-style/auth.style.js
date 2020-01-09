// Styled-components
import styled, { css } from 'styled-components';

// Styled-tools
import { ifProp } from 'styled-tools';

// Main Core
import Text from '@components/text';
import { getColor } from '@utils/functions';



export const Header = styled(Text)`
  margin: 1.2em;
`

export const Form = styled.form`
  margin: 0em 3em 1.5em;

  .flex-1 {
    flex: 1;
  }

  .full-width {
    width: 100%;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mr-20 {
    margin-right: 20px;
  }
`

export const Footer = styled.footer`
  background-color: ${getColor('grey.200')};
  margin-top: 0.5em;
  padding: 0.3em 3em 1.5em;
  text-align: center;
  border-radius: 0 0 8px 8px;

  .btn-padding {
    padding: 0.5em 2em;
  }
`

export const QuestionText = styled(Text)`
  margin: 1em 0em;
  
  ${ifProp('link', css`
      margin-top: 2em;
      text-decoration: underline;
      cursor: pointer;
    `, null)
  }
`

export const AgreementText = styled(Text)`
  margin: 40px 20px;

  .underline {
    text-decoration: underline;
  }
`
