import React from 'react';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PageHome = React.lazy(() => import('./components/PageHome'));
const PagePost = React.lazy(() => import('./components/PagePost'));
const PagePosts = React.lazy(() => import('./components/PagePosts'));
const PageAboutMe = React.lazy(() => import('./components/PageAboutMe'));

function App() {
	return (
		<Router>
			<React.Suspense fallback={""}>
				<div className="container" style={{maxWidth: 800}}>
					<Header />
					<div className="mt-4">
						<Switch>
							<Route path="/" exact>
								<PageHome />
							</Route>
							<Route path="/about">
								<PageAboutMe />
							</Route>
							<Route path="/post/:slug">
								<PagePost />
							</Route>
							<Route path="/posts">
								<PagePosts />
							</Route>
						</Switch>
					</div>
				</div>
			</React.Suspense>
		</Router>
	);
}

export default App;
