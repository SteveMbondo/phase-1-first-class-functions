function receivesAFunction(name) {
    return name()
}
function returnsANamedFunction() {
    return function named() {}
}
function returnsAnAnonymousFunction() {
    return function () {}
}
