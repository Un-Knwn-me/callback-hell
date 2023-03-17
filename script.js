let container = document.createElement("div");
container.setAttribute("id", "box");
document.body.append(container);

let countd = document.createElement("div");
countd.setAttribute("id", "count");
container.appendChild(countd);

setTimeout(()=>{
    document.querySelector("#count").innerText = "10";
    setTimeout(()=>{
        document.querySelector("#count").innerText = "9";
        setTimeout(()=>{
            document.querySelector("#count").innerText = "8";
            setTimeout(()=>{
                document.querySelector("#count").innerText = "7";
                setTimeout(()=>{
                    document.querySelector("#count").innerText = "6";
                    setTimeout(()=>{
                        document.querySelector("#count").innerText = "5";
                        setTimeout(()=>{
                            document.querySelector("#count").innerText = "4";
                            setTimeout(()=>{
                                document.querySelector("#count").innerText = "3";
                                setTimeout(()=>{
                                    document.querySelector("#count").innerText = "2";
                                    setTimeout(()=>{
                                        document.querySelector("#count").innerText = "1";
                                        setTimeout(()=>{
                                            document.querySelector("#count").innerText = "Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);