interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        comingSoon?: boolean;   // ye line add karo
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "About us",
        link: "/about",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "Domestic",
        link: "/tour-grid-1",
        has_dropdown: true,
        sub_menus: [
            {
                link: "/destinations/himachal",
                title: "Himachal",
            },
            {
                link: "/destinations/spiti",
                title: "Spiti",
            },
            {
                link: "/destinations/leh",
                title: "Leh",
            },
            {
                link: "/destinations/kashmir",
                title: "Kashmir",
            },
            {
                link: "/destinations/uttarakhand",
                title: "Uttarakhand",
            },
            {
                link: "/destinations/rajasthan",
                title: "Rajasthan",
            },
            {
                link: "/destinations/kerala",
                title: "Kerala",
            },
            {
                link: "/destinations/goa",
                title: "Goa",
            },
        ],
    },
    {
        id: 6,
        title: "International",
        link: "/",
        has_dropdown: true,
        sub_menus: [
            {
                link: "/",
                title: "Europe - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Dubai - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Maldives - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Thailand - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Hong Kong - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Malaysia - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Singapore - ",
                comingSoon: true,
            },
            {
                link: "/",
                title: "Mauritius - ",
                comingSoon: true,
            },
        ],
    },
    {
        id: 4,
        title: "Career",
        link: "/career",
        has_dropdown: false,
    },
    {
        id: 5,
        title: "Contact us",
        link: "/contact",
        has_dropdown: false,
    },
];

export default menu_data;