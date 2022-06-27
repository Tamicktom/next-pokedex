type propss = {
    sprite: string;
}

import style from './style.module.sass'

function PokemonImage ({ sprite }: propss) {
    const pkmImage = 'http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg';

    return (
        <>
            <img src={sprite} />
        </>
    )
}

export default PokemonImage
