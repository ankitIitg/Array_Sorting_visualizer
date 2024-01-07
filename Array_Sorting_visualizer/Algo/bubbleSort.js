let stopSortingBtn = new Boolean(false);

async function bubble() {
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length-1; i++){
        for(let j = 0; j < element.length-i-1; j++){
            if(stopSortingBtn == true){
                return;
            }
            element[j].style.background = 'cyan'; // light blue
            element[j+1].style.background = 'cyan';
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){
                await delayTime(delay);
                swap(element[j], element[j+1]);
            }
            element[j].style.background = '#AAB7B8'; // grey
            element[j+1].style.background = '#AAB7B8';
        }
        // (arrayLength - 1 - i)th element will be in its correct position after ith iteration
        element[element.length-1-i].style.background = 'darkcyan';
    }
    element[0].style.background = 'darkcyan';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    const analysis = Array.from(document.getElementsByClassName('analysis'));
    analysis.forEach(analysis => {
        analysis.style.display = 'none';
    });
    document.querySelector(".analysis-bubbleSort").style.display = "block";
    stopSortingBtn = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await bubble();
    if(stopSortingBtn==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});