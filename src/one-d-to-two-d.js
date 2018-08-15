module.exports = ({ arr, width }) => {
  const outerArr = []
  const arrCopy = [...arr]

  while (arrCopy.length) {
    outerArr.push(arrCopy.splice(0, width))
  }

  return outerArr
}
