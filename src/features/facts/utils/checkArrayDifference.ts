export enum ArrayDifference {
  ONE_MISSING = "ONE_MISSING",
  ONE_TOO_MUCH = "ONE_TOO_MUCH",
  ONE_WRONG = "ONE_WRONG",
  DIFFERENT = "DIFFERENT",
  IDENTICAL = "IDENTICAL"
}

export const checkArrayDifference = (
  checked: string[],
  required: string[],
  found: string[]
) => {
  const sortedChecked = checked.slice().sort();
  const sortedRequired = required.slice().sort();

  if (JSON.stringify(sortedChecked) === JSON.stringify(sortedRequired)) {
    return ArrayDifference.IDENTICAL;
  }

  const checkedNotRequired = checked.filter((x) => !required.includes(x));
  const requiredNotChecked = required.filter((x) => !checked.includes(x));
  const requiredNotFound = required.filter((x) => !found.includes(x));

  if (
    checkedNotRequired.length === requiredNotChecked.length &&
    requiredNotChecked.length === 1 &&
    requiredNotFound.length === 0
  ) {
    return ArrayDifference.ONE_WRONG;
  }

  if (
    checkedNotRequired.length === 1 &&
    checked.length - required.length === 1 &&
    requiredNotFound.length === 0
  ) {
    return ArrayDifference.ONE_TOO_MUCH;
  }

  if (requiredNotChecked.length === 1 && requiredNotFound.length === 0) {
    return ArrayDifference.ONE_MISSING;
  }

  return ArrayDifference.DIFFERENT;
};
