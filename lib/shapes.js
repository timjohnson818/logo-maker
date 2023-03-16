class Shape{
    constructor(text, color){
    this.text = text;
    this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
    
    setText(text) {
        this.text = text;
    }
}

class Circle extends Shape{
    constructor(text, color) {
        super(text, color);  
    }
    render(){
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="'+this.color+'"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">'+this.text+'</text></svg>'
    }

}

class Triangle extends Shape{
    constructor(text, color) {
        super(text, color);
    }
    render(){
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="'+this.color+'"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">'+this.text+'</text></svg>'
    }
}

class Square extends Shape{
    constructor(text, color) {
        super(text, color);
    }
    render(){
        return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="90" y="50" width="100" height="100" fill="'+this.color+'"/><text x="150" y="100" font-size="50" text-anchor="middle" fill="white">'+this.text+'</text></svg>'
    }
}

module.exports = {Circle, Square, Triangle};