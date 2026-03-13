let count = 0;
function addCommit() {
    count += 1;
    document.getElementById("commits").innerHTML = "Commits: " + count;
}