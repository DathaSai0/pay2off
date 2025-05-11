export function formatDateToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export const getRemainingDays = (dateString) => {
  const now = new Date();
  const targetDate = new Date(dateString);
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return isNaN(diffDays) ? null : diffDays;
};
