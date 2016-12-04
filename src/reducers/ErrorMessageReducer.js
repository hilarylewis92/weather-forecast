const ErrorMessageReducer = (state = '', action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return action.errorMessage
    case 'ERROR_MESSAGE_CLEAR':
      return ''
    default:
      return state
  }
}

export default ErrorMessageReducer
