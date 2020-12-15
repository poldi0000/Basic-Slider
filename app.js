(function(){
    const pics = [
        'snatch_1',
        'snatch_2',
        'snatch_3',
        'snatch_4',
        'snatch_5',
        'snatch_6'
    ];

    const buttons = document.querySelectorAll('.btn')
    let imageDiv = document.querySelector('.img_container')
    let counter = 0;
    imageDiv.style.backgroundImage = `url('./img/snatch_1.png')`

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.classList.contains('btn_left')){
                counter--;
                if(counter < 0){
                    counter = pics.length - 1;
                }
            }  
            if (button.classList.contains('btn_right')){
                counter++;
                if(counter > pics.length - 1){
                    counter = 0;
                }
            }
            imageDiv.style.backgroundImage = `url('./img/${pics[counter]}.png')`
        })
    })
})()