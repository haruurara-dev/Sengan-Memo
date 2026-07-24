const morningMemo=document.getElementById("morningMemo");
const saveMorning=document.getElementById("saveMorning");
const backButton=document.getElementById("backButton");

const nightMemo=document.getElementById("nightMemo");
const saveNight=document.getElementById("saveNight");

if (morningMemo){
    morningMemo.value=localStorage.getItem("morningMemo") ||"";
    saveMorning.addEventListener("click", function(){
        localStorage.setItem("morningMemo", morningMemo.value);
        alert("朝洗顔メモを保存しました。")
    });
    backButton.addEventListener("click", function(){
        location.href="sengan_01_index.html";
    });
}

if (nightMemo){
    nightMemo.value=localStorage.getItem("nightMemo") ||"";
    saveNight.addEventListener("click", function(){
        localStorage.setItem("nightMemo", nightMemo.value);
        alert("夜洗顔メモを保存しました。")
    });
    backButton.addEventListener("click", function(){
        location.href="sengan_01_index.html";
    });
}