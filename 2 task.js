const WindowsVersion = {
    name: 'Windows 11',
    version: '23H2',
    year: 2021,
    developer: 'Microsoft Corporation',
};

console.log(isProperty(WindowsVersion, 'developer'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}