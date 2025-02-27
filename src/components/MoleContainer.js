import { useState } from 'react'
import Mole from './Mole'
import Empty from './Empty'

export default function MoleContainer(props)  {
    let [isShowing,  setIsShowing ] = useState(false);

    const handleMoleClicked = (e) => {
        if (isShowing) {
        props.addToScore(1);
        setIsShowing(false)
    }
    }

    

    return ( <div>
       {
isShowing ?
<Mole setIsShowing ={setIsShowing} moleClicked={handleMoleClicked} />
:
<Empty setIsShowing={setIsShowing} />

       }
    
</div>
)

  

}

