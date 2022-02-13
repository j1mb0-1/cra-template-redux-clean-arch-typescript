import { Count } from "../../../domain/entities/count/count";

export class CountModel implements Count {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    static fromApi(json: any) {
        return new CountModel(json['count']);
    }
}