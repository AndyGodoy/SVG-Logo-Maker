// each shape class should be tested for a render() method that returns a string for the corresponding
// Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
// The Shape class is a base class that has a constructor and a method to set the color of the shape.
class Shape{
// constructor function is called when a new instance is created
// here it initializes color property as an empty string
        constructor(){
            this.color=''
        }
        // setColor method allows me to set the color property of the shape instance to the specified color
        setColor(color){
            this.color=(color);
        }
    }
    // circle is a subclass of 'shape', so it extends the functionality of the shape class.
    // the render method returns an SVG representation of a circle based on current instances properties like the color
    // The circle is centered in the SVG element, and its radius is set to 100 units. Below extend the circle/square/triangle to shape
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
    class Triangle extends Shape{
        render(){
            return `
            <svg height="200" width="300">
                <polygon points="0,200 300,200 150,0" fill="${this.color}" />
                <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="20"></text>
            </svg>
        `;
        }
    };
    
    module.exports = { Shape, Circle, Square, Triangle }