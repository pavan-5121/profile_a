import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import avtar from "../Assets/profile.jpg"


export default function ProfileCard() {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(-10deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(-10px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(-45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '180px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
       
        <CardCover
          sx={{
            background:'linear-gradient(to top, rgb(0 0 0 / 17%), rgba(0,0,0,0) 200px),linear-gradient(to top, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%) 300px);',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
          }}
        >
          <img
            src={avtar}
            srcSet={avtar}
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'baseline',
            justifyContent: 'center',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
            maxHeight:'40px',
            marginTop:'40%',

          }}
        >
          <Typography fontFamily={'sans-serif'} fontSize="lg" textColor="#fff" m={2}>
            UI Desinger
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
