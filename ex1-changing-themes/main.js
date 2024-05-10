class Theme {

    bgColour;
    textColour;
    fontFamily;

    constructor(bgColour, textColour, fontFamily) {
        this.bgColour = bgColour;
        this.textColour = textColour;
        this.fontFamily = fontFamily;
    }

    display() {
        return this.bgColour.display;
    }
}

const white = new Theme(#FFFFFF, #000000, serif);

white.display();