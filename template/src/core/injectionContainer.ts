import { container } from "tsyringe";
import { CountRepositorImpl } from "../data/repositories/count/countRepositoryImpl";
import { CountRepository } from "../domain/repositories/count/countRepository";
import { GetCount } from "../domain/usecases/count/getCount";

// The Create react app template does not support decorators:
// https://create-react-app.dev/docs/can-i-use-decorators/
//
// As an alternative to using tsyringe's decorations on classes, dependencies must be manually
// registered below. They can resolved normally using container.resolve.
export const initializeInjectionContainer = () => {
  initializeRepositories();
  initializeUseCases();
};

const initializeRepositories = () => {
  container.registerSingleton(CountRepository.name, CountRepositorImpl);
};

const initializeUseCases = () => {
  container.register<GetCount>(GetCount.name, {
    useValue: new GetCount(container.resolve(CountRepository.name)),
  });
};
