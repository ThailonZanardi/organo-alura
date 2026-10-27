import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import OrganoBotao from "../OrganoBotao/OrganoBotao"
import "./Formulario.css"
const Formulario = () => {

    const times = [
        'Tech',
        'Prospecção',
        'Gestores',
        'SDR',
        'Closers'
    ]
    
    const aoSalvar = (evento)=> {
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return(
        <section className="formulario">           
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do calaborador.</h2>
                <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio ={true} label="Cargo" placeholder="Informe seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio ={true} label="Time" itens={times}/>
                <OrganoBotao>Criar card</OrganoBotao>
            </form>        
        </section>
    )
}

export default Formulario