function Atividade1(){
    return (
        <h2>Bem-vindo ao curso de React</h2>
    )
}
<button onClick={() => alert("olá React")}>Clique aqui</button>

function capturarTexto(evento) {
    console.log(evento.target.value)
}
<input type="text" onChange={capturarTexto} />
export default Atividade1
