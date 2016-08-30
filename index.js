var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  getCart().push({[item]:price})
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  var str = "In your cart, you have"
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])
    str += ` ${key[0]} at $${cart[i][key]},`
  }
  console.log(str.slice(0,-1) + ".")
}
