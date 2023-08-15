import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://qph.cf2.quoracdn.net/main-qimg-1048c578ca3c61fa0be7e769fec9126f-lq) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeadingBox = styled(Box)`
    background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
    padding: 10px;
    border-radius: 5px;
    text-align: center;
`;

const SubHeadingBox = styled(Box)`
    background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
    padding: 10px;
    border-radius: 5px;
    text-align: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () => {
    return (
        <Image>
            <div>
                <HeadingBox>
                    <Heading variant="h1">Hostel Thrift</Heading>
                </HeadingBox>
                <SubHeadingBox>
                    <SubHeading variant="body1">By the students, for the students</SubHeading>
                </SubHeadingBox>
            </div>
        </Image>
    );
}

export default Banner;
