import * as React from 'react';
import { RaisedButton, TextField } from 'material-ui';

export class ContactForm extends React.Component<any, any> {
    public render(){
        return( <div>
            <h1>Contact Form</h1>
            <TextField
                hintText="Email Address"
                floatingLabelText="Email Address"
            />
            <br/>
            <TextField
                hintText="Message"
                floatingLabelText="Message"
                multiLine={true}
                
            />
            <br/>
            <br/>
            <RaisedButton label="Submit"/>
        </div>
        )
    }
}



