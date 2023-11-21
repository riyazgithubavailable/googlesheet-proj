let downBtn=document.querySelector(".download");
downBtn.addEventListener("click",exportData);
function exportData() {
    let fileData = JSON.stringify(state);
    let blob = new Blob([fileData], { type: "application/json" })
    let url = URL.createObjectURL(blob);
    // <a href="fileaddress" download="sheet.json"></a>
    let link = document.createElement("a");
    link.href = url;
    link.download = "sheet.json";
    link.click();
}
let openBtn = document.querySelector(".open");
openBtn.addEventListener("click", (e) => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

});