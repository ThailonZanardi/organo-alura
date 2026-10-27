import './OrganoBotao.css'

const OrganoBotao = (props) => {
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}
export default OrganoBotao