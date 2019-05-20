  document.addEventListener("DOMContentLoaded", function(event) {
      jsSizes();
  });


  function jsSizes(){
    const padding = document.getElementsByClassName('js-padding');
    const pt = 'pt';
    const pb = 'pb';
    const px = 'px';
    const py = 'py';
    const pl = 'pl';
    const pr = 'pr';

    for(let i = 0; i < padding.length; i++){
      let thisElement = padding[i];
      const classList = thisElement.classList;

      classList.forEach(function(paddingClass){

        if(paddingClass.lastIndexOf(pt) >= 0 ){
          thisElement.style.paddingTop = paddingClass.slice(2) + 'px';
        }
        else if(paddingClass.lastIndexOf(pb) >= 0 ){
          thisElement.style.paddingBottom = paddingClass.slice(2) + 'px';
        }
        else if(paddingClass.lastIndexOf(px) >= 0 ){
          thisElement.style.paddingLeft = paddingClass.slice(2) + 'px';
          thisElement.style.paddingRight = paddingClass.slice(2) + 'px';
        }
        else if(paddingClass.lastIndexOf(py) >= 0 ){
          thisElement.style.paddingTop = paddingClass.slice(2) + 'px';
          thisElement.style.paddingBottom = paddingClass.slice(2) + 'px';
        }
        else if(paddingClass.lastIndexOf(pl) >= 0 ){
          thisElement.style.paddingLeft = paddingClass.slice(2) + 'px';
        }
        else if(paddingClass.lastIndexOf(pr) >= 0 ){
          thisElement.style.paddingRight = paddingClass.slice(2) + 'px';
        }

      });

    }

  }
