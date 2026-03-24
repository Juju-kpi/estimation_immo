export function estimatePrice({ surface, city }) {
  const pricePerM2 = {
    paris: 10000,
    lyon: 5000,
    marseille: 3500
  };

  return surface * (pricePerM2[city?.toLowerCase()] || 3000);
}