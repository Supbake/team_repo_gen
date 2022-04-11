const Employee = require('.../lib/employee');
const employee = new Employee('jacob', '123456', 'jacob@jacob.com');

test('testing to see if we are able to get the constructor values for the "Employee" object', () => {
    expect(employee.name).tobe('jacob');
    expect(employee.id).tobe('123456');
    expect(employee.email).tobe('jacob@jacob.com');
});

test('testing to see if we a can get the name back from the getName() method', () => {
    expect(employee.getName()).tobe('jacob');
});

test('testing to see if we can get the id back from the getName() method', () => {
    expect(employee.getId()).tobe('123456');
});

test('testing to see if we can get back the email back from the getEmail() method', () => {
    expect(employee.getEmail()).tobe('jacob@jacob.com');
});

test('testing to see if we can get back the role from getRole() meathod', () => {
    expect(employee.getRole()).tobe('Employee');
});