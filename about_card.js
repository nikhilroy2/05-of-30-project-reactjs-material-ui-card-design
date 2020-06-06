import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
const useStyle = makeStyles({
    gridWrapper: {
        '& .gridColum': {
            padding: '.5rem'
        },
        '& *::selection': {
            background: '#2EE06D',
            color: '#fff',
        },
        '& .gridItem': {
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            padding: '2rem',
            transition: '.3s all',
            height: '100%',
            '&:hover': {
                boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
            }

        },
        '& .cardImg': {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            verticalAlign: 'middle',
        },
        '& .nameLink': {
            padding: '0 1rem',
            fontSize: '22px',
            textDecoration: 'none',
            transition: '.3s',
            '&:hover': {
                color: '#2EE06D'
            }
        }

    }
})
function AboutCard() {
    const classes = useStyle();
    const gridRow = [
        {
            id: 1,
            src: 'https://livedemo00-joomla.template-help.com/joomla_prod-28902_tf/images/testimonials/testimonials-3.jpg',
            name: 'Jane Smith',
            text: 'The staff here is really supportive, teachers are great, the school has a good structure. Thank ...',
            date: 'June 02, 2020'
        },
        {
            id: 2,
            src: 'https://livedemo00-joomla.template-help.com/joomla_prod-28902_tf/images/testimonials/testimonials-2.jpg',
            name: 'Peter McMillan',
            text: 'I am really enjoying my experience here. Teachers are very friendly and there is a friendly ...',
            date: 'June 02, 2020'
        },
        {
            id: 3,
            src: 'https://livedemo00-joomla.template-help.com/joomla_prod-28902_tf/images/testimonials/testimonials-1.jpg',
            name: 'Kate Wilson',
            text: 'I like that it has a busy atmosphere but it’s never stressful. Everyone is very nice and you can ...',
            date: 'June 02, 2020'
        },
        {
            id: 4,
            src: 'https://livedemo00-joomla.template-help.com/joomla_prod-28902_tf/images/testimonials/testimonials-4.jpg',
            name: 'Samantha Lee',
            text: 'The staff here is really supportive, teachers are great, the school has a good structure. Thank ...',
            date: 'June 02, 2020'
        },


    ]

    return (
        <React.Fragment>
            <Container>
                <Box textAlign="center" component="h2"> What Clients Say About Us</Box>
                <Box textAlign="center" color="gray" component="h4" > Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Box>
                <Grid container className={classes.gridWrapper}>
                    {gridRow.map(v => {
                        return (
                            <Grid key={v.id} className="gridColum" item sm={6}>
                                <Box className="gridItem">

                                    <Box>
                                        <img className="cardImg" src={v.src} alt={v.src} />
                                        <a className="nameLink" href="#">{v.name}</a>
                                    </Box>
                                    <Box color="gray" component="h4">
                                        {v.text}

                                    </Box>
                                    <Box color="rgba(0,0,0,.4)" fontSize="22px" textAlign="right">
                                        {v.date}
                                    </Box>

                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>

        </React.Fragment>

    )
}
export default AboutCard;