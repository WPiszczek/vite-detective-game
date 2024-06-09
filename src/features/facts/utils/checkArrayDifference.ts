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

  console.log("----------");
  console.log("checked", checked);
  console.log("required", required);
  console.log("found", found);

  console.log("checkedNotRequired", checkedNotRequired);
  console.log("requiredNotChecked", requiredNotChecked);
  console.log("requiredNotFound", requiredNotFound);

  let checkedRequiredCount = 0;
  let checkedNotRequiredCount = 0;
  checked.forEach((x) => {
    if (required.includes(x)) checkedRequiredCount += 1;
    else checkedNotRequiredCount += 1;
  });

  console.log("checkedRequiredCount", checkedRequiredCount);
  console.log("checkedNotRequiredCount", checkedNotRequiredCount);

  let requiredCheckedCount = 0;
  let requiredNotCheckedCount = 0;
  required.forEach((x) => {
    if (checked.includes(x)) requiredCheckedCount += 1;
    else requiredNotCheckedCount += 1;
  });

  console.log("requiredCheckedCount", requiredCheckedCount);
  console.log("requiredNotCheckedCount", requiredNotCheckedCount);

  if (requiredNotCheckedCount > 1 || checkedNotRequiredCount > 1) {
    return ArrayDifference.DIFFERENT;
  }

  if (
    checkedNotRequired.length === requiredNotChecked.length &&
    requiredNotChecked.length === 1
  ) {
    return ArrayDifference.ONE_WRONG;
  }

  if (
    checkedNotRequired.length === 1 &&
    checked.length - required.length === 1
  ) {
    return ArrayDifference.ONE_TOO_MUCH;
  }

  if (requiredNotChecked.length === 1) {
    return ArrayDifference.ONE_MISSING;
  }

  return ArrayDifference.DIFFERENT;
};
