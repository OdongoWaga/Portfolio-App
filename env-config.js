const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://wagaodongo.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://wagaodongo.herokuapp.com',
  'process.env.CLIENT_ID': 'agMjB6XhqDZNZQK8zPEg0lZVBWtMWnDh'
}