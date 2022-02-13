// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Set up injection container for tests
import "reflect-metadata";
import { initializeInjectionContainer } from "./core/injectionContainer";
initializeInjectionContainer();
