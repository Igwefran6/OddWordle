// Helper function to get random unique indices
export const getRandomIndices = (count: number, max: number) => {
  const indices = new Set();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * max);
    indices.add(randomIndex);
  }
  return Array.from(indices);
};
