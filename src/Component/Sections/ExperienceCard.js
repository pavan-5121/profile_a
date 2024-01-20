import React, { useState, useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function ExperienceCard({ index,greetCardImage,company,dateImage,location }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Apply the initial transformation when the component mounts
    setIsAnimated(true);
  }, []);

  const transformStyle = {
    display: 'flex',
    transition: 'transform 2.5s ease',
    transform : isAnimated ? 'translateX(0)' : 'translateX(100%)'
  };

  

  return (
    <Card
      variant="plain"
      orientation="horizontal"
      sx={{
        background: 'white',
        width: 840,
        height: 400,
        overflow: 'hidden',
      }}
    >
      <div style={transformStyle}>
        <AspectRatio
          ratio="1.1/1"
          sx={{
            width: 400,
            borderRadius: '40px',
          }}
        >
          <img
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '400px',
              height: '390px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            src={greetCardImage}
            srcSet={greetCardImage}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography sx={{marginTop:'20px',marginLeft:'10px'}} level="title-lg" id="card-description">
           {company}
          </Typography>
          <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            <Link overlay underline="none" href="#interactive-card" sx={{ color: 'text.tertiary' }}>
            {location}
            </Link>
          </Typography>
          <AspectRatio
            ratio="1.1/1"
            sx={{
              width: 300,
              marginTop: '40%',
              marginRight: 'auto',
              marginLeft: 'auto',
              '& > div': {
                paddingBottom: '72px',
              },
            }}
          >
            <img src={dateImage} style={{ width: '300px', height: '72px' }} loading="lazy" alt="" />
          </AspectRatio>
        </CardContent>
      </div>
    </Card>
  );
}
