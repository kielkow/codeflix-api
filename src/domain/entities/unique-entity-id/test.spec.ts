import { UniqueEntityID } from ".";

describe('Entity: UniqueEntityID', () => {
    it('should create a new unique entity id', () => {
        const uniqueEntityID = new UniqueEntityID();

        expect(uniqueEntityID).toBeInstanceOf(UniqueEntityID);
        expect(uniqueEntityID.id).toBeDefined();
    });

    it('should compare unique entity id', () => {
        const uniqueEntityID1 = new UniqueEntityID();
        const uniqueEntityID2 = new UniqueEntityID();

        expect(uniqueEntityID1.equals(uniqueEntityID2)).toBe(false);
    });
});
