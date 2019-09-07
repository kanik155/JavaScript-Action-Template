/**
 * Convert status string to number
 * Return 0 (Status.Success) if argument word contains "success"
 * Return 1 (Status.Failure) if argument word contains "failure" or "cancelled"
 * @param status {string}
 */
export function getStatus(status: string): Status {
  const lowercase_status: string = status.toLowerCase();

  if (lowercase_status.includes('success')) {
    return Status.Success;
  } else if (lowercase_status.includes('failure')) {
    return Status.Failure;
  } else if (lowercase_status.includes('cancelled')) {
    return Status.Failure;
  } else {
    throw new Error('Allow words that contain "success", "failure" or "cancelled"');
  }
}

export enum Status {
  Success = 0,
  Failure = 1,
}
