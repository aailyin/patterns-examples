class Shape {
  move(x, y) {}
  draw() {}
  drawInLibrary(library) {}
}

class Dot extends Shape {
  drawInLibrary(library) {
    library.drawDot(this);
  }
}

class Rectangle extends Shape {
  drawInLibrary(library) {
    library.drawRectangle(this);
  }
}

class Circle extends Shape {
  drawInLibrary(library) {
    library.drawCircle(this);
  }
}

class ShapeLibraryDraw {
  drawDot(dot) {
    console.log(`Draw dot!`);
  }
  drawRectangle(dot) {
    console.log(`Draw rectangle!`);
  }
  drawCircle(dot) {
    console.log(`Draw circle!`);
  }
}

let shapes = [new Dot(), new Rectangle(), new Circle()];
let drawLibrary = new ShapeLibraryDraw();
shapes.forEach(shape => shape.drawInLibrary(drawLibrary));