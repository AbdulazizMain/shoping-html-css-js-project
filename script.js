window.addEventListener('DOMContentLoaded',function(){
   let card = document.querySelectorAll('.card');
   let open = document.querySelector('.open');
   let bottomBtn = document.querySelectorAll('.bottom_button');

   

   let select_con = document.createElement('div');
   let select = document.createElement('div');
   let xznak = document.createElement('button');

   select_con.classList.add('select_con');
   select.classList.add('select');
   xznak.classList.add('xznak');
   xznak.textContent = "x"
   
   document.body.appendChild(select_con)
   select_con.appendChild(select)
   select_con.appendChild(xznak)


   let select_card = document.querySelector('.select_con');
   let selec = document.querySelector('.select');
   let close = document.querySelector('.xznak');


   open.addEventListener('click',function(){
      select_card.style.display = "block"; 
   });
   close.addEventListener('click',function(){
      select_card.style.display = "none"; 
   });
   
  
      bottomBtn.forEach(function(item , i){
         item.addEventListener('click',function(){
            let copCard = card[i].cloneNode(true);
            let card_body = copCard.querySelector('.card_body');

            card_body.remove();
            selec.appendChild(copCard);
            
         });
         console.log(i)
         console.log(item)
      });


      let Close = document.querySelector('#close');
      let Menu = document.querySelector('#menu');
      let navBar = document.querySelector('.nav_bar');

      Menu.addEventListener('click',()=>{
         navBar.style.display = 'block';
      });
      Close.addEventListener('click',()=>{
         navBar.style.display = 'none';
      });

});