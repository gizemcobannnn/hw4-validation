// src/utils/parseFilterParams.js

const parseType = (type) => {
    const isString = typeof type === 'string';
    if (!isString) return;
    const isType = (type) => ['personal', 'home', 'other'].includes(type);
  
    if (isType(type)) return type;
  };
  
  // eslint-disable-next-line no-unused-vars
  const parseNumber = (number) => {
    const isString = typeof number === 'string';
    if (!isString) return;
  
    const parsedNumber = parseInt(number);
    if (Number.isNaN(parsedNumber)) {
      return;
    }
  
    return parsedNumber;
  };
  
  export const parseFilterParams = (query) => {
    const { name, type, createdDate, updatedDate } = query;

    return {
        name: parseType(name),
        type: parseType(type),
        createdDate: parseType(createdDate),
        updatedDate: parseType(updatedDate),
    };
};
      