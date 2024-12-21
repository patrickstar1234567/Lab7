
document.getElementById("submitButton").addEventListener("click", function () {
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid numbers for both grades.");
        return;
    }

    const tableBody = document.querySelector("#gradesTable tbody");
    const rowCount = tableBody.rows.length + 1;
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    // Add new row
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${rowCount}</td><td>${mathGrade}</td><td>${englishGrade}</td><td>${average}</td>`;

    // Update averages
    updateAverages();
});

function updateAverages() {
    const tableBody = document.querySelector("#gradesTable tbody");
    const mathCells = Array.from(tableBody.querySelectorAll("tr td:nth-child(2)"));
    const englishCells = Array.from(tableBody.querySelectorAll("tr td:nth-child(3)"));
    const averageCells = Array.from(tableBody.querySelectorAll("tr td:nth-child(4)"));

    const mathAverage = calculateColumnAverage(mathCells);
    const englishAverage = calculateColumnAverage(englishCells);
    const overallAverage = calculateColumnAverage(averageCells);

    document.getElementById("mathAverage").textContent = mathAverage.toFixed(2);
    document.getElementById("englishAverage").textContent = englishAverage.toFixed(2);
    document.getElementById("overallAverage").textContent = overallAverage.toFixed(2);
}

function calculateColumnAverage(cells) {
    const sum = cells.reduce((acc, cell) => acc + parseFloat(cell.textContent), 0);
    return cells.length ? sum / cells.length : 0;
}
