import React from 'react';

import { Image } from '@chakra-ui/react';

type HeroProps = {
    imagePath: string;
};

function Hero({ imagePath }: HeroProps) {
    return <Image src={`${imagePath}`} htmlWidth="100%" objectFit="cover" />;
}

export default Hero;
