// const matrix = [
//     [
//         1, 2, 3,10
//     ],
//     [
//         4, 5, 6,11
//     ],
//     [
//         7, 8, 9,12
//     ],

// ]
// const rotate = (matrix) => {
//     const result = []
//     const length = matrix.length
//     matrix.forEach((row, rowIndex) => {
//         const temp = [];
//         row.forEach((column, columnIndex) => {
//             temp.push(matrix[length - columnIndex - 1][rowIndex])
//         })
//         result.push(temp)
//     });
//     return result
// }
// const customRotate = (matrix, deg) => {
//     deg = (deg % 360) / 90;
//     deg += deg < 0 ? 4 : 0;
//     return Array.from({length: deg}).reduce((a, e) => {
//         return rotate(a)
//     }, matrix)
// }
// console.log(customRotate(matrix, 90));