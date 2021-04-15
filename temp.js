{
  {
    let b=['SUN','MON','TUE','WED','THU','FRI','SAT'];
    $('#triggerday')[0].innerHTML=b[new Date().getDay()];
    $('#triggerdate')[0].innerHTML=new Date().getDate();
  }
  $('#trigger').click(function() {
    let alldata='        <div id="screenhead1"><span id="calendar">CALENDAR</span></div>        <div id="screenhead2">          <i class="fa fa-angle-left" id="leftarr"></i>          <span id="month"></span>          <i class="fa fa-angle-right" id="rightarr"></i>        </div>        <div id="days">          <div id="day"><span id="daytext">SUN</span></div>          <div id="day"><span id="daytext">MON</span></div>          <div id="day"><span id="daytext">TUE</span></div>          <div id="day"><span id="daytext">WED</span></div>          <div id="day"><span id="daytext">THU</span></div>          <div id="day"><span id="daytext">FRI</span></div>          <div id="day"><span id="daytext">SAT</span></div>        </div>        <div id="dates">        </div>        <div id="occasion">          <div id="vacation"><span id="occationtext">Vacation</span></div>          <div id="walk"><span id="occationtext">Walk</span></div>          <div id="fishing"><span id="occationtext">Fishing</span></div>          <div id="weekend"><span id="occationtext">Weekend</span></div>          <div id="addnew">            <i class="fa fa-plus-circle" id="leftarr"></i>            <input id="addnewbutton" type="text" name="" value="" placeholder="Addnew">          </div>          <div id="reset"><span id="occationtext">Reset</span></div>        </div>'
    $('#screen')[0].innerHTML=alldata;

    {
      //function day typing
      {
        let d = new Date();
        let currentmonth=d.getMonth()+1;
        let year=d.getFullYear();
        let monthdata=['','January','February','March','April','May','June','July','August','September','October','November','December'];
        d.setDate(1);
        let dday=d.getDay();
        if(dday==7){dday=0;}
        enterdays(dday+1,(new Date().getMonth()+1));
        $('#leftarr').click(function() {
          if (currentmonth>1) {
            let th=document.querySelectorAll('#date');
            $('#dates')[0].innerHTML='';
            currentmonth--;
            if(($(th[0].innerHTML)[0].innerHTML-1)>20){
              if ((8-(($(th[0].innerHTML)[0].innerHTML-1)%7))<8) {
                enterdays((8-(($(th[0].innerHTML)[0].innerHTML-1)%7)),currentmonth)
              }
              else{
                enterdays(1,currentmonth);
              }
            }
            else {
              let days=0;
              if(currentmonth==1||currentmonth==3||currentmonth==5||currentmonth==7||currentmonth==8||currentmonth==10||currentmonth==12){
                days=31;
              }
              else if(currentmonth==2){
                days=28;
              }
              else{
                days=30;
              }
              enterdays((8-(days%7)),currentmonth);
            }
          }
          else{
            let th=document.querySelectorAll('#date');
            $('#dates')[0].innerHTML='';
            currentmonth=13;
            year--;
            currentmonth--;
            if(($(th[0].innerHTML)[0].innerHTML-1)>20){
              if ((8-(($(th[0].innerHTML)[0].innerHTML-1)%7))<8) {
                enterdays((8-(($(th[0].innerHTML)[0].innerHTML-1)%7)),currentmonth)
              }
              else{
                enterdays(1,currentmonth);
              }
            }
            else {
              let days=0;
              if(currentmonth==1||currentmonth==3||currentmonth==5||currentmonth==7||currentmonth==8||currentmonth==10||currentmonth==12){
                days=31;
              }
              else if(currentmonth==2){
                days=28;
              }
              else{
                days=30;
              }
              enterdays((8-(days%7)),currentmonth);
            }
          }
        });

        $('#rightarr').click(function() {
          if (currentmonth<12) {
            let th=document.querySelectorAll('#date');
            $('#dates')[0].innerHTML='';
            currentmonth++;
            if ((8-$(th[th.length-1].innerHTML)[0].innerHTML)>0) {
              enterdays((8-$(th[th.length-1].innerHTML)[0].innerHTML),currentmonth)
            }
            else{
              enterdays(1,currentmonth);
            }
          }
          else{
            let th=document.querySelectorAll('#date');
            $('#dates')[0].innerHTML='';
            currentmonth=0;
            currentmonth++;
            year++;
            if ((8-$(th[th.length-1].innerHTML)[0].innerHTML)>0) {
              enterdays((8-$(th[th.length-1].innerHTML)[0].innerHTML),currentmonth)
            }
            else{
              enterdays(1,currentmonth);
            }
          }
        });
        function enterdays(day,month) {
          $('#month')[0].innerHTML=monthdata[month]+' '+year;
          let ndays=0;
          if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
            ndays=31;
          }
          else if(month==2){
            ndays=28;
          }
          else{
            ndays=30;
          }
          let extradaystart=0;
          if(currentmonth==1){
            extradaystart=31-day+2;
          }
          else if(currentmonth==8){
            extradaystart=31-day+2;
          }
          else if(ndays==31&&currentmonth==3){
            extradaystart=28-day+2;
          }
          else if(ndays==31){
            extradaystart=30-day+2;
          }
          else if(ndays==30){
            extradaystart=31-day+2;
          }
          else{
            extradaystart=31-day+2;
          }
          let count=0;
          for(let i=0;i<day-1;i++){
            count++;
            $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+(extradaystart+i)+'</span></div>');
          }
          for(let i=1;i<=ndays;i++){
            count++;
            $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetext">'+i+'</span></div>');
          }
          let dayleft=0;
          if(count<=35){
            dayleft=35-count;
          }
          else if(count<42){
            dayleft=42-count;
          }
          for(let i=1;i<=dayleft;i++){
            $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+i+'</span></div>');
          }
        }
      }
      function turnonslider(clickval)
      {
        let allele=document.querySelectorAll('#datex');
        let htop=allele[1].offsetTop+40;
        allele=document.querySelectorAll('#date');
        htop=date[date.length-1].offsetTop+40-htop;
        {
          $('#vacation').css('top','-'+htop+'px');
          $('#walk').css('top','-'+htop+'px');
          $('#fishing').css('top','-'+htop+'px');
          $('#weekend').css('top','-'+htop+'px');
          $('#addnew').css('top','-'+htop+'px');
          $('#reset').css('top','-'+htop+'px');
        }
        {
          let i=-160;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#vacation').css('left',i+'px');}
          },10);
        }
        {
          let i=-280;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#walk').css('left',i+'px');}
          },10);
        }
        {
          let i=-120;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#fishing').css('left',i+'px');}
          },10);
        }
        {
          let i=-280;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#weekend').css('left',i+'px');}
          },10);
        }
        {
          let i=-280;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#addnew').css('left',i+'px');}
          },10);
        }
        {
          let i=-280;
          let a=setInterval(function() {
            i+=5;
            if(i>0){clearInterval(a);}
            else{$('#reset').css('left',i+'px');}
          },10);
        }
      }

      // animation occasion
      {
        //#5da79b
        let buttonclick=1;
        let ab;
        $.fn.isAfter = function(sel){
          return this.prevAll(sel).length !== 0;
        }
        $.fn.isBefore= function(sel){
          return this.nextAll(sel).length !== 0;
        }
        function addevent() {
          this.style.backgroundColor='#5da79b';
          this.style.color='white';
          if($(ab).index()<$(this).index()){
            $(ab).nextUntil(this).css("background-color", "#68baad");
            $(ab).nextUntil(this).css("color", "white");
            let inele=$(ab).nextUntil(this);
            for (let i = 0; i < inele.length; i++) {
              inele[i].id='datexi';
            }
          }
          else{
            $(this).nextUntil(ab).css("background-color", "#68baad");
            $(this).nextUntil(ab).css("color", "white");
            let inele=$(this).nextUntil(ab);
            for (let i = 0; i < inele.length; i++) {
              inele[i].id='datexi';
            }
          }
        }
        function removeevent() {
          this.style.backgroundColor='white';
          this.style.color='black';
          $(ab).nextUntil(this).css("background-color", "white");
          $(ab).nextUntil(this).css("color", "black");
          let inele=$(ab).nextUntil(this);
          for (let i = 0; i < inele.length; i++) {
            inele[i].id='date';
          }
          if($(ab).index()<$(this).index()){
            $(ab).nextUntil(this).css("background-color", "white");
            $(ab).nextUntil(this).css("color", "black");
            let inele=$(ab).nextUntil(this);
            for (let i = 0; i < inele.length; i++) {
              inele[i].id='date';
            }
          }
          else{
            $(this).nextUntil(ab).css("background-color", "white");
            $(this).nextUntil(ab).css("color", "black");
            let inele=$(this).nextUntil(ab);
            for (let i = 0; i < inele.length; i++) {
              inele[i].id='date';
            }
          }
        }
        function dateclicked(a) {
          ab=a;
          if(buttonclick==1){
            a.id='datex';
            a.style.backgroundColor='#5da79b';
            let span = a.getElementsByTagName("span");
            span[0].style.color='white';
            document.querySelectorAll('#date').forEach(item => {
              item.addEventListener('mouseenter', addevent);
              item.addEventListener('mouseleave', removeevent);
            });
            buttonclick=2;
          }
          else if(buttonclick==2){
            document.querySelectorAll('#date').forEach(item => {
              item.removeEventListener('mouseenter', addevent);
              item.removeEventListener('mouseleave', removeevent);
            });
            document.querySelectorAll('#datexi').forEach(item => {
              item.removeEventListener('mouseenter', addevent);
              item.removeEventListener('mouseleave', removeevent);
            });
            a.id='datex';
            document.querySelectorAll('#date').forEach(item => {
              item.addEventListener('mouseenter', function() {
                this.style.backgroundColor='white';
                this.style.color='black';
              });
            });

            functionName();
            turnonslider(a);
            a.style.backgroundColor='#5da79b';
            buttonclick=3;

          }
        }
      }

      function functionName() {
        $('#vacation').click(function() {

          let datax=document.querySelectorAll('#datex');
          let dataxi=document.querySelectorAll('#datexi');
          if(document.querySelectorAll('#colorslider1').length==0){
            for (let i = 0; i < datax.length; i++) {
              $(datax[i]).prepend("</div><div id='colorslider1'></div>");
            }
            for (let i = 0; i < dataxi.length; i++) {
              $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
            }
          }
          resetcolorslider();
          for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
            document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#bd677d';
          }
          for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
            document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#d3738b';
          }
          //moving animation
          datax[0].querySelector('#colorslider1').style.marginLeft='0px';
          let j = 0
          let interval=setInterval(function(){
            let dataxi=document.querySelectorAll('#datexi');
            if (j+1 > dataxi.length) {
              datax[1].querySelector('#colorslider1').style.marginLeft='0px';
              clearInterval(interval);
            }
            else {
              dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
            }
            j++;
          },50);

        });
        $('#walk').click(function() {

          let datax=document.querySelectorAll('#datex');
          let dataxi=document.querySelectorAll('#datexi');
          if(document.querySelectorAll('#colorslider1').length==0){
            for (let i = 0; i < datax.length; i++) {
              $(datax[i]).prepend("</div><div id='colorslider1'></div>");
            }
            for (let i = 0; i < dataxi.length; i++) {
              $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
            }
          }
          resetcolorslider();
          for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
            document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#6578c5';
          }
          for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
            document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#7186db';
          }
          //moving animation
          datax[0].querySelector('#colorslider1').style.marginLeft='0px';
          let j = 0
          let interval=setInterval(function(){
            let dataxi=document.querySelectorAll('#datexi');
            if (j+1 > dataxi.length) {
              datax[1].querySelector('#colorslider1').style.marginLeft='0px';
              clearInterval(interval);
            }
            else {
              dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
            }
            j++;
          },50);

        });
        $('#fishing').click(function() {

          let datax=document.querySelectorAll('#datex');
          let dataxi=document.querySelectorAll('#datexi');
          if(document.querySelectorAll('#colorslider1').length==0){
            for (let i = 0; i < datax.length; i++) {
              $(datax[i]).prepend("</div><div id='colorslider1'></div>");
            }
            for (let i = 0; i < dataxi.length; i++) {
              $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
            }
          }
          resetcolorslider();
          for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
            document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#805b7c';
          }
          for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
            document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#8f658a';
          }
          //moving animation
          datax[0].querySelector('#colorslider1').style.marginLeft='0px';
          let j = 0
          let interval=setInterval(function(){
            let dataxi=document.querySelectorAll('#datexi');
            if (j+1 > dataxi.length) {
              datax[1].querySelector('#colorslider1').style.marginLeft='0px';
              clearInterval(interval);
            }
            else {
              dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
            }
            j++;
          },50);

        });
        $('#weekend').click(function() {

          let datax=document.querySelectorAll('#datex');
          let dataxi=document.querySelectorAll('#datexi');
          if(document.querySelectorAll('#colorslider1').length==0){
            for (let i = 0; i < datax.length; i++) {
              $(datax[i]).prepend("</div><div id='colorslider1'></div>");
            }
            for (let i = 0; i < dataxi.length; i++) {
              $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
            }
          }
          resetcolorslider();
          for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
            document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#dead79';
          }
          for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
            document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#f7c187';
          }
          //moving animation
          datax[0].querySelector('#colorslider1').style.marginLeft='0px';
          let j = 0
          let interval=setInterval(function(){
            let dataxi=document.querySelectorAll('#datexi');
            if (j+1 > dataxi.length) {
              datax[1].querySelector('#colorslider1').style.marginLeft='0px';
              clearInterval(interval);
            }
            else {
              dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
            }
            j++;
          },50);

        });
        $('#addnew').click(function() {

          let datax=document.querySelectorAll('#datex');
          let dataxi=document.querySelectorAll('#datexi');
          if(document.querySelectorAll('#colorslider1').length==0){
            for (let i = 0; i < datax.length; i++) {
              $(datax[i]).prepend("</div><div id='colorslider1'></div>");
            }
            for (let i = 0; i < dataxi.length; i++) {
              $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
            }
          }
          resetcolorslider();
          for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
            document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#4fa093';
          }
          for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
            document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#58b2a4';
          }
          //moving animation
          datax[0].querySelector('#colorslider1').style.marginLeft='0px';
          let j = 0
          let interval=setInterval(function(){
            let dataxi=document.querySelectorAll('#datexi');
            if (j+1 > dataxi.length) {
              datax[1].querySelector('#colorslider1').style.marginLeft='0px';
              clearInterval(interval);
            }
            else {
              dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
            }
            j++;
          },50);

        });
      }
      function resetcolorslider()
      {
        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        datax[0].style.transition='0s';
        datax[1].style.transition='0s';
        datax[0].querySelector('#colorslider1').style.marginLeft='-40px';
        datax[1].querySelector('#colorslider1').style.marginLeft='-40px';
        if($('#colorslider1').css('background-color')!='rgba(0, 0, 0, 0)'){
          datax[0].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
          datax[1].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
          for (let i = 0; i < dataxi.length; i++) {
            dataxi[i].style.transition='0s';
            dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
            dataxi[i].style.backgroundColor=dataxi[i].querySelector('#colorslider2').style.backgroundColor;
          }
        }
        else{
          datax[0].style.backgroundColor='#4fa093';
          datax[1].style.backgroundColor='#4fa093';
          for (let i = 0; i < dataxi.length; i++) {
            dataxi[i].style.transition='0s';
            dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
            dataxi[i].style.backgroundColor='#58b2a4';
          }
        }
      }


      //reset button
      {
        $('#reset').click(function() {
          location.reload();
        });
        $('#homebutton').click(function() {
          location.reload();
        });
      }
    }

  });
  {
    //function day typing
    {
      let d = new Date();
      let currentmonth=d.getMonth()+1;
      let year=d.getFullYear();
      let monthdata=['','January','February','March','April','May','June','July','August','September','October','November','December'];
      d.setDate(1);
      let dday=d.getDay();
      if(dday==7){dday=0;}
      $('#leftarr').click(function() {
        if (currentmonth>1) {
          let th=document.querySelectorAll('#date');
          $('#dates')[0].innerHTML='';
          currentmonth--;
          if(($(th[0].innerHTML)[0].innerHTML-1)>20){
            if ((8-(($(th[0].innerHTML)[0].innerHTML-1)%7))<8) {
              enterdays((8-(($(th[0].innerHTML)[0].innerHTML-1)%7)),currentmonth)
            }
            else{
              enterdays(1,currentmonth);
            }
          }
          else {
            let days=0;
            if(currentmonth==1||currentmonth==3||currentmonth==5||currentmonth==7||currentmonth==8||currentmonth==10||currentmonth==12){
              days=31;
            }
            else if(currentmonth==2){
              days=28;
            }
            else{
              days=30;
            }
            enterdays((8-(days%7)),currentmonth);
          }
        }
        else{
          let th=document.querySelectorAll('#date');
          $('#dates')[0].innerHTML='';
          currentmonth=13;
          year--;
          currentmonth--;
          if(($(th[0].innerHTML)[0].innerHTML-1)>20){
            if ((8-(($(th[0].innerHTML)[0].innerHTML-1)%7))<8) {
              enterdays((8-(($(th[0].innerHTML)[0].innerHTML-1)%7)),currentmonth)
            }
            else{
              enterdays(1,currentmonth);
            }
          }
          else {
            let days=0;
            if(currentmonth==1||currentmonth==3||currentmonth==5||currentmonth==7||currentmonth==8||currentmonth==10||currentmonth==12){
              days=31;
            }
            else if(currentmonth==2){
              days=28;
            }
            else{
              days=30;
            }
            enterdays((8-(days%7)),currentmonth);
          }
        }
      });

      $('#rightarr').click(function() {
        if (currentmonth<12) {
          let th=document.querySelectorAll('#date');
          $('#dates')[0].innerHTML='';
          currentmonth++;
          if ((8-$(th[th.length-1].innerHTML)[0].innerHTML)>0) {
            enterdays((8-$(th[th.length-1].innerHTML)[0].innerHTML),currentmonth)
          }
          else{
            enterdays(1,currentmonth);
          }
        }
        else{
          let th=document.querySelectorAll('#date');
          $('#dates')[0].innerHTML='';
          currentmonth=0;
          currentmonth++;
          year++;
          if ((8-$(th[th.length-1].innerHTML)[0].innerHTML)>0) {
            enterdays((8-$(th[th.length-1].innerHTML)[0].innerHTML),currentmonth)
          }
          else{
            enterdays(1,currentmonth);
          }
        }
      });
      function enterdays(day,month) {
        $('#month')[0].innerHTML=monthdata[month]+' '+year;
        let ndays=0;
        if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
          ndays=31;
        }
        else if(month==2){
          ndays=28;
        }
        else{
          ndays=30;
        }
        let extradaystart=0;
        if(currentmonth==1){
          extradaystart=31-day+2;
        }
        else if(currentmonth==8){
          extradaystart=31-day+2;
        }
        else if(ndays==31&&currentmonth==3){
          extradaystart=28-day+2;
        }
        else if(ndays==31){
          extradaystart=30-day+2;
        }
        else if(ndays==30){
          extradaystart=31-day+2;
        }
        else{
          extradaystart=31-day+2;
        }
        let count=0;
        for(let i=0;i<day-1;i++){
          count++;
          $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+(extradaystart+i)+'</span></div>');
        }
        for(let i=1;i<=ndays;i++){
          count++;
          $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetext">'+i+'</span></div>');
        }
        let dayleft=0;
        if(count<=35){
          dayleft=35-count;
        }
        else if(count<42){
          dayleft=42-count;
        }
        for(let i=1;i<=dayleft;i++){
          $('#dates').append('<div id="date" onclick="dateclicked(this)"><span id="datetextextra">'+i+'</span></div>');
        }
      }
    }
    function turnonslider(clickval)
    {
      let allele=document.querySelectorAll('#datex');
      let htop=allele[1].offsetTop+40;
      allele=document.querySelectorAll('#date');
      htop=date[date.length-1].offsetTop+40-htop;
      {
        $('#vacation').css('top','-'+htop+'px');
        $('#walk').css('top','-'+htop+'px');
        $('#fishing').css('top','-'+htop+'px');
        $('#weekend').css('top','-'+htop+'px');
        $('#addnew').css('top','-'+htop+'px');
        $('#reset').css('top','-'+htop+'px');
      }
      {
        let i=-160;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#vacation').css('left',i+'px');}
        },10);
      }
      {
        let i=-280;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#walk').css('left',i+'px');}
        },10);
      }
      {
        let i=-120;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#fishing').css('left',i+'px');}
        },10);
      }
      {
        let i=-280;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#weekend').css('left',i+'px');}
        },10);
      }
      {
        let i=-280;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#addnew').css('left',i+'px');}
        },10);
      }
      {
        let i=-280;
        let a=setInterval(function() {
          i+=5;
          if(i>0){clearInterval(a);}
          else{$('#reset').css('left',i+'px');}
        },10);
      }
    }

    // animation occasion
    {
      //#5da79b
      let buttonclick=1;
      let ab;
      $.fn.isAfter = function(sel){
        return this.prevAll(sel).length !== 0;
      }
      $.fn.isBefore= function(sel){
        return this.nextAll(sel).length !== 0;
      }
      function addevent() {
        this.style.backgroundColor='#5da79b';
        this.style.color='white';
        if($(ab).index()<$(this).index()){
          $(ab).nextUntil(this).css("background-color", "#68baad");
          $(ab).nextUntil(this).css("color", "white");
          let inele=$(ab).nextUntil(this);
          for (let i = 0; i < inele.length; i++) {
            inele[i].id='datexi';
          }
        }
        else{
          $(this).nextUntil(ab).css("background-color", "#68baad");
          $(this).nextUntil(ab).css("color", "white");
          let inele=$(this).nextUntil(ab);
          for (let i = 0; i < inele.length; i++) {
            inele[i].id='datexi';
          }
        }
      }
      function removeevent() {
        this.style.backgroundColor='white';
        this.style.color='black';
        $(ab).nextUntil(this).css("background-color", "white");
        $(ab).nextUntil(this).css("color", "black");
        let inele=$(ab).nextUntil(this);
        for (let i = 0; i < inele.length; i++) {
          inele[i].id='date';
        }
        if($(ab).index()<$(this).index()){
          $(ab).nextUntil(this).css("background-color", "white");
          $(ab).nextUntil(this).css("color", "black");
          let inele=$(ab).nextUntil(this);
          for (let i = 0; i < inele.length; i++) {
            inele[i].id='date';
          }
        }
        else{
          $(this).nextUntil(ab).css("background-color", "white");
          $(this).nextUntil(ab).css("color", "black");
          let inele=$(this).nextUntil(ab);
          for (let i = 0; i < inele.length; i++) {
            inele[i].id='date';
          }
        }
      }
      function dateclicked(a) {
        ab=a;
        if(buttonclick==1){
          a.id='datex';
          a.style.backgroundColor='#5da79b';
          let span = a.getElementsByTagName("span");
          span[0].style.color='white';
          document.querySelectorAll('#date').forEach(item => {
            item.addEventListener('mouseenter', addevent);
            item.addEventListener('mouseleave', removeevent);
          });
          buttonclick=2;
        }
        else if(buttonclick==2){
          document.querySelectorAll('#date').forEach(item => {
            item.removeEventListener('mouseenter', addevent);
            item.removeEventListener('mouseleave', removeevent);
          });
          document.querySelectorAll('#datexi').forEach(item => {
            item.removeEventListener('mouseenter', addevent);
            item.removeEventListener('mouseleave', removeevent);
          });
          a.id='datex';
          document.querySelectorAll('#date').forEach(item => {
            item.addEventListener('mouseenter', function() {
              this.style.backgroundColor='white';
              this.style.color='black';
            });
          });

          functionName();
          turnonslider(a);
          a.style.backgroundColor='#5da79b';
          buttonclick=3;

        }
      }
    }

    function functionName() {
      $('#vacation').click(function() {

        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        if(document.querySelectorAll('#colorslider1').length==0){
          for (let i = 0; i < datax.length; i++) {
            $(datax[i]).prepend("</div><div id='colorslider1'></div>");
          }
          for (let i = 0; i < dataxi.length; i++) {
            $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
          }
        }
        resetcolorslider();
        for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
          document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#bd677d';
        }
        for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
          document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#d3738b';
        }
        //moving animation
        datax[0].querySelector('#colorslider1').style.marginLeft='0px';
        let j = 0
        let interval=setInterval(function(){
          let dataxi=document.querySelectorAll('#datexi');
          if (j+1 > dataxi.length) {
            datax[1].querySelector('#colorslider1').style.marginLeft='0px';
            clearInterval(interval);
          }
          else {
            dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
          }
          j++;
        },50);

      });
      $('#walk').click(function() {

        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        if(document.querySelectorAll('#colorslider1').length==0){
          for (let i = 0; i < datax.length; i++) {
            $(datax[i]).prepend("</div><div id='colorslider1'></div>");
          }
          for (let i = 0; i < dataxi.length; i++) {
            $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
          }
        }
        resetcolorslider();
        for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
          document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#6578c5';
        }
        for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
          document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#7186db';
        }
        //moving animation
        datax[0].querySelector('#colorslider1').style.marginLeft='0px';
        let j = 0
        let interval=setInterval(function(){
          let dataxi=document.querySelectorAll('#datexi');
          if (j+1 > dataxi.length) {
            datax[1].querySelector('#colorslider1').style.marginLeft='0px';
            clearInterval(interval);
          }
          else {
            dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
          }
          j++;
        },50);

      });
      $('#fishing').click(function() {

        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        if(document.querySelectorAll('#colorslider1').length==0){
          for (let i = 0; i < datax.length; i++) {
            $(datax[i]).prepend("</div><div id='colorslider1'></div>");
          }
          for (let i = 0; i < dataxi.length; i++) {
            $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
          }
        }
        resetcolorslider();
        for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
          document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#805b7c';
        }
        for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
          document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#8f658a';
        }
        //moving animation
        datax[0].querySelector('#colorslider1').style.marginLeft='0px';
        let j = 0
        let interval=setInterval(function(){
          let dataxi=document.querySelectorAll('#datexi');
          if (j+1 > dataxi.length) {
            datax[1].querySelector('#colorslider1').style.marginLeft='0px';
            clearInterval(interval);
          }
          else {
            dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
          }
          j++;
        },50);

      });
      $('#weekend').click(function() {

        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        if(document.querySelectorAll('#colorslider1').length==0){
          for (let i = 0; i < datax.length; i++) {
            $(datax[i]).prepend("</div><div id='colorslider1'></div>");
          }
          for (let i = 0; i < dataxi.length; i++) {
            $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
          }
        }
        resetcolorslider();
        for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
          document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#dead79';
        }
        for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
          document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#f7c187';
        }
        //moving animation
        datax[0].querySelector('#colorslider1').style.marginLeft='0px';
        let j = 0
        let interval=setInterval(function(){
          let dataxi=document.querySelectorAll('#datexi');
          if (j+1 > dataxi.length) {
            datax[1].querySelector('#colorslider1').style.marginLeft='0px';
            clearInterval(interval);
          }
          else {
            dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
          }
          j++;
        },50);

      });
      $('#addnew').click(function() {

        let datax=document.querySelectorAll('#datex');
        let dataxi=document.querySelectorAll('#datexi');
        if(document.querySelectorAll('#colorslider1').length==0){
          for (let i = 0; i < datax.length; i++) {
            $(datax[i]).prepend("</div><div id='colorslider1'></div>");
          }
          for (let i = 0; i < dataxi.length; i++) {
            $(dataxi[i]).prepend("</div><div id='colorslider2'></div>");
          }
        }
        resetcolorslider();
        for (let i = 0; i < document.querySelectorAll('#colorslider1').length; i++) {
          document.querySelectorAll('#colorslider1')[i].style.backgroundColor='#4fa093';
        }
        for (let i = 0; i < document.querySelectorAll('#colorslider2').length; i++) {
          document.querySelectorAll('#colorslider2')[i].style.backgroundColor='#58b2a4';
        }
        //moving animation
        datax[0].querySelector('#colorslider1').style.marginLeft='0px';
        let j = 0
        let interval=setInterval(function(){
          let dataxi=document.querySelectorAll('#datexi');
          if (j+1 > dataxi.length) {
            datax[1].querySelector('#colorslider1').style.marginLeft='0px';
            clearInterval(interval);
          }
          else {
            dataxi[j].querySelector('#colorslider2').style.marginLeft='0px';
          }
          j++;
        },50);

      });
    }
    function resetcolorslider()
    {
      let datax=document.querySelectorAll('#datex');
      let dataxi=document.querySelectorAll('#datexi');
      datax[0].style.transition='0s';
      datax[1].style.transition='0s';
      datax[0].querySelector('#colorslider1').style.marginLeft='-40px';
      datax[1].querySelector('#colorslider1').style.marginLeft='-40px';
      if($('#colorslider1').css('background-color')!='rgba(0, 0, 0, 0)'){
        datax[0].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
        datax[1].style.backgroundColor=datax[0].querySelector('#colorslider1').style.backgroundColor;
        for (let i = 0; i < dataxi.length; i++) {
          dataxi[i].style.transition='0s';
          dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
          dataxi[i].style.backgroundColor=dataxi[i].querySelector('#colorslider2').style.backgroundColor;
        }
      }
      else{
        datax[0].style.backgroundColor='#4fa093';
        datax[1].style.backgroundColor='#4fa093';
        for (let i = 0; i < dataxi.length; i++) {
          dataxi[i].style.transition='0s';
          dataxi[i].querySelector('#colorslider2').style.marginLeft='-40px';
          dataxi[i].style.backgroundColor='#58b2a4';
        }
      }
    }


    //reset button
    {
      $('#reset').click(function() {
        location.reload();
      });
      $('#homebutton').click(function() {
        location.reload();
      });
    }
  }
}
//------------------------------------------------------------------------------------//
{
  $('#Calcapp').click(function() {
    let alldata=`    <div id='input'>      <input type='text' id='text' name='' value='0'>    </div>    <div id='demo'>      <div id='num1' onclick='ac()'>         <span id='numtext'>AC</span></div>      <div id='num1' onclick='d()'>  <span id='numtext'>C</span></div>      <div id='num1' onclick='t()'>  <span id='numtext'>+/-</span></div>      <div id='num3' onclick='number("/")'>  <span id='numtext'>/</span></div>      <br>      <div id='num2' onclick='number(7)'>    <span id='numtext'>7</span></div>      <div id='num2' onclick='number(8)'>    <span id='numtext'>8</span></div>      <div id='num2' onclick='number(9)'>    <span id='numtext'>9</span></div>      <div id='num3' onclick='number("*")'>  <span id='numtext'>x</span></div>      <br>      <div id='num2' onclick='number(4)'>    <span id='numtext'>4</span></div>      <div id='num2' onclick='number(5)'>    <span id='numtext'>5</span></div>      <div id='num2' onclick='number(6)'>    <span id='numtext'>6</span></div>      <div id='num3' onclick='number("-")'>  <span id='numtext'>-</span></div>      <br>      <div id='num2' onclick='number(1)'><span id='numtext'>1</span></div>      <div id='num2' onclick='number(2)'><span id='numtext'>2</span></div>      <div id='num2' onclick='number(3)'><span id='numtext'>3</span></div>      <div id='num3' onclick='number("+")'><span id='numtext'>+</span></div>      <br>      <div id='num0' onclick='number(0)'><span id='numtext'>0</span></div>      <div id='num2' onclick='number(".")'><span id='numtext'>.</span></div>      <div id='num3' onclick='equalto()'><span id='numtext'>=</span></div>    </div>`;
    $('#screen')[0].innerHTML=alldata;
  });
  {
    let b=document.getElementById('text');
    function number(n){
      let b=document.getElementById('text');
      if(b.value[b.value.length-1]=='+'||b.value[b.value.length-1]=='-'||b.value[b.value.length-1]=='*'||b.value[b.value.length-1]=='/'){
        if(n=='+'||n=='-'||n=='*'||n=='/'){

        }
        else{
          b.value=b.value+n;
        }
      }
      else{
        if(b.value==0){
          if(n=='+'||n=='-'||n=='*'||n=='/'){

          }
          else{b.value=n;}
        }
        else{b.value=b.value+n;}
      }
    }
    function d() {
      let b=document.getElementById('text');
      b.value=b.value.substring(0,b.value.length-1);
    }
    function t() {
      let b=document.getElementById('text');
      b.value=(-1*b.value);
    }
    function ac(){
      let b=document.getElementById('text');
      b.value='0';
    }
    function equalto(){
      let b=document.getElementById('text');
      try{
        b.value=eval(b.value);
      }
      catch(equalto){
        b.value='error';
      }
    }
  }
}
