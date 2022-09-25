$(function(){
  let last_id=1;
  $("#add").click(function(){
    if($(".header input").val()!==""){
      last_id++;
      let id=last_id;
               let listItem=document.createElement("li");
 listItem.innerHTML=  $(".header input").val();
      listItem.dataset.id=id;
      let closeBtn=document.createElement("button");
      closeBtn.class="close";
      closeBtn.innerHTML="&times;";
      listItem.append(closeBtn);
      if($(".listItems li").length===0){
        $(".listItems").html("");
      }
      $(".listItems").prepend(listItem);
      $(".header input").val("");
      $(closeBtn).click(function(){
       deleteItems(id);
      });
      $(listItem).click(function(){
        $(listItem).toggleClass("done");
      });
       }else{
         $(".header input").focus();
       }
  });
  function deleteItems(id){
   $(`.listItems li[data-id="${id}"]`).remove();
    if($(".listItems li").length===0){
       $(".listItems").html("<p class='allClear'>Everything is done</p>");
       }
  }
  $(".close").click(function(){
       $(this).parent("li").remove();
      if($(".listItems li").length===0){
       $(".listItems").html("<p class='allClear'>Everything is done</p>");
       }
      });
});