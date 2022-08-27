document.querySelectorAll('.paraNav ul li a').forEach(elem=>{
    elem.addEventListener('click', e =>{
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        });
    });
});

window.addEventListener('scroll',function(){
    let scrollTop =document.documentElement.scrollTop || window.scrollY || window.pageXOffset;

    //메뉴
    if(scrollTop > 0){
        document.querySelector('.paraNav').classList.add('show');
    }else{
        document.querySelector('.paraNav').classList.remove('show');
    }
    //버튼
    document.querySelectorAll('.content__item').forEach((item, index)=>{
        if(scrollTop >= item.offsetTop){
            document.querySelectorAll('.paraNav ul li').forEach(li =>{
                li.classList.remove('active');
            });
            document.querySelector('.paraNav ul li:nth-child('+(index+1)+')').classList.add('active');
        }
    });


    //출력용
    document.querySelector('.paraScroll span').innerText = parseInt(scrollTop);
});