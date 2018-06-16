export const getquery = (props) => {
  if (!props.location || !props.location.search)  return {};
  const alterArrayIntoObject = array => ({[array.split('=')[0]] : array.split('=')[1]});
  return props.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce(
      (queryObject, queryItem) =>
        Object.assign(queryObject, alterArrayIntoObject(queryItem)),
      {}
    );
};
