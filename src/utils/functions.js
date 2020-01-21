import { COLORS_PATH } from '@utils/constants';

///////////////////////////
// GET Color from Palette
///////////////////////////

export const getColor = (name, theme) => {
  const keys = COLORS_PATH[name];
  if (!keys) return null;

  return theme ?
    getNestedProperty(keys, theme.palette):
    props => getNestedProperty(keys, props.theme.palette);
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

