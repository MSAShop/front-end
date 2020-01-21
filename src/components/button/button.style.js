// Styled-components
import styled, { css } from 'styled-components';

// Material-ui core
import MuiButtonBase from '@material-ui/core/ButtonBase';

// Styled-tools
import { withProp, ifProp } from 'styled-tools';

// Main core
import shapes, { props as shapesProps } from '@utils/styles/shape';
import typography, { props as typoProps } from '@utils/styles/typography';
import colors, { props as colorsProps } from '@utils/styles/colors';
import { getColor, filterProps } from '@utils/functions';



const getObjKeys = (list) => { 
	const keys = [];
	list.map(obj => keys.push(...Object.keys(obj)))
	return keys;
};
const withPropColor = prop =>
	withProp([prop, 'theme.palette'], (...props) => getColor(props[0], props[1]));

const buttonAttrs = { variant: 'button', borderRadius: 'default' };
const ButtonFilteredProps = filterProps(MuiButtonBase, [
	...getObjKeys([shapesProps, typoProps, colorsProps]),
	'outlined'
]);

export const CustomButton = styled(ButtonFilteredProps).attrs(p => buttonAttrs)`
  padding: 0.5em 0.8em;
  ${shapes}
  ${typography}
  ${colors}
  ${ifProp(
		'bg',
		css`
			&:active {
				transition: box-shadow 0.3s ease-in;
        box-shadow: 0px 8px 20px -10px ${withPropColor('bg')};
			}
		`,
		null
	)}
  ${ifProp('outlined', css`border: 1px solid ${withPropColor('color')};`, null)}
`;
