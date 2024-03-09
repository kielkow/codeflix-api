import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

import { CategoryValidator } from './validator';

export interface CategoryProps {
    id?: string;
    name: string;
    description: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CreateCategoryProps {
    name: string;
    description: string;
    active?: boolean;
}

export class Category {
    private _id: string;
    private _name: string;
    private _description: string;
    private _active: boolean;
    private _createdAt: Date;
    private _updatedAt?: Date;

    protected constructor(props: CategoryProps) {
        this._id = props.id ? new UniqueEntityID(props.id).value : new UniqueEntityID().value;
        this._name = props.name;
        this._description = props.description;
        this._active = props.active || false;
        this._createdAt = props.createdAt || new Date();
        this._updatedAt = props.updatedAt;
    }

    static create(props: CreateCategoryProps): Category {
        CategoryValidator.validate(props);

        return new Category(props);
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get description(): string {
        return this._description;
    }
    get active(): boolean {
        return this._active;
    }
    get createdAt(): Date {
        return this._createdAt;
    }
    get updatedAt(): Date | undefined {
        return this._updatedAt;
    }

    private set name(value: string) {
        this._name = value;
        this.touch();
    }
    private set description(value: string) {
        this._description = value;
        this.touch();
    }
    private set active(value: boolean) {
        this._active = value;
        this.touch();
    }

    private touch() {
        this._updatedAt = new Date();
    }

    public changeName(name: string): void {
        this.name = name;
    }
    public changeDescription(description: string): void {
        this.description = description;
    }
    public activate(): void {
        this.active = true;
    }
    public deactivate(): void {
        this.active = false;
    }
    public toObject(): CategoryProps {
        return {
            id: this._id,
            name: this._name,
            description: this._description,
            active: this._active,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        };
    }
}
