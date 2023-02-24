class Shape{
    constructor(text, color){
    this.text = text;
    this.color = color;
    }
}

class Circle extends Shape{
    constructor(text, color) {
        super(text, color);
        
    }
}

class Triangle extends Shape{
    constructor(text, color) {
        super(text, color);
    }
}

class Square extends Shape{
    constructor(text, color) {
        super(text, color);
    }
}
