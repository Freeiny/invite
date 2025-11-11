 //계좌번호 복사스
 function copy(event) {    
    const copyText = event.target.previousElementSibling;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('감사합니다, 복사되었습니다.');
  }

  //화살표돌아가기
  const details = document.querySelectorAll('details')
  const arr = document.querySelectorAll('summary .arr-icon')
  for( let i = 0; i < details.length; i++) {
    details[i].addEventListener("toggle", (event) => {
    if (details[i].open) {
      arr[i].classList.add('up');
      arr[i].classList.remove('down');
    } else {
      arr[i].classList.remove('up');
      arr[i].classList.add('down');
    }
  });
  }

  // codeprotect
 
var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown=keycheck;
document.onkeyup=uncheckCtrlShift;
function keycheck()
{
  switch(event.keyCode){ 
    case 123:event.keyCode='';return false; break; //F12
    case 73:event.keyCode='';return false; break; //쉬프트
    case 17:event.keyCode='';keydownCtrl=1;return false; break; //컨트롤키
  }

  if(keydownCtrl) return false;
}
function uncheckCtrlShift()
{
  if(event.keyCode==17)  keydownCtrl=0;
  if(event.keyCode==16)  keydownShift=0;
}
    
function click() {
  if ((event.button==2) || (event.button==3)) {
  alert('우클릭은 사용할 수 없습니다!');
  }
  }
document.onmousedown=click


