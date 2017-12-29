# Logic---Subword-Combination

Buat sebuah function, yang menerima string berupa sebuah kata, kemudian mengembalikan huruf dan kombinasi huruf. Aturan kombinasi huruf adalah : index huruf pertama lebih kecil dari index huruf-huruf di belakangnya

Perhatikan contoh di bawah ini :

Driver Code :
function getCombinations(value) {
	//write your code here
}

Contoh 1 :
getCombinations(‘cros’)

//Result yang diharapkan, ada 10 kombinasi, yaitu :
["c", "cr", "cro", "cros", "r", "ro", "ros", "o", "os", "s"]



Contoh 2 :
getCombinations(‘artic’)

//Result yang diharapkan, ada 15 kombinasi, yaitu :
["a", "ar", "art", "arti", "artic", "r", "rt", "rti", "rtic", "t", "ti", "tic", "i", "ic", "c"]



Contoh 3 :
getCombinations(‘darwin’)

//Result yang diharapkan, ada 21 kombinasi, yaitu :
["d", "da", "dar", "darw", "darwi", "darwin", "a", "ar", "arw", "arwi", "arwin", "r", "rw", "rwi", "rwin", "w", "wi", "win", "i", "in", "n"]
