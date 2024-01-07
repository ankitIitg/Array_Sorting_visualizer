async function insertion(){
    const element = document.querySelectorAll(".bar");
    element[0].style.background = 'darkcyan';
    for(let i = 1; i < element.length; i++){
        if(stopSortingBtn==true){
            return;
        }
        let j = i - 1;
        let key = element[i].style.height;
        element[i].style.background = 'cyan';

        await delayTime(delay);
        if(stopSortingBtn==true){
            return;
        }

        while(j >= 0 && (parseInt(element[j].style.height) > parseInt(key))){
            if(stopSortingBtn==true){
                return;
            }
            element[j].style.background = 'cyan';
            element[j + 1].style.height = element[j].style.height;
            j--;

            await delayTime(delay);
            if(stopSortingBtn==true){
                return;
            }
            for(let k = i; k >= 0; k--){
                element[k].style.background = 'darkcyan';
            }
        }
        element[j + 1].style.height = key;
        element[i].style.background = 'darkcyan';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    const analysis = Array.from(document.getElementsByClassName('analysis'));
    analysis.forEach(analysis => {
        analysis.style.display = 'none';
    });
    document.querySelector(".analysis-insertionSort").style.display = "block";
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(stopSortingBtn==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});