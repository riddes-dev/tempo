import {useState} from 'react';

function Tempo(props) {
    console.log('> Passando pelo Frontend;');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (Dinâmico)</div>
            <div>{props.staticDateString} (Estático)</div>
        </div>
    )  
}

Export async function getStaticProps(){
    console.log('> Passando pelo getStaticProps();');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}


function Home(){
    return (
        <div>
        <h1>Nova página</h1>
        <Contador />
        </div>
        )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Tempo;
export default Home;
