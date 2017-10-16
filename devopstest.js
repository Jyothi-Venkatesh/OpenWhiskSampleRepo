/**
 * Hello world as an OpenWhisk action.
 */
function main() {
    var name = 'World';
    return {payload:  'Hello, ' + name + '!'};
}


