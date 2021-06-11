import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Reporte from './components/InConsole'
import TablaSimbolos from './components/TablaSimbolos'
import TablaErrores from './components/TablaErrores'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/" component={Navigation}/>
            <Route exact path = "/tytusx/20211SVAC/G17" component={Navigation}/>
            <Route exact path = "/tytusx/20211SVAC/G17/reporte" component={Reporte}/>
            <Route exact path = "/tytusx/20211SVAC/G17/reporteTabla" component={TablaSimbolos}/>
            <Route exact path = "/tytusx/20211SVAC/G17/reporteErrores" component={TablaErrores}/>
        </Switch>
    );
}

export default Routes;
