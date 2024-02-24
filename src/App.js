import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';

marked.setOptions({
  break: true
})
 
const renderer = new marked.Renderer();
class MyComponent extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    input: ` ## <u >Welcome to my React Markdown Previewer!</u>
#### <u>This is a sub-heading...</u>
#### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == 'Leslie' && lastLine == 'Abayo') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!\n
Or _italic_.\n
Or... wait for it... **_both!_**\n
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header        | Crazy Header | Another Header? |
| :---               | :---         | :---            |
| Your content can   | be here, and | it can be here. |
| And here.          | Okay.        | I think we get i| 

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:`

  };
  this.handleChange = this.handleChange.bind(this);
}
    
    
    handleChange(e){
    this.setState({
    input: e.target.value
    })
  }

  render(){
   const markdown = this.state.input;
  return (
    <div className="background">
      <div className="editor col-11 col-lg-6 border border-1 border-dark" style={{height:"auto", fontSize:"0.7rem"}}>
            <div style={{background:"#4AA3A3", height:"1.5rem", width:"100%"}} className="editor-bar">
              <div> <i class="fa-brands fa-free-code-camp"></i> Editor</div>
              <div> <button><i class="bi bi-arrows-angle-expand"></i> </button></div>   
            </div>
            

            <textarea  
            onChange={this.handleChange} 
            rows="9" 
            className="container"
            value={this.state.input}
            > 
             
             
            </textarea>
                   
       </div> 

       <div style={{background:"#4AA3A3", height:"1.5rem"}} className="previewer-bar col-10 col-lg-10">
              <div> <i class="fa-brands fa-free-code-camp"></i> Previewer </div>
              <div> <button><i class="bi bi-arrows-angle-expand"></i></button> </div>    
            </div> 
       <div dangerouslySetInnerHTML={{__html: marked(markdown, {renderer : renderer }),}} className="Previewer col-10 col-lg-10 border border-1 border-dark" style={{height:"auto", background:"#c0d8d8"}}>
          {/*This div that renders the converted markdown should not contain any child*/}      
       </div>   

       <p styles={{marginTop:"0.5rem"}} className="text-center fs-1 text-success">&#169; Designed by Leslie Abayo </p>   
    </div>
    
  )
}
}
export default MyComponent;