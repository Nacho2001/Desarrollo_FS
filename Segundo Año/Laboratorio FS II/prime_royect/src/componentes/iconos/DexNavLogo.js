import pokeballIcon from "./pokeball-icon2.png";

const DexNavLogo = () => {
    return (
        <div className='flex flex-row mr-2'>
            <img src={pokeballIcon} alt="" width="40" height="40"/>
            <b className='mt-2'>DexNav</b>
        </div>
    )
}
export default DexNavLogo;