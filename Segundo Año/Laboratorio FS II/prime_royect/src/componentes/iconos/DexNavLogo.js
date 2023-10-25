import pokeballIcon from "./pokeball-icon2.png";

const DexNavLogo = () => {
    return (
        <div className='flex flex-row'>
            <img src={pokeballIcon} alt="" width="40" height="40"/>
            <b className='mt-3'>DexNav</b>
        </div>
    )
}
export default DexNavLogo;