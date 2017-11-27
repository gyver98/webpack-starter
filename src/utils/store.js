// export default string => {
//   // Overwriting localStorage
//   window.localStorage.setItem('inputContent', string);
// };

const store = {
  get(key) {
    let value;
    if (localStorage) {
      value = window.localStorage.getItem(key);
    } else {
      value = this.readCookie(key);
    }
    return value;
  },

  set(key, value) {
    if (localStorage) {
      window.localStorage.setItem(key, value);
    } else {
      document.cookie = key + '=' + value;
    }
  },

  readCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
};

export default store;
