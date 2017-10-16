/**
 * Hello world as an OpenWhisk action.
 */
function main() {
    var name = 'changed World';
    return {payload:  'Hello, ' + name + '!'};
}


