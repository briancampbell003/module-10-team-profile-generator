const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an Intern object with properties for name, id, email and school that match user input", () => {
            const name = 'Jill Intern';
            const id = 111;
            const email = "jill@intern.com";
            const school = "JS University"

            const obj = new Intern("Jill Intern", 111, "jill@intern.com", "JS University");

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });

    });

    describe('Role method', () => {
        it("should return the string 'Intern'", () => {
            const role = 'Intern';

            const obj = new Intern("Jill Intern", 111, "jill@intern.com", "JS University");

            expect(obj.getRole()).toEqual(role);
        });
    })
});
