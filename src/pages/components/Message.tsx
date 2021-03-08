import React from 'react';
import 'bulma/css/bulma.css'
const Message = (props: any) => {

    const { titleMessage, inviteMessage, textButton, typeMeesage } = props;
    return (
        // <article className="message is-info">`${AUTH_TOKEN_GIT}`
        <article className={`message is-${typeMeesage}`}>
            <div className="message-body">
                {titleMessage}
                <br></br>
                <br></br> 
                {inviteMessage}
                <br></br>
                <br></br>
                <div className={`button is-${typeMeesage}`} onClick={() => window.location.reload()}>{textButton}</div>
            </div>
        </article>
    );
};


export default Message;