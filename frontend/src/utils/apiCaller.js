
function apiCaller(
    method,
    path,
    data = {},
    addLogin = false,
) {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    if (addLogin) {
        data.login = localStorage.getItem('user')
    }

    return fetch(path, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    })
        .then((response) => response.json())
        .catch((reason) => reason)
}

export default apiCaller