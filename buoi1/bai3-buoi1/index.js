let a = prompt('Nhập chuỗi bất kì');
let b = a.split(',');
let c = [];
let max = 0;
let max1=0
document.write('Dãy số ban đầu');
document.write('</br>');
document.write(b);
document.write('</br>');


for (let i = 0; i < b.length - 1; i++) {
    if (Number.isInteger(c[b[i]])) {
        console.log(`${b[i]} da khoi tao`)
    }
    else {
        c[b[i]] = 1;
        for (let j = i + 1; j < b.length; j++) {
            if (b[i] == b[j] && b[i] != ',') {
                if (Number.isInteger(c[b[i]])) {
                    console.log(`${b[i]} ++`)

                    c[b[i]]++;
                    if (c[b[i]] > max) {
                        max=c[b[i]]
                        max1 = b[i];
                        // console.log(`Số ${max1} hiện đang lặp lại nhiều nhất`);



                    }
                }
            }
        }
    }
}
document.write(`Số ${max1} xuất hiện nhiều nhất và xuất hiện ${c[max1]} lần`);
document.write('</br>');
// document.write(`Số 1 xuất hiện ${c[1]} lần`);
// document.write('</br>');


// document.write(c[3]);