import { UniqueEntityID } from ".";

describe('Entity: UniqueEntityID', () => {
    it('should create a new unique entity id', () => {
        const uniqueEntityID = new UniqueEntityID();

        expect(uniqueEntityID).toBeInstanceOf(UniqueEntityID);
        expect(uniqueEntityID.value).toBeDefined();
    });

    it('should compare unique entity id', () => {
        const uniqueEntityID1 = new UniqueEntityID();
        const uniqueEntityID2 = new UniqueEntityID();

        expect(uniqueEntityID1.equals(uniqueEntityID2)).toBe(false);
    });

    it('should validate a new unique entity id', () => {
        const uniqueEntityID1 = new UniqueEntityID();
        const uniqueEntityID2 = new UniqueEntityID();

        expect(uniqueEntityID1.validate(uniqueEntityID2)).toBe(true);
        expect(uniqueEntityID1.validate('invalid')).toBe(false);
    });
});
