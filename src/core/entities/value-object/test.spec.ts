import { ValueObject } from ".";

describe('Entity: Value Object', () => {
    it('should compare value object', () => {
        class TestValueObject extends ValueObject<{ value: string }> {
            constructor(props: { value: string }) {
                super(props);
            }
        }

        const valueObject1 = new TestValueObject({ value: 'test' });
        const valueObject2 = new TestValueObject({ value: 'test' });

        expect(valueObject1.equals(valueObject2)).toBe(true);
    });


    it('should compare different values objects', () => {
        class TestValueObject extends ValueObject<{ value: string }> {
            constructor(props: { value: string }) {
                super(props);
            }
        }

        const valueObject1 = new TestValueObject({ value: 'test1' });
        const valueObject2 = new TestValueObject({ value: 'test2' });

        expect(valueObject1.equals(valueObject2)).toBe(false);
    });

    it('should compare value object with undefined', () => {
        class TestValueObject extends ValueObject<{ value: string }> {
            constructor(props: { value: string }) {
                super(props);
            }
        }

        const valueObject1 = new TestValueObject({ value: 'test' });

        expect(valueObject1.equals(undefined)).toBe(false);
    });
});
