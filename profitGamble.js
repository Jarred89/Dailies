function profitableGamble(prob, prize, pay) {
	return prob*prize > pay
}
console.log(profitableGamble(0.2, 50, 9))