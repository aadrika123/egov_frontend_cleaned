export default function api_headers() {
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