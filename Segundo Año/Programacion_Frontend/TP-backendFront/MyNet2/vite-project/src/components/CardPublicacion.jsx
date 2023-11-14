import { Card } from 'primereact/card';
const CardPublicacion = (props) => {
    let post = props.post
    console.log(post)
    const header = () => (
        <img alt="" src={props.imagen} />
    )
    return (
        {/*<div className="card flex">
            <Card title={props.title} header={header}>
                <p>{props.cuerpo}</p>
            </Card>
        </div>*/}
    )
}

export default CardPublicacion;