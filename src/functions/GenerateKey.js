function GenerateKey(result, target) {
	let key = window.MovieGuru.GlobalData.NextKey.toString();
	window.MovieGuru.GlobalData.NextKey++;
	return key;
}

export default GenerateKey;
