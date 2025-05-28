import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initValue: number;
    children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {

    const [ counter, setCounter ] = createSignal(props.initValue);

    return (
        <>
            {/* <h1>Counter</h1> */}
            { props.children }
            <h2>Value: { counter() }</h2>

            <button 
            onClick={() => setCounter( prev => ++prev )}
            class="bg-blue-500 p-2 mr-2 rounded">+1</button>
            <button 
            onClick={() => setCounter( prev => --prev )}
            class="bg-blue-500 p-2 mr-2 rounded">-1</button>
        </>
    )
}