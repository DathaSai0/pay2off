export const saveToRecentSearch = (name) => {
  if (!name) return;
  let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  // Remove duplicates
  recentSearches = recentSearches.filter((item) => item !== name);
  // Add new search to top
  recentSearches.unshift(name);
  // Keep only latest 10 entries
  if (recentSearches.length > 10) recentSearches.pop();
  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
};
