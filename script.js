let resultado = document.getElementById("resultado");

const convertir = ()=>{
    let select = document.getElementById("grados").value;
    // console.log(select);
    let input = document.getElementById("dato").value;

    if(select == "celsius"){
       let fahrenheit = (input * 1.8) + 32;
       resultado.style.display = "block";
       let texto = `${input} grados celsius son iguales a ${fahrenheit} grados fahrenheit.`
       return resultado.innerHTML = texto;
    }else if(select == "fahrenheit"){
        let celsius = (input - 32) * (5/9);
        resultado.style.display = "block";
       let texto = `${input} grados fahrenheit son iguales a ${celsius} grados celsius.`
       return resultado.innerHTML = texto;
    }
    else{
        return alert("error");
    }
}