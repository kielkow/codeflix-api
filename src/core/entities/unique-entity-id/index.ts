import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  private _id: string

  get value(): string {
    return this._id
  }

  constructor(id?: string) {
    this._id = id ?? randomUUID()
  }

  public equals(id?: UniqueEntityID): boolean {
    if (id === null || id === undefined) {
      return false
    }

    if (this === id) {
      return true
    }

    if (!(id instanceof UniqueEntityID)) {
      return false
    }

    return this._id === id._id
  }

  public validate(id: UniqueEntityID): boolean {
    return id instanceof UniqueEntityID
  }
}
