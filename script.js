console.log("hello world")

let pn = 1;

document.querySelector('.svgright').addEventListener("click", () => {

    if (pn < 8) {
        let b = document.querySelectorAll('.dot');
        let a = document.querySelectorAll('.imgcard');
        // a.style.transform=`translateX(-${29.6*pn}vw)`
        b[pn].classList.add('active');
        b[pn - 1].classList.remove('active');
        a.forEach(el => {
            el.style.transform = `translateX(-${29.64 * pn}vw)`;
        });
        pn++;
        console.log(pn)
    }
})

document.querySelector('.svgleft').addEventListener("click", () => {
    if (pn > 1) {
        pn--;
        let b = document.querySelectorAll('.dot');
        let a = document.querySelectorAll('.imgcard');
        // a.style.transform=`translateX(-${29.6*pn}vw)`
        b[pn - 1].classList.add('active');
        b[pn].classList.remove('active');
        a.forEach(el => {
            el.style.transform = `translateX(-${29.64 * (pn - 1)}vw)`;
        });
        console.log(pn)
    }
})

let c = document.querySelectorAll('.dot')
for (let i = 0; i <= 8; i++) {
    c[i].addEventListener("click", () => {
        let b = document.querySelectorAll('.dot');
        let a = document.querySelectorAll('.imgcard');
        b[pn - 1].classList.remove('active');
        a.forEach(el => {
            el.style.transform = `translateX(-${29.64 * (i)}vw)`;
            pn = i + 1;
        });
        b[i].classList.add('active');
    })
}
