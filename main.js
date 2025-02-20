function btn() {
    let inp = document.getElementsByClassName("input")[0].value;
    if (!inp) {
        alert("Please enter a task.");
        return;
    }

    let dv = document.getElementsByClassName("list")[0];

    let p = document.createElement("p");
    p.textContent = inp;

    let btng = document.createElement("button");
    btng.classList.add("btng");
    btng.textContent = "Выполненно";

    let btnr = document.createElement("button");
    btnr.classList.add("btnr");
    btnr.textContent = "Удалить";

    let div = document.createElement("div");
    div.classList.add("created")

    btng.addEventListener("click", () => {
        let isDone = p.classList.toggle("done");
        div.style.background = isDone ? "red" : "none";
        div.classList.toggle("divdone")
    });

    btnr.addEventListener("click", () => {
        div.remove();
    });

    div.appendChild(p);
    div.appendChild(btng);
    div.appendChild(btnr);
    dv.appendChild(div);
    document.getElementsByClassName("input")[0].value = '';
}

function show() {
    let doneElements = document.getElementsByClassName("divdone");
    for (let i = 0; i < doneElements.length; i++) {
        doneElements[i].classList.toggle("hidden");
    }


    let btng = document.getElementsByClassName("btng")
    for (let i = 0; i < btng.length; i++) {
        btng[i].classList.toggle("hidden");
    }
}