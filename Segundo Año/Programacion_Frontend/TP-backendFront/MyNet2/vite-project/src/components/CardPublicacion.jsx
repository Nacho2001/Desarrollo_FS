import { Card } from 'primereact/card';
const CardPublicacion = (props) => {
    let post = props.post
    const header = () => (
        <img alt="" src={post.imagen} />
    )
    const subtitle = `${post.usuario}, ${post.fecha}`
    return (
        <div key={post.id} className="card flex">
            <Card title={post.titulo} subTitle={subtitle} header={header}>
                {post.cuerpo}
            </Card>
        </div>
    )
}

export default CardPublicacion;