///////////////////////////////////////////////////
// Style with property
// https://github.com/brunobertolini/styled-by
///////////////////////////////////////////////////

export const styledBy = (property, options) => props =>
  typeof options === 'string'
    ? (props[property] ? options : null)
    : options[props[property]]; 


///////////////////////////
// GET Color from Palette
///////////////////////////

export const getColorInStyle = ({ name='', key='' }) => props => {
  const colorName = props[key] || name;
  const keys = colorName.split('.');
  keys.length === 1 && keys.push('main');
  const theme = props.theme || props;

  return getNestedProperty(['palette', ...keys], theme);
}

/////////////////////////
// GET NESTED Property
/////////////////////////

const reducer = (currentObj, currentKey) => 
  (currentObj && currentObj[currentKey]) ? currentObj[currentKey]: null;

export const getNestedProperty = (arrayKeys, obj) =>
  typeof arrayKeys === 'string'
  ? arrayKeys.split('.').reduce(reducer, obj)
  : arrayKeys.reduce(reducer, obj);

