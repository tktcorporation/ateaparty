import { SECTION } from "./constants";

export const getSectionHref = (section: SECTION): string => {
  return Object.keys(SECTION)[Object.values(SECTION).indexOf(section)];
};

const wrapPromise = <T>(
  promise: Promise<T>,
): {
  read(): T;
} => {
  let status = "pending";
  let result: T;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    },
  );
  return {
    read: () => {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
      throw new Error("Unexpected status");
    },
  };
};

export const createResource = <T>(
  promise: Promise<T>,
): {
  read(): T;
} => {
  return wrapPromise(promise);
};
