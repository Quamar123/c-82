canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
colour="green"
widthline=2
var mouseevent=""
var lastx,lasty
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseevent="mouse_down"
    colour=document.getElementById("colour").value
  widthline=document.getElementById("width").value
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouse_up"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouse_leave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if(mouseevent=="mouse_down")
    {
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=widthline
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
    lastx=currentx
    lasty=currenty
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
