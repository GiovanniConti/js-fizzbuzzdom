const containerBox = document.querySelector(".container-box");

for(let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.classList.add("box", "ratio", "ratio-1x1");

    // switch(i) {
    //     case (i % 3 === 0):
    //         box.classList.add("multiple-3");
    //         break;
    //     case (i % 5 === 0):
    //         box.classList.add("multiple-5")
    //         break;
    //     case (i % 3 === 0 && i % 5 === 0):
    //         box.classList.add("multiple-3-5")
    //         break;
    // }

    if (i % 3 === 0){

        if(i % 5 === 0){
            box.classList.add("multiple-3-5")
            box.innerHTML += `<h2>fizzbuzz</h2>`
        } else{
            box.classList.add("multiple-3");
            box.innerHTML += `<h2>fizz</h2>`
        }
    } else if (i % 5 === 0){
        box.classList.add("multiple-5")
        box.innerHTML += `<h2>buzz</h2>`
    } else{
        box.innerHTML += `<h2>${i}</h2>`
    }
    
    containerBox.append(box)
}