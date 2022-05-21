const submit_btn = document.querySelector('.button');
const card_1 = document.querySelector('.card1');
const card_2 = document.querySelector('.card2');
const ratingBtn = document.querySelectorAll('.rating_btn');
const score = document.querySelector('.score');
let star_score = 3 //default value

submit_btn.addEventListener('click', onSubmit);
ratingBtn.forEach( btn =>{
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
    card_1.classList.add('hide');
    score.textContent = star_score;
    card_2.classList.remove('hide');
    // console.log('submit click');
}

function handleRatingBtnClick(event) {
    ratingBtn.forEach( btn => {
        btn.classList.remove('active');
    });
    // event.target.classList.add('active');

    if (event.target.classList.contains('rating_btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    //star score
    star_score = event.target.textContent;
    //console.log(star_score);
    //console.log('rating btn click');
}

//console.log(ratingBtn);