async function merge(element, low, mid, high){
    console.log('In merge()');
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++) {
        if(stopSortingBtn==true){
            return;
        }
        await delayTime(delay);
        element[low + i].style.background = 'pink'; // orange for left sorted subarray
        left[i] = element[low + i].style.height;
    }
    for(let i = 0; i < n2; i++) {
        if(stopSortingBtn==true){
            return;
        }
        await delayTime(delay);
        element[mid + 1 + i].style.background = 'cyan'; // cyan for right sorted subarray
        right[i] = element[mid + 1 + i].style.height;
    }
    await delayTime(delay);
    // Sorting two merged array of size n1 and n2
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        if(stopSortingBtn==true){
            return;
        }
        await delayTime(delay);

        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === element.length){
                element[k].style.background = 'darkcyan';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            
            element[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === element.length){
                element[k].style.background = 'darkcyan';
            }
            else{
                element[k].style.background = 'lightgreen'; //merged sorted array of two sorted subarray
            } 
            element[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        if(stopSortingBtn==true){
            return;
        }
        await delayTime(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'darkcyan';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        if(stopSortingBtn==true){
            return;
        }
        await delayTime(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'darkcyan';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(element, l, r){
    if(l >= r){
    //sorting complete
    return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(element, l, m);
    await mergeSort(element, m + 1, r);
    await merge(element, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    const analysis = Array.from(document.getElementsByClassName('analysis'));
    analysis.forEach(analysis => {
        analysis.style.display = 'none';
    });
    document.querySelector(".analysis-mergeSort").style.display = "block";
  let element = document.querySelectorAll('.bar');
  let l = 0;
  let r = parseInt(element.length) - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await mergeSort(element, l, r);
  if(stopSortingBtn==true){
      disableSpeedSlider();
  } else {
      enableSortingBtn();
      enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});