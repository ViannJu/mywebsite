import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import React from 'react';
import { parse as parseXPath } from '../code/analizadorXPath/Xpath'

//const XPath = require('../code/analizadorXPath/Xpath')
const XPathDesc = require('../code/analizadorXPath/XPathDesc')
const grammar = require('../code/analizadorXML/grammar')
const grammarDesc = require('../code/analizadorXMLDesc/grammarDesc')


class Navigation extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fileDownloadUrl:"",
            OutputTextarea: "",
            XMLTextarea: "",
            InputTextarea: "",
            XML: {
                tipo : '',
                texto : '',
                atributos : [],
                hijos : []
            },
            datosCST: {
                nodes: [
                    { id: 1, label: 'Node 1' },
                    { id: 2, label: 'Node 2' },
                    { id: 3, label: 'Node 3' },
                    { id: 4, label: 'Node 4' },
                    { id: 5, label: 'Node 5' }
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 }
                ]
            },
            datosCSTXML: {
                nodes: [
                    { id: 1, label: 'Node 1' },
                    { id: 2, label: 'Node 2' },
                    { id: 3, label: 'Node 3' },
                    { id: 4, label: 'Node 4' },
                    { id: 5, label: 'Node 5' }
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 }
                ]
            },
            AST:{
                nodes: [
                    { id: 1, label: 'Node 1' },
                    { id: 2, label: 'Node 2' },
                    { id: 3, label: 'Node 3' },
                    { id: 4, label: 'Node 4' },
                    { id: 5, label: 'Node 5' }
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 }
                ]
            },
            graphvizCST:"",
            Mistakes: [],
            MistakesXPath: []
        }
        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    

    setText(){
        console.log("setText Button clicked");
        let text = this.state.InputTextarea;
        if(text=="") return
        var funcion = parseXPath(text);
        if(funcion.errores.length > 0)
        {
            alert("Se detectaron errores en la entrada :( Xpath")
            console.log(funcion.errores)
        }
        var respuesta=funcion.Ejecutar(this.state.XML);
        var AST = funcion.Graficar();
        this.setState({AST:AST})
        this.setState({OutputTextarea: respuesta});  
        var datos = {nodes:funcion.Nodos,edges:funcion.Edges}   
        this.setState({datosCST:datos}) 
        this.setState({graphvizCST:funcion.graphviz})
        this.setState({MistakesXPath: funcion.errores})
    }

    setTextDesc(){
        console.log("setTextDesc Button clicked");
        let text = this.state.InputTextarea;
        if(text=="") return
        var funcion = XPathDesc.parse(text);
        if(funcion.errores.length > 0)
        {
            alert("Se detectaron errores en la entrada :( Xpath")
            console.log(funcion.errores)
        }
        var respuesta=funcion.Ejecutar(this.state.XML);
        var AST = funcion.Graficar();
        this.setState({AST:AST})
        this.setState({OutputTextarea: respuesta});  
        var datos = {nodes:funcion.Nodos,edges:funcion.Edges}   
        this.setState({datosCST:datos}) 
        this.setState({graphvizCST:funcion.graphviz})
        this.setState({MistakesXPath: funcion.errores})
    }

    xmlDesc(){
        var x = this.state.XMLTextarea;
        var resultado = grammarDesc.parse(x);
        if(resultado.errores.length>0)
        {
            alert("Errores en el analisis del XML")
            console.log(resultado.errores);
        }
        console.log(resultado)
        this.setState({XML:resultado.datos})
        this.setState({datosCSTXML:{nodes:resultado.nodes,edges:resultado.edges}})
        this.setState({Mistakes: resultado.errores})
    }

    
    actualizar(){
        var x = this.state.XMLTextarea;
        var resultado = grammar.parse(x)
        if(resultado.errores.length>0)
        {
            alert("Errores en el analisis del XML")
        }
        this.setState({XML:resultado.datos})
        this.setState({datosCSTXML:{nodes:resultado.nodes,edges:resultado.edges}})
        this.setState({Mistakes: resultado.errores})
    }

    handleOnChange = e => {
        this.setState({
            InputTextarea: e.target.value
        })
    } 

    handleXML = e => {
        this.setState({
            XMLTextarea: e.target.value
        })
    }

    descargar()
    {
        if (this.state.XMLTextarea=="") return
        const blob = new Blob([this.state.XMLTextarea])
        const fileDownloadUrl = URL.createObjectURL(blob)
        this.setState({fileDownloadUrl:fileDownloadUrl},
            ()=>{
                this.dofileDownload.click();
                URL.revokeObjectURL(fileDownloadUrl);
                this.setState({fileDownloadUrl: ""})
            }
        )
    }

    fileReader;

    handleSubmit = (event) => {

        this.fileReader = new FileReader();
        this.fileReader.onloadend =  this.handleFileReader;
        this.fileReader.readAsText(event.target.files[0]);
    }

    handleFileReader = (e) => {
        const content = this.fileReader.result;
        console.log(content);
        this.setState({XMLTextarea: content});
        if(content=="") return
        var resultado = grammar.parse(content)
        if(resultado.errores.length>0)
        {
            alert("Errores en el analisis del XML")
        }
        this.setState({XML:resultado.datos})
        this.setState({datosCSTXML:{nodes:resultado.nodes,edges:resultado.edges}})
        this.setState({Mistakes: resultado.errores})
    } 

    handleFocus = (e) =>{
        if(e.target.value=="") return
        var resultado = grammar.parse(e.target.value)        
        console.log(resultado)
        if(resultado.errores.length>0)
        {
            alert("Errores en el analisis del XML")
        }
        this.setState({XML:resultado.datos})
        this.setState({datosCSTXML:{nodes:resultado.nodes,edges:resultado.edges}})
        this.setState({Mistakes: resultado.errores})
    }


    render(){
        return(
            //tag principal
            <header className="App-header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link style={ { textDecoration: 'none' } } to= {{ pathname: "/mywebsite/reporte", datosCST:this.state.datosCST, datosCSTXML:this.state.datosCSTXML, datosAST:this.state.AST ,graphviz:this.state.graphvizCST }}>
                            <a className="nav-link">Reportes</a>
                        </Link>                        
                    </li>                
                    <li className="nav-item">
                        <Link style={ { textDecoration: 'none' } } to= {{ pathname: "/mywebsite/reporteErrores", Mistakes:this.state.Mistakes, MistakesXPath:this.state.MistakesXPath }}>
                            <a className="nav-link">Errores</a>
                        </Link>                        
                    </li>
                    <li className="nav-item">
                        <Link style={ { textDecoration: 'none' } } to= {{ pathname: "/mywebsite/reporteTabla", XML:this.state.XML }}>
                            <a className="nav-link">Tabla Simbolos</a>
                        </Link>                         
                    </li>
                </ul>
            </nav>

            <img src={logo} className="App-logo" alt="logo" />
                Organización de Lenguajes y Compiladores 2
            <p></p>
            

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="custom-file">
                            <input  multiple={false} accept=".xml" id="fileinput" className="fileinput" type="file" ref={this.fileInput} onChange={this.handleSubmit}/>
                            <label for="fileinput">Subir XML</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <a style={{display: "none"}}
                            download={"archivo.xml"}
                            href={this.state.fileDownloadUrl}
                            ref={e=>this.dofileDownload = e}
                        >download it</a>
                        <button className="btn btn-secondary btn-lg" onClick={() => this.descargar()}>Descargar XML</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 block">
                        <div className="row">
                            <div className="col-6 block"> 
                                <button type="button" className="btn btn-primary btn-lg" onClick={ () => this.xmlDesc() }>XML Desc</button>
                            </div>
                            <div className="col-6 block">
                                <button type="button" className="btn btn-primary btn-lg" onClick={ () => this.actualizar() }>XML Asc</button> 
                            </div>
                        </div>
                        <div className="row container">
                            <label className="labelClass">Xml Input</label>
                            <textarea className="Text" placeholder="Bienvenido" defaultValue={this.state.XMLTextarea} onChange={this.handleXML} onBlur={this.handleFocus} />
                        </div>
                    </div>
                    <div className="col-6 block">
                        <div className="row">
                            <div className="col-6 block"> 
                                <button type="submit" className="btn btn-primary btn-lg" onClick={ () => this.setText() }>Ejecutar Asc</button>
                            </div>
                            <div className="col-6 block">
                                <button type="submit" className="btn btn-primary btn-lg" onClick={ () => this.setTextDesc() }>Ejecutar Desc</button>
                            </div>
                        </div>
                        <div className="row container">
                            <label className="labelClass">Xpath Input</label>
                            <textarea className="Text" placeholder="Bienvenido" /*form*/ onChange={this.handleOnChange}></textarea>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="container">
                <div className="row">
                    <label className="labelClass">Output</label>
                    <div className="text-center">
                        <textarea className="Text" readOnly placeholder="Bienvenido" defaultValue={this.state.OutputTextarea} />
                    </div>
                </div>
            </div>

            <p></p>
            <p></p>
            <p></p>

            <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3 text-light ">
                <font size="3">
                <p>
                Grupo 17 <br/>
                Jorge Ambrocio - Marcelo Marroquín - Viany Juárez<br/>
                Organización de Lenguajes y Compiladores 2<br/>
                Escuela de Vacaciones Junio 2021<br/>                
                </p>
                </font>   
            </div>
            </footer>

        </header>
        );
    }
        
}



export default Navigation;