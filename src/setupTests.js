import "@testing-library/jest-dom";
// vitest.setup.js
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

//establishing API mocking
beforeAll(() => server.listen());
//Reset handlers between tests
afterEach(() => server.resetHandlers());
//shuts down server after all tests are done
afterAll(() => server.close());
