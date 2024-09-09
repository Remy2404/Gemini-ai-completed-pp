// Function to format dates
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Function to truncate text
  export const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  // Function to check if a string is a valid URL
  export const isValidURL = (string) => {
    const res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
  };
  
  // Function to debounce a function call
  export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  
  // Function to generate a random ID
  export const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };