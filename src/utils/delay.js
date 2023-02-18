export const debounce = (action, delay = 500) => {
  let timerId

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => action(...args), delay)
  }
}
