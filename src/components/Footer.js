import React from 'react'
import InstagramIcon from '@mui/material//Instagram'
import TwitterIcon from '@mui/material/Twitter'
import FacebookIcon from '@mui/material/Facebook'
// import GithubIcon from '@mui/icons-material/Github'
import LinkedInIcon from '@mui/material/LinkedIn'
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
            <p>&copy; pedrotechpizza.com</p>



        </div>

    </div>
  )
}

export default Footer