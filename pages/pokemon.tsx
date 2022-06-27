import type { NextPage } from 'next'
import style from '../styles/hab.module.sass'

const Pokemon: NextPage = () => {
    const pkmImage = 'http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg';

    function consult() {
        fetch('http://localhost:3000/api/hello')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
            );
    }

    consult();

    return (
        <>
            <img src={pkmImage} />
        </>
    )
}

export default Pokemon
