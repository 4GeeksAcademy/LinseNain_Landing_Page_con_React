import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className=" ">
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
			</div>
			
			<div className=" container-fluid d-flex">
				
			<div className="row">
			<div className="col-sm-12 col-md-3 mt-3 ">
				<Cards />
			</div>
			<div className="col-sm-12 col-md-3 mt-3 ">
				<Cards />
			</div>
			<div className="col-sm-12 col-md-3 mt-3 ">
				<Cards />
			</div>
			<div className="col-sm-12 col-md-3 mt-3 ">
				<Cards />
				</div>
				
			</div>
			</div>
			<div>
				<Footer/>
			</div>
		</div>

		
	);
};

export default Home;
