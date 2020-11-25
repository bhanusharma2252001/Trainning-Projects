const cards=$(".card");
cards.forEach(card => {
  card.click("click",()=>
  {
    $(".cards").css("display","none");
  })
});
 