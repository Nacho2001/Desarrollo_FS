import { Card } from 'primereact/card';
const CardPublicacion = (props) => {
    const header = () => (
        <img alt="" src={props.imagen} />
    )
    return (
        <div className="card flex">
            <Card title={props.title} header={header}>
                <p>{props.cuerpo}</p>
            </Card>
        </div>
    )
}

export default CardPublicacion;