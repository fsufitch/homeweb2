node {
  stage 'Verify Environment' {
    def goStatus = sh returnStatus: true, script: 'go version'
    if (!goStatus) {
      error 'Go build environment not available'
    }
  }
}
