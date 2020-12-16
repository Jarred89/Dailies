function area(h, w) {
	if ((h > 0) && (w > 0)) {
		return h*w;
	} else {
		return -1
	}
}
console.log(area(5, 3))