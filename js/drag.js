function handleDragStart(e) {
  this.style.opacity = ".5";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}
//拖拽完成后，作用在拖拽元素上
function handleDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}
//拖拽完成后，作用在被拖拽元素上
function handleDragEnd(e) {
  this.style.opacity = "1";
  [].forEach.call(li, function(d) {
    d.classList.remove("over");
  });
}
var ul = document.getElementById("list");
var li = ul.getElementsByTagName("li");
[].forEach.call(li, function(d) {
  d.addEventListener("dragstart", handleDragStart, false);
  d.addEventListener("dragenter", handleDragEnter, false);
  d.addEventListener("dragover", handleDragOver, false);
  d.addEventListener("dragleave", handleDragLeave, false);
  d.addEventListener("drop", handleDrop, false);
  d.addEventListener("dragend", handleDragEnd, false);
});
