import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Speakers from "../components/Speakers";
import SpeakerContext from "../components/Speakers/SpeakerContext";
import { useEffect, useState } from "react";
import axios from "axios";

const speakersArray = [
    {
        imageSrc: "speaker-component-1124",
        name: "Douglas Crockford",
        id: 1124,
        firstName: "Douglas",
        lastName: "Crockford",
        sat: true,
        sun: false,
        isFavorite: false,
        bio:
            "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
    },
    {
        imageSrc: "speaker-component-1530",
        name: "Tamara Baker",
        id: 1530,
        firstName: "Tamara",
        lastName: "Baker",
        sat: false,
        sun: true,
        isFavorite: true,
        bio:
            "Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.",
    },
    {
        imageSrc: "speaker-component-10803",
        name: "Eugene Chuvyrov",
        id: 10803,
        firstName: "Eugene",
        lastName: "Chuvyrov",
        sat: true,
        sun: false,
        isFavorite: false,
        bio:
            "Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.",
    },
];

const IndexPage = () => {
    return (
        <>
            <Header />
            <Menu />
            <Speakers />
            <Footer />
        </>
    );
};

export default IndexPage;
