interface Shape {
    draw(): void;
}


class Rectangle implements Shape {
    draw(): void {
        console.log("Rectangle draw")
    }
}

class Circle implements Shape {
    draw(): void {
        console.log("Circle draw")
    }
}


class ShapeFactory {
    static createShape(type: string): Shape | void {
        switch(type) {
            case "circle": {
                return new Circle()
            }
            case "rectangle": {
                return new Rectangle();
            }
            default: {
                throw new Error("Unknow shape")
            }
        }
    }
}

function main() {
    const circle = ShapeFactory.createShape("circle")
    const rect = ShapeFactory.createShape("rectangle")
}

export default main