const Intern = require('.../lib/intern');
const intern = new intern('jacob', '123456', 'jacob@jacob.com', 'UofA');

test('testing to see if we are able to get the constructor values for the "intern" object', () => {
    expect(intern.name).tobe('jacob');
    expect(intern.id).tobe('123456');
    expect(intern.email).tobe('jacob@jacob.com');
    expect(intern.school).tobe('UofA');
});

test('testing to see if we a can get the name back from the getName() method', () => {
    expect(intern.getName()).tobe('jacob');
});

test('testing to see if we can get the id back from the getName() method', () => {
    expect(intern.getId()).tobe('123456');
});

test('testing to see if we can get back the email back from the getEmail() method', () => {
    expect(intern.getEmail()).tobe('jacob@jacob.com');
});

test('testing to see if we can get back the school back from the getSchool() method', () => {
    expect(intern.getSchool()).tobe('UofA');
});

test('testing to see if we can get back the role from getRole() meathod', () => {
    expect(intern.getRole()).tobe('Intern');
});