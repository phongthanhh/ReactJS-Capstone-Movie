export const debounce = (action, delay = 500) => {
  let timerId

  return (...args) => {
    console.log(args)
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => action(...args), delay)
  }
}
