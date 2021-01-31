function setName( name) {
    return name;
}

function sayHello(name, fn) {
    console.log('Hello ', name);
    console.log('My name is ', fn(name));
}

sayHello('Công', setName);