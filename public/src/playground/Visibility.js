let visible=false;

const togglevisibility=()=>{
    visible=!visible;
    Visibility();
}
const Visibility=()=>{
    const jsx=(
        <div>
            <h1>Visibility</h1>
            <button onClick={togglevisibility}>{visible? 'hide details': 'show details'}</button>
            {visible && <p> kakjsdlkjadkldjlkjlkj</p>}
        </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));

}
Visibility();


