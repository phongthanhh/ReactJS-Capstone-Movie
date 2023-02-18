export const debounce = (action, delay = 500) => {
  let timerId

  return () => {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(action, delay)
  }
}
