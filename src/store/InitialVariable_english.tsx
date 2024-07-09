import React, { useState } from "react";
const InitialVariable_english = () => {
    const titleTab = [{
        "title": "Home",
        "link": "#home",
        "class": ""
    }, {
        "title": "About",
        "link": "#about",
        "class": ""
    }, {
        "title": "Clubs/Projects",
        "link": "#clbda",
        "class": ""
    }, {
        "title": "Contact",
        "link": "#contact",
        "class": ""
    }, 
    // {
    //     "title": "BOOKFLIX",
    //     "link": "/bookflix",
    //     "class": "btn-link"
    // }, 
    {
        "title": "VI",
        "link": "/",
        "class": "btn-link"
    }];
    // {
    //     "title": "Sản phẩm",
    //         "link": "#products",
    //             "class": ""
    // },
    const questions = [
        {
            'Group': [
                {
                    "question:": "My flowers are falling off or dying?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "What causes leaves to become pale?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "What causes brown crispy leaves?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                },
            ]
        },
        {
            'Group': [
                {
                    "question:": "How do i choose a plant?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "How do I change the pots?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "Why are gnats flying around my plant?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                },
            ]
        }
    ]
    const activities = [
        {
            img: "/activities/3.jpg",
            title: "Red Phoenix Flower Campaign",
            subtitle: "Summer volunteer campaign",
            bq: "The website uses some images from the Photography - Specture Club and the Press - Communications Club",
            link: "hots/hpd/en",
            // linkFB: "https://www.facebook.com/759662799498945"
        }
        , {
            img: "/activities/1.jpg",
            title: "Music Festival",
            subtitle: "",
            bq: "The website uses some images from the Photography - Specture Club and the Press - Communications Club",
            link: "hots/lhan/en",
            // linkFB: "https://www.facebook.com/541613061448202"
        }, {
            img: "/activities/2.jpg",
            title: "Honor and Graduation Day",
            subtitle: "",
            bq: "The website uses some images from the Photography - Specture Club and the Press - Communications Club",
            link: "hots/lta&th/en",
            // linkFB: "https://www.facebook.com/576520341290807"
        },
    ]

    return {
        titleTab, questions, activities
    };
};

export default InitialVariable_english;