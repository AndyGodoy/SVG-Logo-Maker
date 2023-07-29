// importing file system modules
// importing inquierer which is node.js libarary used to promt users with questions in command line
// importing 3 classes circle, square, triangle from ./lib/shapes.js and assiging them to the same names
const filesystem = require('fs')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");

// Defining a class called Svg which has a constructor that initializes 2 properties
// textElement and shapeElement assigned to empty strings 
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// define a array called questions that contains multiple question objects!
// each question should have properties like 'type, name, message,a nd choices'
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixelImage",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
// takes 2 parameters 'filename' which is a string and 'data' any data to be written
// this function will be used to write the svg data to a file later
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

// defining init aysyc function and await to handle aysychornise code
// logged a messge 'starting init" to the console
async function init() {
    console.log("Starting init");
	// decalred 2 variables and initiialized them
	var svgString = "";
	var svg_file = "logo.svg";

    // this code is to ask for user input asynchrously
    const answers = await inquirer.prompt(questions);

	//user text checks to ensure the text is 1-3 charachters long, if it doesnt meet this condition
	// an error message is logged
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = answers.text;
	} else {
		console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
	}

	console.log("User text: [" + user_text + "]");
	//user font color and hsape color are retireved and stored in the 'user_font_color'
	user_font_color = answers.textColor;
	console.log("User font color: [" + user_font_color + "]");
	
	user_shape_color = answers.shapeColor;
	console.log("User shape color: [" + user_shape_color + "]");
	//retrieving user shape type and converting it to a lowercase string and storing it inthe user shape type variable
	user_shape_type = answers.pixelImage.toLowerCase();
	console.log("User entered shape = [" + user_shape_type + "]");
	
	// based off the user shape type, the appropiate shapeobject is created and stored in the user_shape variaoble
	// 
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
		console.log("User selected Square shape");
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	} // user shape colo ris applied to the user shape using the setcolor method
	user_shape.setColor(user_shape_color);

	// a new svh pbject is created and stored in the svh variable
	// user text is set to Svg object and so the shape using the text element and shape element 
	// the generated shape is logged into the console
	var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	//Print shape to log
	console.log("Displaying shape:\n\n" + svgString);
	//document.getElementById("svg_image").innerHTML = svgString;

	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile(svg_file, svgString); 
}
init();