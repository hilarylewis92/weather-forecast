const ErrorMessageReducer = (state = '', action) => {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return action.errorMessage
    default:
      return state
  }
}

export default ErrorMessageReducer
