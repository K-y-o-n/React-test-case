export interface Valid {
  email: RegExp,
  name: RegExp,
  username: RegExp,
  street: RegExp,
  city: RegExp,
  zipcode: RegExp,
  phone: RegExp,
  website: RegExp,
}


const valid: Valid = {
  email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
  name: /^([A-Z]{1}[a-z]{0,14}\.?)\s([A-Z]{1}[a-z]{0,14}\.?)\s?([A-Z]{1}[a-z]{0,14}\.?)?\s?([A-Z]{1}[a-z]{0,14}\.?)?$/,
  username: /^[A-z0-9]{2,10}(\.?\-?\_?\s?)?[A-z0-9]{1,10}$/,
  street: /^[A-Z][a-z]\s?\-?([A-Z][a-z])?/,
  city: /[A-Za-z]{2,10}(\s?\-?[A-Z]?)?[a-z]{2,10}$/,
  zipcode: /^\d{2,}\-?\d{2,}$/,
  phone: /[^a-wyz\*\+\_]/,
  website: /^[a-z0-9]{1,15}\.([a-z]{2,10}\.)?[a-z]{2,4}$/
}


export default valid;