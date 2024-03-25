//all conditions

function condition(a,b,c){


  if(a>= 90032 && b>=50273.15 && c>=50000){
      document.querySelector('.body').style.backgroundImage='url(imgs/body34.png)';
      document.querySelector('.imgplace').style.backgroundImage='url(imgs/34.png)';
      document.getElementById('temp').innerHTML='vaprize';
   }
   else if(a>= 2192 && b>=1473.15 && c>=1200){
      document.querySelector('.body').style.backgroundImage='url(imgs/body33.png)';
      document.querySelector('.imgplace').style.backgroundImage='url(imgs/33.png)';
      document.getElementById('temp').innerHTML='bone burning';
   }
   else if(a>=1562 && b>=1123.15 && c>= 850){
     document.querySelector('.body').style.backgroundImage='url(imgs/body32.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/32.png)';
     document.getElementById('temp').innerHTML='mamximum pain';
   }
   else if(a>=1292 && b>=973.15 && c>= 700){
     document.querySelector('.body').style.backgroundImage='url(imgs/body31.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/31.png)';
     document.getElementById('temp').innerHTML='body burning';
   }
   else if(a>=1112 && b>=873.15 && c>= 600){
     document.querySelector('.body').style.backgroundImage='url(imgs/body30.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/30.png)';
     document.getElementById('temp').innerHTML='extremly cold';
   }
   else if(a>=212 && b>=373.15 && c>= 100){
     document.querySelector('.body').style.backgroundImage='url(imgs/body29.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/29.png)';
     document.getElementById('temp').innerHTML='lung burning';
   }
   else if(a>=149 && b>=338.15 && c>= 65){
     document.querySelector('.body').style.backgroundImage='url(imgs/body28.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/28.png)';
     document.getElementById('temp').innerHTML='skin burns';
   }
   else if(a>=134.6 && b>=330.15 && c>= 57){
     document.querySelector('.body').style.backgroundImage='url(imgs/body27.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/27.png)';
     document.getElementById('temp').innerHTML='noticing pain';
   }
   else if(a>=129.2 && b>=327.15 && c>= 54){
     document.querySelector('.body').style.backgroundImage='url(imgs/body26.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/26.png)';
     document.getElementById('temp').innerHTML='high chances to feint';
   }
   else if(a>=120.2 && b>=322.15 && c>= 49){
     document.querySelector('.body').style.backgroundImage='url(imgs/body25.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/25.png)';
     document.getElementById('temp').innerHTML=`eye can't focus`;
   }
   else if(a>=116.6 && b>=320.15 && c>= 47){
     document.querySelector('.body').style.backgroundImage='url(imgs/body24.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/24.png)';
     document.getElementById('temp').innerHTML=`heat halucination`;
   }
   else if(a>=113 && b>=318.15 && c>= 45){
     document.querySelector('.body').style.backgroundImage='url(imgs/body23.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/23.png)';
     document.getElementById('temp').innerHTML=`population can servive`;
   }
   else if(a>=105.8 && b>=314.15 && c>= 41){
     document.querySelector('.body').style.backgroundImage='url(imgs/body22.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/22.png)';
     document.getElementById('temp').innerHTML=`possible heart stock`;
   }//done
   else if(a>=100.4 && b>=311.15 && c>= 38){
     document.querySelector('.body').style.backgroundImage='url(imgs/body21.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/21.png)';
     document.getElementById('temp').innerHTML=`shortness of breath`;
   }
   else if(a>=95 && b>=308.15 && c>= 35){
     document.querySelector('.body').style.backgroundImage='url(imgs/body20.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/20.png)';
     document.getElementById('temp').innerHTML=`fatigue`;
   }
   else if(a>=93.2 && b>=307.15 && c>= 34){
     document.querySelector('.body').style.backgroundImage='url(imgs/body19.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/19.png)';
     document.getElementById('temp').innerHTML=`decresed blood pressure`;
   }
   else if(a>=89.6 && b>=305.15 && c>= 32){
     document.querySelector('.body').style.backgroundImage='url(imgs/body18.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/18.png)';
     document.getElementById('temp').innerHTML=`sweating`;
   }//done
   else if(a>=80.6 && b>=300.15 && c>= 27){
     document.querySelector('.body').style.backgroundImage='url(imgs/body17.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/17.png)';
     document.getElementById('temp').innerHTML=`start noticing heat`;
   }//
   else if(a>=66.2 && b>=292.15 && c>= 19){
     document.querySelector('.body').style.backgroundImage='url(imgs/body16.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/16.png)';
     document.getElementById('temp').innerHTML=`perfect temp`;
   }
   else if(a>=41 && b>=278.15 && c>= 5){
     document.querySelector('.body').style.backgroundImage='url(imgs/body15.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/15.png)';
     document.getElementById('temp').innerHTML=`mouth steam`;
   }//
   else if(a>=31.1 && b>=272.15 && c>= -0.5){
     document.querySelector('.body').style.backgroundImage='url(imgs/body14.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/14.png)';
     document.getElementById('temp').innerHTML=`frozen lips`;
   }
   else if(a>= -4 && b>=253.15 && c>= -20){
     document.querySelector('.body').style.backgroundImage='url(imgs/body13.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/13.png)';
     document.getElementById('temp').innerHTML=`frozen limbs`;
   }//
   else if(a>= -13 && b>=248.15 && c>= -25){
     document.querySelector('.body').style.backgroundImage='url(imgs/body12.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/12.png)';
     document.getElementById('temp').innerHTML=`blurry vision`;
   }//
   else if(a>= -27.4 && b>=240.15 && c>= -33){
     document.querySelector('.body').style.backgroundImage='url(imgs/body11.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/11.png)';
     document.getElementById('temp').innerHTML=`frostbit within 30 mins`;
   }//
   else if(a>= -49 && b>=228.15 && c>= -45){
     document.querySelector('.body').style.backgroundImage='url(imgs/body10.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/10.png)';
     document.getElementById('temp').innerHTML=`population survives`;
   }//
   else if(a>= -76 && b>=213.15 && c>= -60){
     document.querySelector('.body').style.backgroundImage='url(imgs/body9.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/9.png)';
     document.getElementById('temp').innerHTML=`possible to survive`;
   }//
   else if(a>= -121 && b>=188.15 && c>= -85){
     document.querySelector('.body').style.backgroundImage='url(imgs/body8.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/8.png)';
     document.getElementById('temp').innerHTML=`maximum cold felling`;
   }//
   else if(a>= -130 && b>=183.15 && c>= -90){
     document.querySelector('.body').style.backgroundImage='url(imgs/body7.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/7.png)';
     document.getElementById('temp').innerHTML=`frozen saliva`;
   }//
   else if(a>= -184 && b>=153.15 && c>= -120){
     document.querySelector('.body').style.backgroundImage='url(imgs/body6.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/6.png)';
     document.getElementById('temp').innerHTML=`broken lung`;
   }//
   else if(a>= -238 && b>=123.15 && c>= -150){
     document.querySelector('.body').style.backgroundImage='url(imgs/body5.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/5.png)';
     document.getElementById('temp').innerHTML=`extremly hot`;
   }//
   else if(a>= -328 && b>=73.15 && c>= -200){
     document.querySelector('.body').style.backgroundImage='url(imgs/body4.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/4.png)';
     document.getElementById('temp').innerHTML=`servivng few sec`;
   }//
   else if(a>= -362.2 && b>=54.15 && c>= -219){
     document.querySelector('.body').style.backgroundImage='url(imgs/body3.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/3.png)';
     document.getElementById('temp').innerHTML=`immpossible to breath`;
   }//
   else if(a>= -454 && b>=3.15 && c>= -270){
     document.querySelector('.body').style.backgroundImage='url(imgs/body2.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/2.png)';
     document.getElementById('temp').innerHTML=`instant frosbite`;
   }//
   else if(a>= -459 && b>=0.15 && c>= -273){
     document.querySelector('.body').style.backgroundImage='url(imgs/body1.png)';
     document.querySelector('.imgplace').style.backgroundImage='url(imgs/1.png)';
     document.getElementById('temp').innerHTML=`body atom frezz`;
   }
   else{
    document.querySelector('.body').style.backgroundImage='url(imgs/body0.png)';
    document.querySelector('.imgplace').style.backgroundImage='url(imgs/0.png)';
    document.getElementById('temp').innerHTML=`die!!!!!`;
   }

  }