module.exports = str => {
  if (!(str && typeof str === 'string' && str.length > 0)) throw new Error('Please enter a valid string')
  return [...new Set(str.split(''))].sort()
}
