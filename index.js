// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}

destructivelyAppendDriver("Ralph");



function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}

destructivelyPrependDriver("A")



function destructivelyRemoveLastDriver() {
  drivers.pop()
  return drivers
}

destructivelyRemoveLastDriver()



function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
}

destructivelyRemoveFirstDriver("C")



function appendDriver(name) {
  const drivers2 = [...drivers, name]
  return drivers2
}

appendDriver("Salem")



function prependDriver(name) {
  const drivers3 = [name, ...drivers];
}

prependDriver("Hello Kitty")




removeLastDriver()

removeFirstDriver()


