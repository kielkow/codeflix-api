import { 
    IsBoolean, 
    IsNotEmpty, 
    IsOptional, 
    IsString,
    MaxLength, 
    MinLength, 
    ValidationError, 
    validateSync 
} from "class-validator";

import { CreateGenderProps } from ".";

class Rules {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    description: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    constructor(props: CreateGenderProps) {
        this.name = props.name;
        this.description = props.description;
        this.active = props.active || false;
    }

    validateSync(): ValidationError[] {
        return validateSync(this);
    }
}

export class GenderValidator {
    static validate(props: CreateGenderProps): void {
        const rules = new Rules(props);
        const errors = rules.validateSync();

        if (errors.length > 0) {
            throw new Error(errors.toString());
        }
    }
}
