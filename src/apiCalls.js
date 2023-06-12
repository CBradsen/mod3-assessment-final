export const getUrls = (verb, data) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: verb,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
})

   .then(response => response.json())
     
}
