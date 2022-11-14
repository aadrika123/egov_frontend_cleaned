
export default function ApiHeader() {
    let token = JSON.parse(window.localStorage.getItem('token'))
    const header = {
        headers:
        {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    }
  return header
}

