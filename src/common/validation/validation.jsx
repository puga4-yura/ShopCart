export const required = value => {
  if (value) return undefined
     return "запомните поле"
}

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined