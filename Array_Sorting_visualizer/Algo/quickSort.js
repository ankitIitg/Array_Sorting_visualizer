async function partitionLomuto(element, l, r){
    let i = l - 1;
    element[r].style.background = 'cyan'; //pivot
    for(let j = l; j <= r - 1; j++){
        if(stopSortingBtn == true){
            return;
        }
        element[j].style.background = 'yellow'; //current element
        await delayTime(delay);
        if(stopSortingBtn == true){
            return;
        }
        if(parseInt(element[j].style.height) < parseInt(element[r].style.height)){
            i++;
            swap(element[i], element[j]);
            // color 
            element[i].style.background = 'orange';
            if(i != j) element[j].style.background = 'orange';
            // pauseChamp
            await delayTime(delay);
        }
        else{
            // color if not less than pivot
            element[j].style.background = 'pink';
        }
    }
    i++; 
    if(stopSortingBtn == true){
        return;
    }
    await delayTime(delay);
    if(stopSortingBtn == true){
        return;
    }
    swap(element[i], element[r]);
    // color
    element[r].style.background = 'pink';
    element[i].style.background = 'darkcyan';

    if(stopSortingBtn == true){
        return;
    }
    await delayTime(delay);
    if(stopSortingBtn == true){
        return;
    }
    
    // color
    for(let k = 0; k < element.length; k++){
        if(element[k].style.background != 'darkcyan') {
            element[k].style.background = '#AAB7B8';
        }
    }

    return i;
}

async function quickSort(element, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(element, l, r);
        await quickSort(element, l, pivot_index - 1);
        await quickSort(element, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <element.length && r <element.length){
            element[r].style.background = 'darkcyan';
            element[l].style.background = 'darkcyan';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    const analysis = Array.from(document.getElementsByClassName('analysis'));
    analysis.forEach(analysis => {
        analysis.style.display = 'none';
    });
    document.querySelector(".analysis-quickSort").style.display = "block";
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await quickSort(element, l, r);
    if(stopSortingBtn==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});