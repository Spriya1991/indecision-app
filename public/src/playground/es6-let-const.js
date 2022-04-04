// const multiplier={
//     multiplyBy:5 ,
//     numbers:[2,5,7],
//     multiply(){
//         return this.numbers.map((number)=>  'Number:' + number*this.multiplyBy);
//     }

// };
// console.log(multiplier.multiply());
// 4

// const user={
//     name:'Andrew',
//     cities:['London','Agra','Newyork'],
//     placesLivedIn(){
//         return this.cities.map((city)=> this.name + ' has lived in ' + city) ;
//         }
// };
// console.log(user.placesLivedIn());

console.log('app.js is running!')
var app={
    title:'Indecision app',
    subtitle:'put ur hands on computer',
    options:[]
};
const updateoptions=(e)=>{
    e.preventDefault();

const option=e.target.elements.option.value.trim();
    if(option){
        app.options.push(option);
        e.target.elements.option.value=' ';
        renderapp();
    }

};
const removeall=()=>{
    app.options=[ ];
    renderapp();
};
const randomText=()=>{
    const randomNum=Math.floor(Math.random()* app.options.length );
    const pick=app.options[randomNum] ;
    alert(pick)
};
const renderapp=()=>{
    var template =(
        <div>
            <h1> {app.title}</h1>
            {app.subtitle&&<p>{app.subtitle} </p>}
            {app.options.length>0? 'Here are your options' : 'No options'}
            <button onClick={randomText}> What should i do?</button>
            <button onClick={removeall}>removeall</button>
            <ol>
                {app.options.map((option)=>
                {return <li key={option}>{option}</li>})}
            </ol>
            {app.options.length}
            <form onSubmit={updateoptions}>
                <input type='text' name='option'/>
                <button>Addoption</button>
            </form>
        
        </div>
        
        );
        var appRoot = document.getElementById('app');

        ReactDOM.render(template, appRoot);

}

renderapp();

var user={
    name:'Andrew',
    age:28,
    Location:'london'
};
function getLocation(location){
    if(location){
        return <p>Location:{location}</p> 
    }

}
var templateTwo=(
    <div>
        <h1>{user.name? user.name: 'Anonymous' }</h1>
        {(user.age&&user.age>=18) && <p>Age:{user.age} </p>}
        {getLocation(user.Location)}
    </div>


);
    


