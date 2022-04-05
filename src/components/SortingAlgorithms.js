const swapDivs = async (div1, div2) => {
    addSelectedStyles(div1, div2);
    await addDelay();
    let dummy = document.createElement('div');
    div1.before(dummy);
    dummy.replaceWith(div2);
    addNotSelectedStyle(div1, div2);
}

const addSelectedStyles = (div1, div2 = "") => {
    div1.style.background = '#d3e10ce6';
    if (div2 != "")
        div2.style.background = '#d3e10ce6'
}
const addNotSelectedStyle = (div1, div2 = "") => {
    div1.style.background = '#3f4af1';
    if (div2 != "")
        div2.style.background = '#3f4af1'
}
const addTemporarySortStyle=(div)=>{
    div.style.background = '#5613f4';
}

const addSortedStyles = async (arr) => {
    for (let i of arr.childNodes) {
        await new Promise((resolve) => {
            setTimeout(() => {
                i.style.background = '#1eee44'
                resolve(2);
            }, 5);
        })
      
    }
    for (let i of arr.childNodes) {
        await new Promise((resolve) => {
            setTimeout(() => {
                i.style.background = '#3f4af1'
                resolve(2);
            }, 5);
        })
    }
}
const getDivHeight = (div) => {
    return Number((getComputedStyle(div).height).replace('px', ''))
}
const addDelay = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 100)
    })
}
export const bubbleSort = async (arr) => {
    for (let i = 0; i < arr.childNodes.length; i++) {
        let j = 0;
        for (; j < arr.childNodes.length - i - 1; j++) {
            if (getDivHeight(arr.childNodes[j]) > getDivHeight(arr.childNodes[j + 1])) {
                await swapDivs(arr.childNodes[j], arr.childNodes[j + 1]);
            }
        }
        addTemporarySortStyle(arr.childNodes[j]);
    }
    // console.log('end',arr);
    await addSortedStyles(arr);
    return true;
}

export const selectionSort = async (arr) => {
    for (let i = 0; i < arr.childNodes.length; i++) {
        let minHeight = getDivHeight(arr.childNodes[i]);
        let minKey = i;
        let j = i + 1;
        for (; j < arr.childNodes.length; j++) {
            if (minHeight > getDivHeight(arr.childNodes[j])) {
                minKey = j;
                minHeight = getDivHeight(arr.childNodes[j]);
            }
        }
        await swapDivs(arr.childNodes[i], arr.childNodes[minKey]);
        addTemporarySortStyle(arr.childNodes[minKey]);

    }
    await addSortedStyles(arr);

    return true;
}
export const insertionSort = async (arr) => {
    for (let i = 1; i < arr.childNodes.length; i++) {
        console.log(arr.childNodes[i]);
        let key = getDivHeight(arr.childNodes[i]);
        let j = i - 1;
        while (j >= 0 && getDivHeight(arr.childNodes[j]) > key) {
            await swapDivs(arr.childNodes[j], arr.childNodes[j + 1]);
            j--;
        }
        addTemporarySortStyle(arr.childNodes[j+1]);

    }
    await addSortedStyles(arr);

    return true;
}