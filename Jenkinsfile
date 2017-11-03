node {
  stage 'Verify Environment' {
    def goAvailable = 0 == sh returnStatus: true, script: 'go version'
    if (!goAvailable) {
      error 'Go build environment not available'
    }
  }
}
