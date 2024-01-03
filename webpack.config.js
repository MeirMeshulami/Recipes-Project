const path = require('path');

module.exports = {
    entry: './src/js/main.js',  
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist') 
    },
    mode: 'development'
    // Add other necessary loaders and plugins here
};
