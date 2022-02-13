import { Either, makeRight } from "../../../core/either";
import { Count } from "../../../domain/entities/count/count";
import { Failure } from "../../../domain/failure";
import { CountRepository } from "../../../domain/repositories/count/countRepository";
import { CountModel } from "../../models/count/countModel";

export class CountRepositorImpl implements CountRepository {
  getCount(amount: number): Promise<Either<Failure, Count>> {
    // A mock function to mimic making an async request for data
    return new Promise<Either<Failure, Count>>((resolve) => {
      const count = CountModel.fromApi({ count: amount });
      setTimeout(() => resolve(makeRight(count)), 500)
    });
  }
}
