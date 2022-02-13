import { Either } from "../../../core/either";
import { Count } from "../../entities/count/count";
import { Failure } from "../../failure";

export abstract class CountRepository {
  abstract getCount(amount: number): Promise<Either<Failure, Count>>;
}
