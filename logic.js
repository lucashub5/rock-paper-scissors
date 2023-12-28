document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------

    window.onload = function () {

        const imagePaths = [
            // Luni images cache
            "images/luni/luni.gif",
            "images/luni/lunibad.gif",
            "images/luni/lunihappy.gif",
            "images/luni/lunirandom.gif",
            "images/luni/paper.gif",
            "images/luni/rock.gif",
            "images/luni/scissors.gif",
            // Pichi images cache
            "images/pichi/pichi.gif",
            "images/pichi/pichibad.gif",
            "images/pichi/pichihappy.gif",
            "images/pichi/pichirandom.gif",
            "images/pichi/paper.gif",
            "images/pichi/rock.gif",
            "images/pichi/scissors.gif",
        ];
    
        const imageObjects = [];
    
        imagePaths.forEach(function (path) {
            const img = new Image();
            img.src = path;
            imageObjects.push(img);
        });
    
    };

    // ----------------------------------------

    
    const choices = document.querySelectorAll(".choice");
    const buttonElement = document.getElementById("button");
    const electionLuniContainer = document.querySelectorAll("election-luni");
    let selectedChoice = "";

    const choicesArray = ["rock", "paper", "scissors"];
    let selectedChoiceEnemy = "";

    let countPlayer = 0;
    let countEnemy = 0;

    let imgLuni = "";
    let imgPichi = "";
  
    choices.forEach(choice => {
      choice.addEventListener("click", function () {
        selectedChoice = this.id;
        choices.forEach(c => c.classList.remove("choice-active"));
        this.classList.add("choice-active");

      });
    });

    buttonElement.addEventListener("click", function () {
        console.log("Texto seleccionado: ", selectedChoice);

        changeImgPlayer();
        changeImgEnemy();

        getResult();

      });

    function changeImgPlayer() {
        const currentImgElement = document.getElementById("current-img");
        currentImgElement.remove();
        const newImgElement = document.createElement("img");
        newImgElement.src = "images/luni/" + selectedChoice + ".gif";
        newImgElement.id = "current-img"; 
        document.querySelector(".election-luni").appendChild(newImgElement);
    }

    function changeImgEnemy() {

        getRandomChoice();

        const currentImgElement = document.getElementById("current-img-enemy");
        currentImgElement.remove();
        const newImgElement = document.createElement("img");
        newImgElement.src = "images/pichi/" + selectedChoiceEnemy + ".gif";
        newImgElement.id = "current-img-enemy"; 
        document.querySelector(".election-pichi").appendChild(newImgElement);
    }

    function getRandomChoice() {
        const randomIndex = Math.floor(Math.random() * choicesArray.length);
        selectedChoiceEnemy = choicesArray[randomIndex];
    }

    function getResult() {
        const resultElement = document.querySelector(".result");
        const countPlayerText = document.getElementById("count-player");
        const countEnemyText = document.getElementById("count-enemy");


        if (selectedChoice === selectedChoiceEnemy) {
            resultElement.textContent = "Draw";

            imgLuni = "luni";
            imgPichi = "pichi";
        } else if (
            (selectedChoice === "rock" && selectedChoiceEnemy === "scissors") ||
            (selectedChoice === "paper" && selectedChoiceEnemy === "rock") ||
            (selectedChoice === "scissors" && selectedChoiceEnemy === "paper")
        ) {
            resultElement.textContent = "You Win!";
            countPlayer += 1;
            countPlayerText.textContent = "Luni: " + countPlayer;

            imgLuni = "lunihappy";
            imgPichi = "pichibad";

        } else {
            resultElement.textContent = "You Lose!";
            countEnemy += 1;
            countEnemyText.textContent = "Pichi: " + countEnemy;

            imgLuni = "lunibad";
            imgPichi = "pichihappy";
        }

        changeImgLuni();
        changeImgPichi();

    }

    function changeImgLuni() {
        const currentImgElement = document.getElementById("luni-current");
        currentImgElement.remove();
        const newImgElement = document.createElement("img");
        newImgElement.src = "images/luni/" + imgLuni + ".gif";
        newImgElement.id = "luni-current"; 
        document.querySelector(".luni-current").appendChild(newImgElement);
    }

    function changeImgPichi() {
        const currentImgElement = document.getElementById("pichi-current");
        currentImgElement.remove();
        const newImgElement = document.createElement("img");
        newImgElement.src = "images/pichi/" + imgPichi + ".gif";
        newImgElement.id = "pichi-current"; 
        document.querySelector(".pichi-current").appendChild(newImgElement);
    }

  });
  