// write some test cases to check if the shape and circle classes behave as expected.
// import the classes that I want to test
const { Shape, Circle, Square, Triangle } = require('./shapes');

// test the Shape class
describe('Shape class', () => {
    test('it should set the color correctly' , () => {
        const shape = new Shape();
        shape.setColor('blue');
        expect(shape.color).toBe('blue');
    });
});
// describe the circle class 
describe('Circle class', () => {
    test('should set the color correctly', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.color).toBe('green');
    });

    test('should render the correct SVG markup' , () => {
        const circle = new Circle();
        circle.setColor('red');
        const svgMarkup = circle.render();

        // test if the rendered SVG markup contains the specificed color 
        expect(svgMarkup).toContain('fill="red"');
    });
});
// Test the Square class
describe('Square class', () => {
    test('should set the color correctly', () => {
        const square = new Square();
        square.setColor('purple');
        expect(square.color).toBe('purple');
    });

    test('should render the correct SVG markup', () => {
        const square = new Square();
        square.setColor('yellow');
        const svgMarkup = square.render();

      // Test if the rendered SVG markup contains the specified color 
        expect(svgMarkup).toContain('fill="yellow"');
    });
    });

  // Test the Triangle class
    describe('Triangle class', () => {
    test('should set the color correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('orange');
        expect(triangle.color).toBe('orange');
    });

    test('should render the correct SVG markup', () => {
        const triangle = new Triangle();
        triangle.setColor('brown');
        const svgMarkup = triangle.render();

      // Test if the rendered SVG markup contains the specified color 
        expect(svgMarkup).toContain('fill="brown"');
    });
});

