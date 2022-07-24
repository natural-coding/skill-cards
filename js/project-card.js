window.addEventListener("DOMContentLoaded", function () {
   let nodeList = document.querySelectorAll('header > .svg-logo > svg path.wave');
   nodeList.forEach((p_item)=>{
      p_item.classList.add('entire-line');
   })

   nodeList = document.querySelectorAll('header > .svg-logo > svg path.star');
   nodeList.forEach((p_item)=>{
      p_item.classList.add('show');
   });

}
);
