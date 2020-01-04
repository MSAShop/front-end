// Styled-tools
import { withProp, prop } from 'styled-tools';


// Props
export const properties = {
	m: 'margin',
	mr: 'margin-right',
	ml: 'margin-left',
	mb: 'margin-bottom',
	mt: 'margin-top',
	mx: ['margin-left', 'margin-right'],
	my: ['margin-top', 'margin-bottom'],
	p: 'padding',
	pr: 'padding-right',
	pl: 'padding-left',
	pb: 'padding-bottom',
	pt: 'padding-top',
	px: ['padding-left', 'padding-right'],
	py: ['padding-top', 'padding-bottom'],
};

const getStyle = (key, value) => 
  value && `${key}: ${typeof value === 'number' ? value + 'em' : value};`

const spacing = withProp(
  Object.keys(properties),
  (...props) => Object.keys(properties).map(
    (keys, index) => 
      properties[keys] instanceof Array ?
        properties[keys].map(key => getStyle(key, props[index])):
        getStyle(properties[keys], props[index])
  )
);

export default spacing;
