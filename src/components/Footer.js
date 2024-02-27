import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
// import GithubIcon from '@mui/icons-material/Github'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import TiktokIcon from '@mui/icons-material/Tiktok'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            


        </div>

    </div>
  )
}

export default Footer