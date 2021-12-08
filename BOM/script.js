function backTo() {
   history.back();
}

function nextTo() {
  history.forward();
}

function pushState(){
  const Newstate = {userId:"62130500040", userName:"Noppasorn"};
  const title = "";
  const url = window.location;
  history.replaceState(Newstate, title, url);
  console.log("Run PushState Function Success!!!");
}

function readState(){
  let state = history.state;
  console.log(history.state);
  if(state == null ){
    return;
  }
  let text = `User Id: ${state.userId}, Username: ${state.userName}`
  let div = document.getElementById("showState");
  let h2 = document.createElement("h2");
  h2.innerText = text;
  div.appendChild(h2);
  console.log("Run ReadState Function Success!!!");
}

window.onload = readState();
document.getElementById("user-state").addEventListener("click",() => pushState());