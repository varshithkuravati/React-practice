import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
// import App, {exp1,exp2} from "./components/App";
// import * as pi from "./components/App";
// use a pi.App
// Note style classes are linked to html tags not components tags

ReactDom.render(<App status="ok" />, document.getElementById("root"));
