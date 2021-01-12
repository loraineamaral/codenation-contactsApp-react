const getContacts = () => fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
.then((res) => res.json())
.then((data) => data);

export default getContacts;