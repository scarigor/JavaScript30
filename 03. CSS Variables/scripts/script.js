const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	const suff = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suff);
	console.log(suff);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));