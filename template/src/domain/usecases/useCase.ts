import { Failure } from "../failure";
import { Either } from "../../core/either";

export interface UseCase<Result, Params> {
  call(params: Params): Either<Failure, Result>;
}

export interface AsyncUseCase<Result, Params> {
  call(params: Params): Promise<Either<Failure, Result>>;
}
