let serverPath = (path) => {
  try {
    return new URL(`http://localhost:8080${path}`).href
  } catch (error) {
    return `http://localhost:8080`
  }
}; 

export default serverPath;