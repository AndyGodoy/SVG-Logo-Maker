// each shape class should be tested for a render() method that returns a string for the corresponding
class Shape{
    // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
    class Circle extends Shape{
        render(){
            return `
            <svg height="200" width="200">
                <circle cx="50%" cy="50%" r="100" fill="${this.color}" />
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="20"></text>
            </svg>
        `;
        }
    }
    // Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
    class Square extends Shape{
        render(){
            return `
            <svg height="200" width="200">
                <rect x="50" height="200" width="200" fill="${this.color}" />
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="20"></text>
            </svg>
        `;
        }
    }
    // Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
    class Triangle extends Shape{
        render(){
            //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
            return `
            <svg height="200" width="300">
                <polygon points="0,200 300,200 150,0" fill="${this.color}" />
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="20"></text>
            </svg>
        `;
        }
    };
    
    module.exports = {Circle, Square, Triangle}