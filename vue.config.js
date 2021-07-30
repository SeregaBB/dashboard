module.exports = {
    publicPath: process.env.NODE_ENV === 'prod'
        ? '/dashboard/'
        : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Dashboard',
        }
    }
}