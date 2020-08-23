import React from 'react';
import Navbar from './Navbar';
import {
	Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import project1 from '../image/Proje1.jpg';
import project2 from '../image/Proje2.jpg';
import project3 from '../image/Proje3.jpg';
import project5 from '../image/Proje5.jpg';
import project6 from '../image/Proje6.jpg';

const useStyles = makeStyles({
	mainContainer: {
		backgroundColor: "#233",
		height:"100%"
		
	},
	cardContainer: {
		maxWidth: 345,
		margin:"2rem auto"
	}
})


const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Grid container justify="center">

				{/*Project 1 */}
				<Grid item xs={12} sm={8} md={5} lg={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia component="img" alt="Project 1" height="135" image={project1} />
							<CardContent>
								<Typography gutterBottom variant="h5">
									HTML & CSS
								</Typography>
								
								<Typography variant="body2" color="textSecondary" component="p">
									Navbar,Footer,Section,Responsive
								</Typography>
							</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary" href="https://github.com/Togrul1993/Html-Css-Proje/tree/master/html">
									Click Me
								</Button>
								
							</CardActions>
						
					</Card>
				</Grid>


				<Grid item xs={12} sm={8} md={5} lg={4}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia component="img" alt="Project 2" height="135" image={project2} />
						<CardContent>
							<Typography gutterBottom variant="h5">
								Reactjs & Form
							</Typography>
							
								<Typography variant="body2" color="textSecondary" component="p">
									Reactjs,Hooks,ContextApi
							</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/Togrul1993/Reakt_Form_Css_Html_Js">
								Click Me
							</Button>
						</CardActions>
					
				</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 3" height="135" image={project1} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Html & Css & JavaScript
						</Typography>
						
								<Typography variant="body2" color="textSecondary" component="p">
									Animals Clear Web Site
						</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/Togrul1993/Animals_Clear_WebSite">
								Click Me
							</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 4" height="135" image={project5} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Reactjs Web Site (1)
						</Typography>
						
								<Typography variant="body2" color="textSecondary" component="p">
									Reactjs,Card,Carousel,Footer,Header
						</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/Togrul1993/Reactjs_WebSite_Card_Carousel_Footer_Headr">
								Click Me
							</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 5" height="135" image={project3} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							ReactJS & ContextApi
						</Typography>
						
								<Typography variant="body2" color="textSecondary" component="p">
									Waether Proje
						</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/Togrul1993/Reactjs-Waether-Api">
								Click Me
							</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 6" height="135" image={project6} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							ReactJs & Portfolio
						</Typography>
						
								<Typography variant="body2" color="textSecondary" component="p">
									ReactJs & Portfolio
						</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" href="https://github.com/Togrul1993/React-Js-Portfolio">
								Click Me
							</Button>
					</CardActions>
				
			</Card>
				</Grid>				
			</Grid>
		</Box>
	)
}

export default Portfolio;
