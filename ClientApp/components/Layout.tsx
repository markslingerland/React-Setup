import * as React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { NavMenu } from './NavMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";

injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    <MuiThemeProvider muiTheme={lightMuiTheme}>
                        { this.props.body }
                    </MuiThemeProvider>                    
                </div>
            </div>
        </div>;
    }
}
