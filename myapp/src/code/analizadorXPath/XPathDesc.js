/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var XPathDesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,13],$V3=[1,14],$V4=[1,35],$V5=[1,37],$V6=[1,38],$V7=[1,39],$V8=[1,40],$V9=[1,41],$Va=[1,42],$Vb=[1,43],$Vc=[1,44],$Vd=[1,33],$Ve=[1,52],$Vf=[1,45],$Vg=[1,46],$Vh=[1,47],$Vi=[1,48],$Vj=[1,49],$Vk=[1,50],$Vl=[1,25],$Vm=[1,30],$Vn=[1,31],$Vo=[1,32],$Vp=[1,34],$Vq=[2,4],$Vr=[1,54],$Vs=[1,7,76],$Vt=[2,8],$Vu=[1,56],$Vv=[1,7,11,76],$Vw=[2,11],$Vx=[1,58],$Vy=[1,7,11,14,76],$Vz=[1,7,11,14,18,19,20,21,22,23,76],$VA=[2,24],$VB=[1,68],$VC=[1,69],$VD=[1,7,11,14,18,19,20,21,22,23,26,27,76],$VE=[2,30],$VF=[1,71],$VG=[1,72],$VH=[1,73],$VI=[1,74],$VJ=[1,7,11,14,18,19,20,21,22,23,26,27,30,31,32,33,76],$VK=[2,42],$VL=[1,81],$VM=[1,82],$VN=[1,7,11,14,18,19,20,21,22,23,26,27,30,31,32,33,35,37,76],$VO=[2,48],$VP=[1,86],$VQ=[1,7,11,14,18,19,20,21,22,23,26,27,30,31,32,33,35,37,75,76],$VR=[1,90],$VS=[2,65],$VT=[26,27,35,37,52,53,55,56,57,58,59,60,61,63,65,68,69,70,71,72,73,80,81,82,83,86],$VU=[2,51],$VV=[63,65];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"XPath":3,"Expr":4,"ExprSingle":5,"P_Expr":6,"PIPE":7,"OrExpr":8,"AndExpr":9,"P_OrExpr":10,"ROR":11,"ComparisonExpr":12,"P_AndExpr":13,"RAND":14,"AdditiveExpr":15,"SUB_AdditiveExpr":16,"GeneralComp":17,"IGUAL":18,"DIFERENTE":19,"MENOR":20,"MENORIG":21,"MAYOR":22,"MAYORIG":23,"MultiplicativeExpr":24,"P_AdditiveExpr":25,"MAS":26,"MENOS":27,"UnaryExpr":28,"P_MultiplicativeExpr":29,"POR":30,"DIV":31,"IDIV":32,"MOD":33,"PathExpr":34,"BARRA":35,"SUB_BARRA":36,"DOBLEBARRA":37,"RelativePathExpr":38,"StepExpr":39,"P_RelativePathExpr":40,"PostfixExpr":41,"AxisStep":42,"ForwardStep":43,"SUB_PredicateList":44,"ReverseStep":45,"PredicateList":46,"Predicate":47,"P_PredicateList":48,"AbbrevForwardStep":49,"ForwardAxis":50,"NameTest":51,"ARROBA":52,"RCHILD":53,"DOBLEDOSPUNTOS":54,"RDESCENDANT":55,"RATTRIBUTE":56,"RSELF":57,"RDESSELF":58,"RFOLLOWSIBLING":59,"RFOLLOW":60,"RNAMESPACE":61,"NodeTest":62,"NOMBRE":63,"Wildcard":64,"ASTERISCO":65,"AbbrevReverseStep":66,"ReverseAxis":67,"DOBLEPUNTO":68,"RPARENT":69,"RANCESTOR":70,"RPRECEDSIBLING":71,"RPRECED":72,"RANCESTORORSELF":73,"PrimaryExpr":74,"CORA":75,"CORB":76,"Literal":77,"FunctionCall":78,"ContextItemExpr":79,"ParenthesizedExpr":80,"INTEGER":81,"DECIMAL":82,"CADENA":83,"PARENTESISA":84,"PARENTESISC":85,"PUNTO":86,"$accept":0,"$end":1},
terminals_: {2:"error",7:"PIPE",11:"ROR",14:"RAND",18:"IGUAL",19:"DIFERENTE",20:"MENOR",21:"MENORIG",22:"MAYOR",23:"MAYORIG",26:"MAS",27:"MENOS",30:"POR",31:"DIV",32:"IDIV",33:"MOD",35:"BARRA",37:"DOBLEBARRA",52:"ARROBA",53:"RCHILD",54:"DOBLEDOSPUNTOS",55:"RDESCENDANT",56:"RATTRIBUTE",57:"RSELF",58:"RDESSELF",59:"RFOLLOWSIBLING",60:"RFOLLOW",61:"RNAMESPACE",63:"NOMBRE",65:"ASTERISCO",68:"DOBLEPUNTO",69:"RPARENT",70:"RANCESTOR",71:"RPRECEDSIBLING",72:"RPRECED",73:"RANCESTORORSELF",75:"CORA",76:"CORB",80:"ParenthesizedExpr",81:"INTEGER",82:"DECIMAL",83:"CADENA",84:"PARENTESISA",85:"PARENTESISC",86:"PUNTO"},
productions_: [0,[3,1],[4,2],[6,3],[6,0],[5,1],[8,2],[10,3],[10,0],[9,2],[13,3],[13,0],[12,2],[16,2],[16,0],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[15,2],[25,3],[25,3],[25,0],[24,2],[29,3],[29,3],[29,3],[29,3],[29,0],[28,1],[28,2],[28,2],[34,2],[34,2],[34,1],[36,1],[36,0],[38,2],[40,3],[40,3],[40,0],[39,1],[39,1],[42,2],[42,2],[44,1],[44,0],[46,2],[48,2],[48,0],[43,1],[43,2],[49,2],[49,1],[50,2],[50,2],[50,2],[50,2],[50,2],[50,2],[50,2],[50,2],[62,1],[51,1],[51,1],[64,1],[45,1],[45,2],[66,1],[67,2],[67,2],[67,2],[67,2],[67,2],[41,2],[47,3],[74,1],[74,1],[74,1],[74,1],[77,1],[77,1],[77,1],[78,3],[79,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 $$[$0].reverse();this.$=new Comando($$[$0],pilaNodos,PilaEdges,GrahpvizNodo+GrahpvizEdges);return this.$ 
break;
case 2: case 3: case 50:
 this.$ = $$[$0]; this.$.push($$[$0-1]); 
break;
case 4: case 42: case 48: case 51:
 this.$ = []; 
break;
case 5: case 15: case 16: case 17: case 18: case 19: case 20: case 31: case 34: case 43: case 44: case 47: case 64: case 65: case 66: case 67: case 78: case 79: case 80: case 81:
 this.$ = $$[$0]; 
break;
case 6: case 7:
 if($$[$0]==null){this.$=$$[$0-1];}else{this.$=new Logical($$[$0-1],"or",$$[$0]);} 
break;
case 8: case 14: case 24: case 30:
 this.$ = null; 
break;
case 9: case 10:
 if($$[$0]==null){this.$=$$[$0-1];}else{this.$=new Logical($$[$0-1],"and",$$[$0]);} 
break;
case 11:
 this.$ = null 
break;
case 12: case 21: case 25:
 if($$[$0]==null){this.$=$$[$0-1];}else{this.$=$$[$0]; this.$.izq = $$[$0-1];} 
break;
case 13:
 this.$ = new ComparisonExp(null,$$[$0-1],$$[$0]); 
break;
case 22: case 26: case 27: case 28: case 29:
 if($$[$0]==null){this.$=new Arithmetic(null,$$[$0-2],$$[$0-1]);}else{this.$ = $$[$0]; this.$.izq = $$[$0-1]; } 
break;
case 23:
 if($$[$0]==null){this.$=new Arithmetic(null,$$[$0-2],$$[$0-1]);}else{this.$ = $$[$0]; this.$.izq = $$[$0-1];} 
break;
case 32: case 33: case 63: case 74:
  
break;
case 35:
 $$[$0][0].tipo=TipoPath.REL;this.$=new PathExp($$[$0]); 
break;
case 36:
 this.$=new PathExp($$[$0]); 
break;
case 37:
 $$[$0][0].tipo=TipoPath.ABS;this.$=new PathExp($$[$0]); 
break;
case 38:
 this.$=new PathExp([]); 
break;
case 39:
 $$[$0].push($$[$0-1]); $$[$0].reverse();  this.$ = $$[$0]; 
break;
case 40:
 this.$ = $$[$0]; $$[$0-1].tipo = TipoPath.ABS; this.$.push($$[$0-1]); 
break;
case 41:
 this.$ = $$[$0]; $$[$0-1].tipo = TipoPath.REL; this.$.push($$[$0-1]);
break;
case 45: case 46: case 76:
 this.$ = $$[$0-1]; this.$.predicado = $$[$0]; 
break;
case 49:
 this.$ = $$[$0]; this.$.push($$[$0-1]); this.$.reverse(); 
break;
case 52: case 68:
 this.$=$$[$0]; 
break;
case 53:
 this.$=$$[$0-1]; this.$.nombre=$$[$0]; 
break;
case 54:
 this.$=new Atributo($$[$0],[],TipoPath.ABS); 
break;
case 55:
 this.$=new Camino($$[$0],[],TipoPath.ABS); 
break;
case 56:
 this.$=new Child(null,[],TipoPath.ABS); 
break;
case 57:
 this.$=new Descendant(null,[],TipoPath.ABS); 
break;
case 58:
 this.$=new Attribute(null,[],TipoPath.ABS); 
break;
case 59:
 this.$=new Self(null,[],TipoPath.ABS); 
break;
case 60:
 this.$=new DescSelf(null,[],TipoPath.ABS); 
break;
case 61:
 this.$=new FollowSibling(null,[],TipoPath.ABS); 
break;
case 62:
 this.$=new Follow(null,[],TipoPath.ABS); 
break;
case 69:
 this.$=$$[$0-1]; this.$.nombre=$$[$0];  
break;
case 70:
 this.$=new CaminoInverso("*",[],TipoPath.ABS); 
break;
case 71:
 this.$=new Parent(null,[],Tipo.ABS); 
break;
case 72:
 this.$=new Ancestor(null,[],Tipo.ABS); 
break;
case 73:
 this.$=new PrecedingSibling(null,[],Tipo.ABS); 
break;
case 75:
 this.$=new AncestorSelf(null,[],Tipo,Tipo.ABS); 
break;
case 77:
 this.$ = $$[$0-1]; 
break;
case 82:
 this.$=new Literal(Tipo.INTEGER,$$[$0]); 
break;
case 83:
 this.$=new Literal(Tipo.DECIMAL,$$[$0]); 
break;
case 84:
 this.$=new Literal(Tipo.STRING,$$[$0]); 
break;
case 85:
 this.$ = new CallFunction([],TipoPath.ABS,$$[$0-2]); 
break;
case 86:
 this.$=new ContextItemExpr([],TipoPath.ABS); 
break;
}
},
table: [{3:1,4:2,5:3,8:4,9:5,12:6,15:7,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{1:[3]},{1:[2,1]},{1:$Vq,6:53,7:$Vr},o($Vs,[2,5]),o($Vs,$Vt,{10:55,11:$Vu}),o($Vv,$Vw,{13:57,14:$Vx}),o($Vy,[2,14],{16:59,17:60,18:[1,61],19:[1,62],20:[1,63],21:[1,64],22:[1,65],23:[1,66]}),o($Vz,$VA,{25:67,26:$VB,27:$VC}),o($VD,$VE,{29:70,30:$VF,31:$VG,32:$VH,33:$VI}),o($VJ,[2,31]),{26:$V0,27:$V1,28:75,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{26:$V0,27:$V1,28:76,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VJ,[2,38],{39:16,41:17,42:18,74:19,43:20,45:21,77:22,78:23,79:24,49:26,50:27,66:28,67:29,51:36,64:51,36:77,38:78,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,65:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp}),{38:79,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VJ,[2,36]),o($VJ,$VK,{40:80,35:$VL,37:$VM}),o($VN,[2,43]),o($VN,[2,44]),o($VN,$VO,{44:83,46:84,47:85,75:$VP}),o($VN,$VO,{46:84,47:85,44:87,75:$VP}),o($VN,$VO,{46:84,47:85,44:88,75:$VP}),o($VQ,[2,78]),o($VQ,[2,79]),o($VQ,[2,80]),o($VQ,[2,81]),o($VQ,[2,52]),{51:89,63:$VR,64:51,65:$Ve},o($VQ,[2,68]),{51:91,63:$VR,64:51,65:$Ve},o($VQ,[2,82]),o($VQ,[2,83]),o($VQ,[2,84]),o($VQ,$VS,{84:[1,92]}),o($VQ,[2,86]),{51:93,63:$VR,64:51,65:$Ve},o($VQ,[2,55]),{54:[1,94]},{54:[1,95]},{54:[1,96]},{54:[1,97]},{54:[1,98]},{54:[1,99]},{54:[1,100]},{54:[1,101]},o($VQ,[2,70]),{54:[1,102]},{54:[1,103]},{54:[1,104]},{54:[1,105]},{54:[1,106]},o($VQ,[2,66]),o($VQ,[2,67]),{1:[2,2]},{5:107,8:4,9:5,12:6,15:7,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($Vs,[2,6]),{9:108,12:6,15:7,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($Vv,[2,9]),{12:109,15:7,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($Vy,[2,12]),{15:110,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VT,[2,15]),o($VT,[2,16]),o($VT,[2,17]),o($VT,[2,18]),o($VT,[2,19]),o($VT,[2,20]),o($Vz,[2,21]),{24:111,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{24:112,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VD,[2,25]),{26:$V0,27:$V1,28:113,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{26:$V0,27:$V1,28:114,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{26:$V0,27:$V1,28:115,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{26:$V0,27:$V1,28:116,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VJ,[2,32]),o($VJ,[2,33]),o($VJ,[2,34]),o($VJ,[2,37]),o($VJ,[2,35]),o($VJ,[2,39]),{39:117,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},{39:118,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VN,[2,76]),o($VN,[2,47]),o($VN,$VU,{48:119,47:120,75:$VP}),{5:121,8:4,9:5,12:6,15:7,24:8,26:$V0,27:$V1,28:9,34:10,35:$V2,37:$V3,38:15,39:16,41:17,42:18,43:20,45:21,49:26,50:27,51:36,52:$V4,53:$V5,55:$V6,56:$V7,57:$V8,58:$V9,59:$Va,60:$Vb,61:$Vc,63:$Vd,64:51,65:$Ve,66:28,67:29,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:19,77:22,78:23,79:24,80:$Vl,81:$Vm,82:$Vn,83:$Vo,86:$Vp},o($VN,[2,45]),o($VN,[2,46]),o($VQ,[2,53]),o($VQ,$VS),o($VQ,[2,69]),{85:[1,122]},o($VQ,[2,54]),o($VV,[2,56]),o($VV,[2,57]),o($VV,[2,58]),o($VV,[2,59]),o($VV,[2,60]),o($VV,[2,61]),o($VV,[2,62]),o($VV,[2,63]),o($VV,[2,71]),o($VV,[2,72]),o($VV,[2,73]),o($VV,[2,74]),o($VV,[2,75]),{1:$Vq,6:123,7:$Vr},o($Vs,$Vt,{10:124,11:$Vu}),o($Vv,$Vw,{13:125,14:$Vx}),o($Vy,[2,13]),o($Vz,$VA,{25:126,26:$VB,27:$VC}),o($Vz,$VA,{25:127,26:$VB,27:$VC}),o($VD,$VE,{29:128,30:$VF,31:$VG,32:$VH,33:$VI}),o($VD,$VE,{29:129,30:$VF,31:$VG,32:$VH,33:$VI}),o($VD,$VE,{29:130,30:$VF,31:$VG,32:$VH,33:$VI}),o($VD,$VE,{29:131,30:$VF,31:$VG,32:$VH,33:$VI}),o($VJ,$VK,{40:132,35:$VL,37:$VM}),o($VJ,$VK,{40:133,35:$VL,37:$VM}),o($VN,[2,49]),o($VN,$VU,{47:120,48:134,75:$VP}),{76:[1,135]},o($VQ,[2,85]),{1:[2,3]},o($Vs,[2,7]),o($Vv,[2,10]),o($Vz,[2,22]),o($Vz,[2,23]),o($VD,[2,26]),o($VD,[2,27]),o($VD,[2,28]),o($VD,[2,29]),o($VJ,[2,40]),o($VJ,[2,41]),o($VN,[2,50]),o($VQ,[2,77])],
defaultActions: {2:[2,1],53:[2,2],123:[2,3]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  
  const {Tipo,TipoPath,Comando} = require("./AST/Entorno");
  const {Logical} = require("./Expresion/Logical");
  const {Arithmetic} = require("./Expresion/Arithmetics")
  const {Literal,PathExp} = require("./Expresion/Expresiones");
  const { ComparisonExp } = require('./Expresion/Comparison')
  const { Atributo,Camino,Child,Descendant,Attribute,Self,DescSelf,FollowSibling,Follow } = require('./Expresion/axes')
  const { CaminoInverso,Parent,Ancestor,PrecedingSibling,AncestorSelf } = require('./Expresion/axes')
  const { ContextItemExpr,CallFunction } = require('./Expresion/postfix')
  

  // Datos { id:contador,label:'Nombre' }
  var pilaHijos = []
  var GrahpvizNodo = ""
  var pilaNodos= []
  // DAtos { from:idActual, to: idHijos }
  var PilaEdges= []
  var GrahpvizEdges = ""
  var contador = 0
  //Genera los padres en funcion de los ultimos datos en la pila de Hijos
  function generarPadre (posicion)
  {
    posicion--
    var Edges = pilaHijos.pop()  
    for(const temp of Edges)
    {
      PilaEdges.push({from:contador+posicion, to:temp.id})
      GrahpvizEdges += `${contador+posicion} -> ${temp.id}\n`
    }
  }
  //Funcion que recive X parametros 
  function generarHijos()
  {
    var Hijos=[]
    for(var i=0;i < arguments.length; i++)
    {
      var hijo = {id:contador,label:arguments[i]}
      Hijos.push(hijo)
      pilaNodos.push(hijo)
      GrahpvizNodo += `${contador}[label="${arguments[i]}"]\n`
      contador++
    }
    pilaHijos.push(Hijos)
  }
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "ROR"
break;
case 1:return "RAND"
break;
case 2:return "RRETURN"
break;
case 3:return "RFOR"
break;
case 4:return "RIN"
break;
case 5:return "RTO"
break;
case 6:return "EQ"
break;
case 7:return "NE"
break;
case 8:return "LT"
break;
case 9:return "LE"
break;
case 10:return "GT"
break;
case 11:return "GE"
break;
case 12:return "RCHILD"
break;
case 13:return "RDESSELF"
break;
case 14:return "RDESCENDANT"
break;
case 15:return "RATTRIBUTE"
break;
case 16:return "RSELF"
break;
case 17:return "RFOLLOWSIBLING"
break;
case 18:return "RFOLLOW"
break;
case 19:return "RNAMESPACE"
break;
case 20:return "RPARENT"
break;
case 21:return "RANCESTORORSELF"
break;
case 22:return "RANCESTOR"
break;
case 23:return "RPRECEDSIBLING"
break;
case 24:return "RPRECED"
break;
case 25:return "DECIMAL"
break;
case 26:return "INTEGER"
break;
case 27: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return "CADENA" 
break;
case 28:return "NOMBRE"
break;
case 29:return "DOBLEBARRA"
break;
case 30:return "BARRA"
break;
case 31:return "ASTERISCO"
break;
case 32:return "ARROBA"
break;
case 33:return "CORA"
break;
case 34:return "CORB"
break;
case 35:return "MAS"
break;
case 36:return "MENOS"
break;
case 37:return "POR"
break;
case 38:return "DIV"
break;
case 39:return "IDIV"
break;
case 40:return "MOD"
break;
case 41:return "MAYORIG"
break;
case 42:return "MENORIG"
break;
case 43:return "DIFERENTE"
break;
case 44:return "MENOR"
break;
case 45:return "MAYOR"
break;
case 46:return "IGUAL"
break;
case 47:return "PIPE"
break;
case 48:return "COMA"
break;
case 49:return "DOLAR"
break;
case 50:return "ADMIRACION"
break;
case 51:return "ARROBA"
break;
case 52:return "DOBLEPUNTO"
break;
case 53:return "PARENTESISA"
break;
case 54:return "PARENTESISC"
break;
case 55:return "INTERROGACIONC"
break;
case 56:return "PUNTO"
break;
case 57:return "DOBLEDOSPUNTOS"
break;
case 58:return "DOSPUNTOS"
break;
case 59:
break;
case 60:
break;
case 61: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:or\b)/i,/^(?:and\b)/i,/^(?:return\b)/i,/^(?:for\b)/i,/^(?:in\b)/i,/^(?:to\b)/i,/^(?:eq\b)/i,/^(?:ne\b)/i,/^(?:lt\b)/i,/^(?:le\b)/i,/^(?:gt\b)/i,/^(?:ge\b)/i,/^(?:child\b)/i,/^(?:descendant-or-self\b)/i,/^(?:descendant\b)/i,/^(?:attribute\b)/i,/^(?:self\b)/i,/^(?:following-sibling\b)/i,/^(?:following\b)/i,/^(?:namespace\b)/i,/^(?:parent\b)/i,/^(?:ancestor-or-self\b)/i,/^(?:ancestor\b)/i,/^(?:preceding-sibling\b)/i,/^(?:preceding\b)/i,/^(?:(\.[0-9]+)|([0-9]+\.[0-9]+))/i,/^(?:[0-9]+)/i,/^(?:("[^"]*")|('[^']*'))/i,/^(?:([a-zA-ZñÑ_])([a-zA-ZñÑ0-9_-]|\.)*)/i,/^(?:\/\/)/i,/^(?:\/)/i,/^(?:\*)/i,/^(?:@)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:div\b)/i,/^(?:idiv\b)/i,/^(?:mod\b)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:\|)/i,/^(?:,)/i,/^(?:\$)/i,/^(?:!)/i,/^(?:@)/i,/^(?:\.\.)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\?)/i,/^(?:\.)/i,/^(?:::)/i,/^(?::)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = XPathDesc;
exports.Parser = XPathDesc.Parser;
exports.parse = function () { return XPathDesc.parse.apply(XPathDesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}