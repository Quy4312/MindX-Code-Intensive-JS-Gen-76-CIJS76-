let a=prompt('Nhập chuỗi bất kì');
let b=a.split(',');
document.write('Dãy số ban đầu');
document.write('</br>');
document.write(b);
document.write('</br>');


for(let i=0;i<b.length-1;i++)
{
    for(let j=i+1;j<b.length;j++)
    {
        if(b[i]==b[j]&&b[i]!=','){
            b.splice(j,1);
        }
    }
}
document.write('Dãy số sau khi loại bỏ các phần tử giống nhau');
document.write('</br>');


document.write(b);