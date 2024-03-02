import { Category } from ".";

describe('Entity: Category', () => {
    it('should create a new category', () => {
        const category = Category.create({
            name: 'Category 1',
            description: 'Category 1 description',
        });

        expect(category).toBeInstanceOf(Category);
        expect(category.id).toBeDefined();
        expect(category.name).toBe('Category 1');
        expect(category.description).toBe('Category 1 description');
        expect(category.active).toBe(false);
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.updatedAt).toBeUndefined();
    });

    it('should update category', () => {
        const category = Category.create({
            name: 'Category 1',
            description: 'Category 1 description',
        });

        category.changeName('Category 2');
        category.changeDescription('Category 2 description');
        category.activate();

        expect(category.name).toBe('Category 2');
        expect(category.description).toBe('Category 2 description');
        expect(category.active).toBe(true);
        expect(category.updatedAt).toBeInstanceOf(Date);
    });

    it('should deactivate category', () => {
        const category = Category.create({
            name: 'Category 1',
            description: 'Category 1 description',
        });

        category.deactivate();

        expect(category.active).toBe(false);
    }); 
});
