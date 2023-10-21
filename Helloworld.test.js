import hello from "../utils/helloDiego.js"

it ("Should say Hello Levi", ()=>{
    const helloString = hello();

expect(helloString).toBe("Hello Diego");