let randomColorBtn = document.getElementById("btn")
randomColorBtn.addEventListener('click', function () {
    let hexColor = "#"
    let hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 6; i++) {
        const hexValuesIndex = Math.floor(Math.random(hexValues) * hexValues.length);

        hexColor += hexValues[hexValuesIndex];
    }
    document.body.style.backgroundColor = hexColor;
    document.getElementById("color").innerText = hexColor;
})