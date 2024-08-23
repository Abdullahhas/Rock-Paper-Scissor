const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user-result img");
const cpuResult = document.querySelector(".cpu-result img");
const result = document.querySelector(".result");
const optionImgs = document.querySelectorAll(".option-image");

optionImgs.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        optionImgs.forEach((image2, index2) => {
            if (index != index2) {
                image2.classList.remove("active");
            }
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imgSrc = e.target.querySelector("img").src;
        
        userResult.src = imgSrc;

        let randonNum = Math.floor(Math.random()*3);
        let cpuImages = ["rock.png" , "paper.png" , "scissor.png"];

        cpuResult.src = cpuImages[randonNum];

        let cpuValue = ["R", "P" , "S"][randonNum];
        let userValue = ["R" , "P" , "S"][index];

        let outCome={
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PR: "User",
            PP: "Draw",
            PS: "Cpu",
            SR: "Cpu",
            SP: "User",
            SS: "Draw"

        }
        let outComeValue = outCome[userValue+cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw":`${outComeValue} Won`;
        
        }, 2500);
        
    })
})