import { Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MenuScreen } from "../components/menu/MenuScreen";
import { PlayScreen } from "../components/play/PlayScreen";
import { Navbar } from "../components/ui/Navbar"

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <Row className="justify-content-center my-3 mx-0">
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={MenuScreen}
                        />
                        <Route
                            exact
                            path="/play"
                            component={PlayScreen}
                        />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Row>
        </Router>
    )
}