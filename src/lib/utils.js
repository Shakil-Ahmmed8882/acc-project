export function handleError(error) {
  console.error(error);
  return {
    success: false,
    message: error.message || "An unexpected error occurred",
  };
}
