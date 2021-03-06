import { Box, Flex, Image, List, ListItem, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import HeroImage from "./HeroImage";
type Props = {};

interface CustomIndicatorProps {
  isSelected: any;
  index: boolean;
  label: number;
}

const CustomIndicator = ({ ...props }) => {
  console.log(props);
  return <Box display="flex" width="45px" height="15px" bg="white" />;
};

const CustomSlider = chakra(SwiperSlide, {
  display: "flex",
});

const heroImages = [
  {
    source: "hero_1.jpg",
    altText: "Hero 1",
    cardTitle: "O locatie pentru toate gusturile",
    cardBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardMeta: "AMBIENT APARTE",
  },
  {
    source: "hero_2.jpg",
    altText: "Hero 2",
    cardTitle: "Evenimente Speciale",
    cardBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardMeta: "MOMENT UNICE",
  },
  {
    source: "hero_3.jpg",
    altText: "Hero 3",
    cardTitle: "Activitati pentru cei mici",
    cardBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardMeta: "COPII FERICITI",
  },
];

const Hero = (props: Props) => {
  return (
    <Box width={"100%"}>
      <Swiper>
        {heroImages.map((image) => (
          <SwiperSlide key={image.source}>
            <HeroImage {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
