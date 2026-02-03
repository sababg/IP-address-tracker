export function initSearch(onSubmit: (ip: string) => void) {
  const submitButton = document.getElementById("submitButton");
  const IpInput = document.getElementById("searchInput");

  if (
    !(submitButton instanceof HTMLButtonElement) ||
    !(IpInput instanceof HTMLInputElement)
  ) {
    throw new Error("Search elements not found");
  }

  submitButton.addEventListener("click", () => {
    onSubmit(IpInput.value.trim());
  });
}
