class Example {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    printMessage() {
        console.log(this.message);
    }
}

const example = new Example("Hello, TypeScript!");
example.printMessage();