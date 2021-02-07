import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import CopyToClipboard from 'react-copy-to-clipboard';
import './LinguistsJson.css';

function LinguistsJson() {
    const [linguists, setLinguists] = useState({});
    useEffect(() => {
        fetch("https://linguisticsapi.herokuapp.com/api/linguists").then(
            res => res.json()).then(data => {
                setLinguists(data.linguists);
            });
    }, []);
    // useEffect(() => {
    //     fetch("http://127.0.0.1:5000/api/linguists").then(
    //         res => res.json()).then(data => {
    //             setLinguists(data.linguists);
    //         });
    // }, []);
    

    return (
        <div id="top" className="ui raised very padded text container segment">
            <h2 id="h2" className="ui header">Famous Linguists</h2>
            <div id="bar" className="ui segment">
                <CopyToClipboard text="https://linguisticsapi.herokuapp.com/api/linguists">
                    <div className="ui animated fade green button left floated" tabindex="0">
                        <div className="visible content">GET</div>
                        <div className="hidden content">Copy</div>
                    </div>
                </CopyToClipboard>
                <h3 id="link" className="ui floated header">https://linguisticsapi.herokuapp.com/api/linguists</h3>
            </div>

            <div id="bottom" className="ui attached json">
                {linguists.length > 0 ? (
                    <ReactJson src={linguists} theme="monokai"/>
                ) : (
                        <div id="rel" className="ui active loader"></div>
                    )}
            </div>
        </div>

    );
}

export default LinguistsJson;