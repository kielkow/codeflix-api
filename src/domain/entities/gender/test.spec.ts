import { Gender } from ".";

describe('Entity: Gender', () => {
    it('should create a new gender', () => {
        const gender = Gender.create({
            name: 'Gender 1',
            description: 'Gender 1 description',
        });

        expect(gender).toBeInstanceOf(Gender);
        expect(gender.id).toBeDefined();
        expect(gender.name).toBe('Gender 1');
        expect(gender.description).toBe('Gender 1 description');
        expect(gender.active).toBe(false);
        expect(gender.createdAt).toBeInstanceOf(Date);
        expect(gender.updatedAt).toBeUndefined();
    });

    it('should update gender', () => {
        const gender = Gender.create({
            name: 'Gender 1',
            description: 'Gender 1 description',
        });

        gender.changeName('Gender 2');
        gender.changeDescription('Gender 2 description');
        gender.activate();

        expect(gender.name).toBe('Gender 2');
        expect(gender.description).toBe('Gender 2 description');
        expect(gender.active).toBe(true);
        expect(gender.updatedAt).toBeInstanceOf(Date);
    });

    it('should deactivate gender', () => {
        const gender = Gender.create({
            name: 'Gender 1',
            description: 'Gender 1 description',
        });

        gender.deactivate();

        expect(gender.active).toBe(false);
    });

    it('should throw an error when creating a gender with invalid props', () => {
        expect(() => {
            Gender.create({
                name: 'G1',
                description: 'Gender 1 description',
            });
        }).toThrow();
    });
});
