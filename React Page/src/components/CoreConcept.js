export function CoreConcept(props){
    return (
        <li>
            <img src ={props.img} alt ={props.title}/>
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
        </li>
    );
}

