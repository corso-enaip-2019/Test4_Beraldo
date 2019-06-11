var cells = initGrid()

function initGrid() {
   
    var tbody = document.getElementById("main-table")
    var cells = []
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr")
        for (var j = 0; j < 6; j++) {
            var cell = createCell(i, j)
            row.appendChild(cell)
            cells.push(cell)
        }
        table.appendChild(row);
    }
    return cells
}
function createCell(i, j) {
  var cell = document.createElement("td")
    cell.id = i * 3 + j + 1

    return cell
}

var Shapes{
    First: [[0, 1][1, 1]],
    Second: [[1, 1][0, 1]],
    Third: [[1, 1][1, 0]],
    Four: [[1, 0][1, 1]],
};


