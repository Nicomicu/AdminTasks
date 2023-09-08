const auth = (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("bearer")
  ) {
    try {
      const token = req.headers.authorization
    } catch (error) {
      console.log(error)
    }
  }

  next()
}
export default auth
