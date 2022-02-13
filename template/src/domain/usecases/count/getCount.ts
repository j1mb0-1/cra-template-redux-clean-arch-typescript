import { Either } from "../../../core/either";
import { Count } from "../../entities/count/count";
import { Failure } from "../../failure";
import { CountRepository } from "../../repositories/count/countRepository";
import { AsyncUseCase } from "../useCase";

export class GetCount implements AsyncUseCase<Count, GetCountParams> {
  constructor(private readonly counterRepository: CountRepository) {}

  call(params: GetCountParams): Promise<Either<Failure, Count>> {
    return this.counterRepository.getCount(params.amount);
  }
}

export interface GetCountParams {
  amount: number;
}