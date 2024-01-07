async function selection(){
    const element = document.querySelectorAll(".bar");
    for (let i = 0; i < element.length; i++){
        if(stopSortingBtn==true){
            return;
        }
        let min_index = i;
        // Change color of the bar being compared
        element[i].style.background = 'lightgreen';
        for(let j = i+1; j < element.length; j++){
            if(stopSortingBtn==true){
                return;
            }
            // Change color of current bar
            element[j].style.background = 'cyan';

            await delayTime(delay);
            if(stopSortingBtn==true){
                return;
            }
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)){
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    element[min_index].style.background = '#AAB7B8';
                }
                min_index = j;
            } 
            else{
                // if the current comparision is more than min_index change is back to normal
                element[j].style.background = '#AAB7B8';
            }   
        }
        await delayTime(delay);
        if(stopSortingBtn==true){
            return;
        }
        swap(element[min_index], element[i]);
        // change the min element index back to normal as it is swapped 
        element[min_index].style.background = '#AAB7B8';
        // change the sorted elements color to green
        element[i].style.background = 'darkcyan';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    const analysis = Array.from(document.getElementsByClassName('analysis'));
    analysis.forEach(analysis => {
        analysis.style.display = 'none';
    });
    document.querySelector(".analysis-selectionSort").style.display = "block";
    stopSortingBtn = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await selection();
    if(stopSortingBtn==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});