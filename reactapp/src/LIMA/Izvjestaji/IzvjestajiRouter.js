import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import I_US_27 from "./I_US_27";
import I_US_30 from "./I_US_30";
import PrisustvoPoPredmetu from "./components/Dijagrami/PrisustvoPoPredmetu";

function IzvjestajiRouter() {
  return (
    <Fragment>
      <Route path="/Lima/izvjestaji/I_US_27" component={I_US_27} />
      <Route path="/Lima/izvjestaji/I_US_30" component={I_US_30} />
      <Route path="/Lima/izvjestaji/prisustvo" component={PrisustvoPoPredmetu} />
      <Route exact path="/Lima/izvjestaji" component={Paths} />
    </Fragment>
  );
}

function Paths() {
  return (
    <ul>
      <li>
        <Link to="/Lima/izvjestaji/I_US_27"><div className="btn btn-primary">I_US_27</div></Link>
        <Link to="/Lima/izvjestaji/I_US_30"><div className="btn btn-primary">I_US_30</div></Link>
        <Link to="/Lima/izvjestaji/prisustvo"><div className="btn btn-primary">Dijagram prisustva</div></Link>
      </li>
    </ul>
  );
}

export default IzvjestajiRouter;