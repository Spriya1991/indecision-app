class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleadd=this.handleadd.bind(this);
        this.handlesub=this.handlesub.bind(this);
        this.handlereset=this.handlereset.bind(this);


        this.state={
            count: props.count
        };
    }
    handleadd(){
        this.setState((prevState)=>{
            return{
                count:prevState.count +1
            }
            });
            };
    handlesub(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
                }

            })
            };
    handlereset(){
        this.setState(()=>{
            return{
                count:0
            };
        })


    }      
    render(){
        return(     
            <div>
               <p>Count: {this.state.count} </p> 
                <button onClick={this.handleadd}>add</button>
                <button onClick={this.handlesub}>sub</button>
                <button onClick={this.handlereset}>Reset</button>


            </div>
        );

    }



}
Counter.defaultProps={
    count:0
};
ReactDOM.render(<Counter /> , document.getElementById('app'));


























// let count=0;
// const add=()=>{
//     count++;
//     render();
// };

// const sub=()=>{
//     count--;
//     render();
// };
// const reset=()=>{
//     count=0;
//     render();
// };
// var render=()=>{
//     var counterapp=(
//         <div>
//             count:{count}
//             <button onClick={add}>add</button>
//             <button onClick={sub}>sub</button>
//             <button onClick={reset}>reset</button>
    
    
//         </div>
//     );
//     ReactDOM.render(counterapp, document.getElementById('app'));

// }

// render();
