let count = 0;
document.getElementById("clicker").addEventListener("click", addCommit);
function addCommit() {
    count += 1;
    document.getElementById("commits").innerHTML = "Commits: " + count;
}