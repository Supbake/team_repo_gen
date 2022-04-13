const Manager = require('.../lib/manager');
const manager = new Manager('jacob', '123456', 'jacob@jacob.com', '123');

test('testing to see if we are able to get the constructor values for the "manager" object', () => {
    expect(manager.name).tobe('jacob');
    expect(manager.id).tobe('123456');
    expect(manager.email).tobe('jacob@jacob.com');
    expect(manager.officerNumber).tobe('123');
});

test('testing to see if we a can get the name back from the getName() method', () => {
    expect(manager.getName()).tobe('jacob');
});

test('testing to see if we can get the id back from the getName() method', () => {
    expect(manager.getId()).tobe('123456');
});

test('testing to see if we can get back the email back from the getEmail() method', () => {
    expect(manager.getEmail()).tobe('jacob@jacob.com');
});

test('testing to see if we can get back the email back from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).tobe('123');
});

test('testing to see if we can get back the role from getRole() meathod', () => {
    expect(manager.getRole()).tobe('Manager');
});