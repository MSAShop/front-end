// Styled-components
import styled from 'styled-components';

// Main core
import Card from '@components/card';
import { Avatar } from '@material-ui/core';
import { getColor, lightenColor } from '@utils/functions';
import Text from '@components/text';
import Button from '@components/button';


export const ProfileContainer = styled(Card)`
  max-width: 800px;
  padding: 0px 0px 40px;
  margin: 80px auto;
`

export const Header = styled(Text)`
  padding: 20px 0px;
  margin-bottom: 60px;
  border-bottom: 1px solid ${getColor('grey.200')};
`

export const ImageProfile = styled(Avatar)`
  width: 150px;
  height: 150px;
  color: ${getColor('grey.200')};
  background-color: ${getColor('grey.100')};
  /* background: url('https://source.unsplash.com/MTZTGvDsHFY') no-repeat; */
  /* background-size: cover; */
`

export const SaveButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`
