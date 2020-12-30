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

    return (
        <div id="top" className="ui raised very padded text container segment">
            <h2 className="ui header">Famous Linguists</h2>
            <div class="ui segment">
                <CopyToClipboard text="https://linguisticsapi.herokuapp.com/api/linguists">
                    <div class="ui animated fade green button left floated" tabindex="0">
                        <div class="visible content">GET</div>
                        <div class="hidden content">Copy</div>
                    </div>
                </CopyToClipboard>
                <h3 id="link" class="ui floated header">https://linguisticsapi.herokuapp.com/api/linguists</h3>
            </div>

            <div className="ui bottom attached json">
                {linguists.length > 0 ? (
                    <ReactJson src={linguists} />
                ) : (
                        <div id="rel" class="ui active loader"></div>
                    )}
            </div>
        </div>

    );
}

export default LinguistsJson;