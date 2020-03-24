import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2016-array-include';
import 'regenerator-runtime/runtime';
import * as React from "react";
import * as ReactDOM from "react-dom";

function Main() {
    return <div>Hello World. If this message is visible, it means things are working</div>;
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")!
); 
