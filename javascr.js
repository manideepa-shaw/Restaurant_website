function show()
{
    document.getElementsByClassName("tools")[0].classList.toggle("open");
}

// close nav bar when clicking on any of tools
document.addEventListener("click",function(e){
    if(e.target.closest(".childs"))
    {
        show();
    }
})