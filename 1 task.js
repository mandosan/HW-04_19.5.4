const WindowsVersion = {
    name: 'Windows 11',
    version: '23H2',
    year: 2021,
    developer: 'Microsoft Corporation',
};

getObjectValues(WindowsVersion);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}