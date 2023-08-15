
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">HOSTEL THRIFT</Typography>
                <Text variant="h5">HostelThrift is an innovative and user-friendly MERN (MongoDB, Express, React, Node.js) project that redefines the way students interact within their campus community.<br/> Designed exclusively for students, HostelThrift serves as a dedicated online platform where students can effortlessly buy and sell their pre-owned items, fostering a sustainable and cost-effective approach to student living. With its intuitive interface and powerful features, HostelThrift simplifies the process of buying and selling goods while promoting social interaction among peers.<br />
                    If you are interested, you can view some of my favorite projects here
                    <br/>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/ishita1505/HostelThrift" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                   
Join HostelThrift today and experience a new way of connecting, buying, and selling within your campus community.<br/> Embrace sustainability, save money, and engage with your peers like never before
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:realestates2024@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;