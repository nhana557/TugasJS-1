/* 
    2.	Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
        90 - 100 = A
        80 - 89 = B
        70 - 79 = C
        60 - 69 = D
        0 - 59 = E
        */
       
function nilaiAverage(mtk, bahasaIndonesia, bahasaInggris, ipa){
    try{
        if(mtk == undefined || bahasaIndonesia == undefined || bahasaInggris == undefined || ipa == undefined) throw "lengkapi semua nilai";
        if(mtk == '' || bahasaIndonesia == '' || bahasaInggris == '' || ipa == '') throw "lengkapi semua nilai";
        if(mtk < 0 || bahasaIndonesia < 0 || bahasaInggris < 0 || ipa < 0) throw 'nilai tidak boleh negatif'
        if(mtk > 100 || bahasaIndonesia > 100 || bahasaInggris > 100 || ipa > 100) throw 'nilai tidak boleh lebih dari 100'
        if(isNaN(mtk) ||isNaN(bahasaIndonesia|| isNaN(bahasaInggris) || isNaN(ipa))) throw "jangan masukan selain angka";
        if(typeof(mtk) !== typeof(Number(mtk)) || typeof(bahasaIndonesia) !== typeof(Number(bahasaIndonesia)) || typeof(bahasaInggris) !== typeof(bahasaInggris) || typeof(ipa) !== typeof(Number(ipa))) throw 'nilai yang anda masukan string'

        let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        if(average >= 90 && average <= 100){
            console.log(`Rata-rata: ${average}`)
            console.log(`Grade: A`)
        }else if(average >= 80 && average <= 89){
            console.log(`Rata-rata: ${average}`)
            console.log(`Grade: B`)
        }else if(average >= 70 && average <= 79){
            console.log(`Rata-rata: ${average}`)
            console.log(`Grade: C`)
        }else if(average >= 60 && average <= 69){
            console.log(`Rata-rata: ${average}`)
            console.log(`Grade: D`)
        }else if(average >= 0 && average <= 59){
            console.log(`Rata-rata: ${average}`)
            console.log(`Grade: E`)
        }
    }catch(err){
        console.log(err)
    }
}
nilaiAverage('0', 100, 100, 100)