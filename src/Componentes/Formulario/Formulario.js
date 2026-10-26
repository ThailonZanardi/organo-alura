import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"
const Formulario = () => {

    const times = [
        'Tech',
        'Prospecção',
        'Gestores',
        'SDR',
        'Closers'
    ]
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do calaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Informe seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>        
        </section>
    )
}

export default Formulario