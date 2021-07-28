const transpose = function(matrix) {
  const newMatrix = [];
  const rows = matrix[0].length;
  const columns = matrix.length;

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < columns; j++) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};

module.exports = transpose;