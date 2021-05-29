function ShowTime()
{
    document.getElementById("Time").style.display = "block";
}

function enforceMinMaxDD(el){
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
    }
 }
}

function enforceMinMaxMM(el){
  if(el.value != ""){
    if(parseInt(el.value) < parseInt(el.min)){
      el.value = el.min;
    }
    if(parseInt(el.value) > parseInt(el.max)){
      el.value = el.max;
    }
  }
}

var CurrentDateY = new Date().toLocaleString("en-UK").split(" ")[0]
RealTime = CurrentDateY.slice(0, -1).replaceAll("/", " ");

var Title, Post, Time
function Ready() 
{

  Title = document.getElementById("Title").value;
  Post = document.getElementById("MainPost").value;
  Time = (document.getElementById("DD").value ) + " " + (document.getElementById("MM").value) + " " + (document.getElementById("YYYY").value)
}

document.getElementById("Submit").onclick =function()
{
  Ready();
  if (Time == false){
    Time = RealTime

  }
  firebase.database().ref("Posts/" + Time).set({
    TitleOfPost:Title,
    PostText:Post
  

  });
  document.getElementById("Title").value = "";
  document.getElementById("MainPost").value = "";
  document.getElementById("DD").value = "";
  document.getElementById("MM").value = "";
  document.getElementById("YYYY").value = "";
  console.log(Time)
}

document.getElementById("YYYY").onchange = function(){
  Ready();
  firebase.database().ref("Posts/" + Time).on("value", function(snapshot){
    document.getElementById("Title").value = snapshot.val().TitleOfPost;
    document.getElementById("MainPost").value = snapshot.val().PostText;
  });
}
document.getElementById("Delete").onclick = function(){
  Ready();
  firebase.database().ref("Posts/" + Time).remove();
  document.getElementById("Title").value = "";
  document.getElementById("MainPost").value = "";
  document.getElementById("DD").value = "";
  document.getElementById("MM").value = "";
  document.getElementById("YYYY").value = "";
};