/*
function welcome()
{
    return 'hello my homepage';
}

//정규표현식
function reqular(atri)
{
    var pattern = new RegExp('a');
    console.log(pattern.exec(atri));
    //a가 들어간 패턴을 출력
}

function regular_boal(atri)
{
    var pattern = new RegExp('a');
    console.log(pattern.test(atri));
    //a가 들어갔는지 검출
}
*/

function sum()
{
    //arguments : 유사 객체, 배열 - 사용자가 전달한 인자가 안에 들어가있음. 실제론 객체의 인스턴스이다.
    var i, _sum= 0;
    for(i=0; i<arguments.length; i++)
    {
        document.write(i+' :'+arguments[i]+'<br/>');
        _sum +=arguments[i];
    }
   
    return _sum;
}
//alert('result : ' + sum(1,2,3,4));


//생성자함수는 구분을 위해서 앞글자를 대문자로한다.
//모든 전역 변수는 window안의 property이다. 즉 가장 큰 base는 window이다.
//prototype을 이용하여 상속가능. object.prototype.prototype = null.

//object.prototype은 모든객체의 원형
//메뉴얼을 통해 익히기
