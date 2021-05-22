import React, { useState } from 'react';
import CharacterList from './CharacterList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Character = () => {
    const [characterList, setCharacterList] = useState([
        { id: 1, character: 'Kujo Miyako', chaImg: "https://s2.vndb.org/ch/87/62187.jpg", seiyuu: 'Sawada Natsu', seiImg: "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940" },
        { id: 2, character: 'Nimi Sora', chaImg: "https://s2.vndb.org/ch/91/62191.jpg", seiyuu: 'Sawasawa Sawa', seiImg: "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940" },
        { id: 3, character: 'Kousaka Haruka', chaImg: "https://s2.vndb.org/ch/98/62198.jpg", seiyuu: 'Nagisa Shirona', seiImg: "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940" },
        { id: 4, character: 'Yuki Noa', chaImg: "https://s2.vndb.org/ch/97/62197.jpg", seiyuu: 'Kanako', seiImg: "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940" },
        { id: 5, character: 'Naruse Satsuki', chaImg: "https://s2.vndb.org/ch/65/71465.jpg", seiyuu: 'Hina Hazuki', seiImg: "http://www.kenproduction.co.jp/admin/img/talent/131/1.jpg?r=502599940" },
    ]);

    return (
        <>
            <h5 id="Character">Character</h5>
            <div className="row p-3">
                {
                    characterList.map(character =>
                        <CharacterList key={character.id} character={character} />
                    )
                }
            </div>
        </>
    );
}

export default Character;