
//Enum de tipos
export const Tipo = {
    "INTEGER" : 0,
    "DECIMAL" : 1,
    "STRING"  : 2,
    "NODO"    : 3,
    "BOOLEAN" : 4,
    "ATRIB"   : 5,
    "ERROR"   : 6,
    "SIBLING" : 7
} 

export var Siblings = []

export const Colision = 
[
  [true , true , false, false, false, true , false],
  [true , true , false, false, false, true , false],
  [false, false, true , true , false, true , false],
  [false, false, true , true , false, true , false],
  [false, false, false, false, true , false, false],
  [true , true , true , true , false, true , false],
  [false, false, false, false, false, false, false]
]

export const ColisionTipo = 
[
  [Tipo.INTEGER, Tipo.DECIMAL, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.DECIMAL, Tipo.ERROR],
  [Tipo.DECIMAL, Tipo.DECIMAL, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.DECIMAL, Tipo.ERROR],
  [Tipo.ERROR,   Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,   Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,   Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.DECIMAL, Tipo.DECIMAL, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,   Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
]

export const ColisionLogical = 
[
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.BOOLEAN, Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
  [Tipo.ERROR,    Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR,   Tipo.ERROR, Tipo.ERROR  , Tipo.ERROR],
]


export const TipoPath = {
    "ABS" : "absoluto",
    "REL" : "relativo"
}

export class Comando
{
  constructor(Instrucciones,Nodos,Edges,graphviz,errores,tablaGramatica)
  {
    this.Instrucciones = Instrucciones
    this.Nodos=Nodos
    this.Edges=Edges
    this.graphviz=graphviz
    this.errores = errores
    this.tablaGramatica = tablaGramatica
  }

  Ejecutar(XML)
  {
    var Salida = ""
    var retornos=[]
    for (const iterator of this.Instrucciones) {
      var {Nodo} = require('../Expresion/Expresiones')
      retornos = retornos.concat(iterator.getValor([new Nodo(Tipo.NODO,XML,[],"",1)]))
    }
    for (const retorno of retornos) {
      if(retorno.tipo == Tipo.NODO || retorno.tipo == Tipo.ATRIB)
      {
        Salida += ConvertiraXML(retorno.entorno,0) + "\n"
      }
      else if(retorno.tipo==Tipo.ERROR)
      {
        Salida += "No se encontro esta consulta" + "\n"
      }
      else
      {
        Salida += retorno.valor + "\n"
      }
    }
    return Salida;
  }

  Graficar()
  {
    var ListaNodes = []
    var ListaEdges = []
    var contador = {num:0}
    
    var nodoActual = {id:contador.num,label:"XPath"}
    contador.num++
    ListaNodes.push(nodoActual)
    for(var i = 0; i < this.Instrucciones.length; i++)
    {
      var nodos = this.Instrucciones[i].Graficar(ListaNodes,ListaEdges,contador)
      if(i!=0)
      {
        ListaNodes.push({id:contador.num,label:"|"})
        contador.num++
      }
      for (const nodo of nodos) {
        ListaEdges.push({from:nodoActual.id,to:nodo.id})
      }
    }
    return {nodes:ListaNodes,edges:ListaEdges}
  }
}

function ConvertiraXML(nodos,iteracion)
{
    var XML=""
    for (var i=0;i<iteracion;i++) {
        XML += "  "
    }
    XML+="<"+nodos.tipo+" "
    for (const atributo of nodos.atributos) {
        XML+=`${atributo.nombre}="${atributo.valor}" `
    }
    if(nodos.hijos.length>0 || nodos.texto!="")
    {
        XML+=">"
        XML+=nodos.texto
        for (const hijo of nodos.hijos) {
            XML+= "\n" + ConvertiraXML(hijo,iteracion+1)
        }
        if(nodos.hijos.length > 0)
        {
            XML += "\n";
            for (var i=0;i<iteracion;i++) {
                XML += "  "
            }
        }
        XML+="</"+nodos.tipo+">"
    }   
    else
    {
        XML += "/>"
    }
    return XML
}

export function Predicado(predicado,retorno)
{
  if(predicado.length > 0)
  {
    for (const iterator of predicado) {
      var posibles = iterator.getValor(retorno)
      if(posibles.length==0)
      {
        return []
      }
      if(posibles[0].tipo!=undefined)
      {
        switch(posibles[0].tipo)
        {
          case Tipo.NODO:
            retorno=posibles
            break
          case Tipo.INTEGER:
          case Tipo.DECIMAL:
            var temp=[]
            var posicion=1;
            for (const posible of posibles) {
              if(retorno[posible.valor-1])
              {
                temp.push(retorno[posible.valor-1])
                posicion++;
              }
            }
            retorno = temp
            break
        }
      }
    } 
  }
  return retorno
}

export function concatenarNodos(principales,secundarios)
{
  var posicion = principales.length>0 ? principales[principales.length-1].posicion : 1
  for (const secundario of secundarios) {
    secundario.setPosicion(posicion)
    principales.push(secundario)
    posicion++;
  }
  return principales
}

export function concatenarNodosOrden(principales,secundarios)
{
  var nuevoRetorno = []
  var iSec = 0
  for (const principal of principales) {
    for (; iSec < secundarios.length; iSec++) {
      if(principal.posicion > secundarios[iSec].posicion)
      {
        nuevoRetorno.push(secundarios[iSec]) 
      }
      else
      {
        break
      }
    }
    nuevoRetorno.push(principal)
  }
  for (; iSec < secundarios.length; iSec++) {
    nuevoRetorno.push(secundarios[iSec]) 
  }
  return nuevoRetorno
}