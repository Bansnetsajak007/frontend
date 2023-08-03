let button = document.getElementById('button-addon2');


async function downloadMp3(query) {
	let serverURL = 'https://server-files.vercel.app'
	const download_url = await fetch(`${serverURL}/download?url=${encodeURIComponent(query)}`);

	let a = document.createElement('a');
	a.href = download_url;
	a.setAttribute('download', '');

	document.body.appendChild(a); // Append the anchor element to the DOM
	a.click(); // Simulate click to trigger the download
	document.body.removeChild(a); // Remove the anchor element after download
}


button.addEventListener('click', async function(){
	let box = document.getElementById('box');
	let viedo_url = box.value.trim();

	button.disabled = true;

	await downloadMp3(viedo_url);
	
	button.disabled = false;
})
