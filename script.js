let oreCount = 0;

document.getElementById('mineButton').addEventListener('click', () => {
    oreCount++;
    document.getElementById('oreCount').textContent = oreCount;
});
