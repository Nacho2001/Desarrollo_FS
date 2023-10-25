import { Card } from 'primereact/card';
import "primeflex/primeflex.css";

const NavBar = (logoXl) => {
    return (
        <Card className="w-12 align-items-center" style={{"height":"60px"}}>
            <div className="-mt-5">{logoXl.props}</div>
        </Card>
    )
}

export default NavBar;