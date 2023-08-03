let button = document.getElementById('button-addon2');


async function downloadMp3(query) {
	let serverURL = 'http://localhost:4000'
	// let serverURL = '/download'
	const res = await fetch(`${serverURL}/download?url=${encodeURIComponent(query)}`);
	// const res = await fetch(`${serverURL}?url=${encodeURIComponent(query)}`);
	if(res.status == 200) {
		var a = document.createElement('a');
		a.href = `${serverURL}/download?url=${query}`;
		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert("Invalid url");
	}
}


button.addEventListener('click', async function(){
	let box = document.getElementById('box');
	let viedo_url = box.value.trim();

	button.disabled = true;

	await downloadMp3(viedo_url);
	
	button.disabled = false;
})
