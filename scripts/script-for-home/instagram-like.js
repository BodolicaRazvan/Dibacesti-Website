// Instagram Like
function likeButton(event){
  let heart= event;
  let likes= document.querySelectorAll('.likes');
    if(heart.src.match("/images/heart.png")){
    heart.src = "/images/heart-red.png";
    likes.forEach(element =>{
      var matches = element.innerHTML.match(/(\d+)/);
            if (matches) {
              let str =(Number(matches[0])+1).toString();
              console.log(str);
                element.innerHTML = str + ' likes';
            }
    });
  }
  else{
    heart.src = "/images/heart.png";
    likes.forEach(element =>{
      var matches = element.innerHTML.match(/(\d+)/);
      console.log(matches);
            if (matches) {
                let str =(Number(matches[0])-1).toString();
                element.innerHTML = str + ' likes';
            }
    });
  }
}
//----------------



