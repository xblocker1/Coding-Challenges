// Create a function that calculates the number of different squares in an n * n square grid.

function numberSquares(n){
	return n * (n+1) * (2 * n + 1) / 6
}
