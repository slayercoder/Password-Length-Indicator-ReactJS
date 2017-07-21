class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {value : ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value : event.target.value});
    }
    render(){
        var prompt = '';
        var inputStyle = {
            border : '1px solid black'
        };
        var h4Style = {
            color : 'black'
        };
        if(this.state.value.length >= 5 && this.state.value.length < 10){
            inputStyle.border = "3px solid green";
            h4Style.color = 'green';
            prompt = "Good";
        }
        if(this.state.value.length < 5 && this.state.value.length > 0){
            inputStyle.border = '3px solid red';
            h4Style.color = 'red';
            prompt = 'Weak'
        }
        if(this.state.value.length >= 10){
            inputStyle.border = '3px solid teal';
            h4Style.color = 'emerald';
            prompt = 'Very Strong';
        }

        return(
            <div>
                <h2>Password</h2>
                <input style =  {inputStyle} type = 'password' value = {this.state.value} onChange = {this.handleChange}/>
                <h3>Input Password : {this.state.value}</h3>
                <h4 style = {h4Style}>{prompt}</h4>
            </div>
        );
    }
}

ReactDOM.render(<Parent/>, document.getElementById('root'));