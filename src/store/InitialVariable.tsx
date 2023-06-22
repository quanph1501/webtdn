import React, { useState } from "react";
const InitialVariable = () => {
    const titleTab = [{
        "title": "Trang chủ",
        "link": "#home",
        "class": ""
    }, {
        "title": "Giới thiệu",
        "link": "#about",
        "class": ""
    }, {
        "title": "Sản phẩm",
        "link": "#products",
        "class": ""
    }, {
        "title": "FAQs",
        "link": "#faqs",
        "class": ""
    }, {
        "title": "Liên hệ",
        "link": "#contact",
        "class": ""
    }, {
        "title": "BOOKFLIX",
        "link": "/bookflix",
        "class": "btn-link"
    }];
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
    const ativities = [
        {
            img: "/activities1.jpg",
            title: "Lễ hội âm nhạc",
            subtitle: "",
            link: "lhan"
        }, {
            img: "",
            title: "Lễ tri ân và trưởng thành",
            subtitle: "",
            link: "lta&th"
        }, {
            img: "/activities3.jpg",
            title: "HOA PHƯỢNG ĐỎ",
            subtitle: "Chiến dịch Tình nguyện hè",
            link: "hpd"
        }
    ]
    return {
        titleTab, questions, ativities
    };
};

export default InitialVariable;