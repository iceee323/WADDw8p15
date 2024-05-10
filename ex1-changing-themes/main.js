class Theme {

    bgColour;
    textColour;
    fontFamily;

    constructor(bgColour, textColour, fontFamily) {
        this.bgColour = bgColour;
        this.textColour = textColour;
        this.fontFamily = fontFamily;
    }

}

const white = new Theme("#00FFFF", "#000000", "serif");
const blue = new Theme("#0f00c3", "#ff0000", "cursive");
const black = new Theme("#000000", "#ffffff", "Georgia, serif");




const themes = document.getElementsByName("theme");
function themeOptionChanged(event){
    let bgColour = "";
    let textColour = "";
    let fontFamily = "";
    
    if (event.target.value === "white"){
        bgColour = white.bgColour;
        textColour = white.textColour;
        fontFamily = white.fontFamily;

    }
    else if (event.target.value === "blue"){
        bgColour = blue.bgColour;
        textColour = blue.textColour;
        fontFamily = blue.fontFamily;
    }
    else{
        bgColour = black.bgColour;
        textColour = black.textColour;
        fontFamily = black.fontFamily;

    }
    document.body.style.backgroundColor = bgColour;
    document.body.style.color = textColour;
    document.body.style.fontFamily = fontFamily;



}

for (let themeOption of themes) {
    themeOption.addEventListener("change", themeOptionChanged);
  }


