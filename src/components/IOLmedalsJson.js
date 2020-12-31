import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import CopyToClipboard from 'react-copy-to-clipboard';
import './LinguistsJson.css';

function IOLmedalsJson() {
    const [countries, setCountries] = useState({});
    useEffect(() => {
        fetch("https://linguisticsapi.herokuapp.com/api/IOLmedals").then(
            res => res.json()).then(data => {
                setCountries(data.countries);
            });
    }, []);

    return (
        <div id="top" className="ui raised very padded text container segment">
            <h2 className="ui header">International Linguistics Olympiad Medals by Country</h2>
            <div class="ui segment">
                <CopyToClipboard text="https://linguisticsapi.herokuapp.com/api/IOLmedals">
                    <div class="ui animated fade green button left floated" tabindex="0">
                        <div class="visible content">GET</div>
                        <div class="hidden content">Copy</div>
                    </div>
                </CopyToClipboard>
                <h3 id="link" class="ui floated header">https://linguisticsapi.herokuapp.com/api/IOLmedals</h3>
            </div>

            <div className="ui bottom attached json">
                {countries.length > 0 ? (
                    <ReactJson src={countries} />
                ) : (
                        <div id="rel" class="ui active loader"></div>
                    )}
            </div>
        </div>

    );
}

export default IOLmedalsJson;