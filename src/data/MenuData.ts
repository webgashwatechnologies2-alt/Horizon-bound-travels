interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        comingSoon?: boolean;
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
                link: "/destinations/europe",
                title: "Europe",
                comingSoon: false,
            },
            {
                link: "/destinations/dubai",
                title: "Dubai",
                comingSoon: false,
            },
            {
                link: "/destinations/maldives",
                title: "Maldives",
                comingSoon: false,
            },
            {
                link: "/destinations/thailand",
                title: "Thailand",
                comingSoon: false,
            },
            {
                link: "/destinations/hong-kong",
                title: "Hong Kong",
                comingSoon: false,
            },
            {
                link: "/destinations/malaysia",
                title: "Malaysia",
                comingSoon: false,
            },
            {
                link: "/destinations/singapore",
                title: "Singapore",
                comingSoon: false,
            },
            {
                link: "/destinations/mauritius",
                title: "Mauritius",
                comingSoon: false,
            },
            {
                link: "/destinations/bali",
                title: "Bali",
                comingSoon: false,
            },
            {
                link: "/destinations/vietnam",
                title: "Vietnam",
                comingSoon: false,
            },
        ],
    },
    {
        id: 7,
        title: "Our Services",
        link: "/",
        has_dropdown: true,
        sub_menus: [
            {
                link: "/our-services/taxi-cab",
                title: "Texi & Cab Service",
            },
            {
                link: "/our-services/bus-volvo",
                title: "Bus and  Volvo",
            },
            {
                link: "/our-services/flight",
                title: "Flight",
            },
            // {
            //     link: "/our-services/train",
            //     title: "Train ",
            // },
            {
                link: "/our-services/hotel-reservations",
                title: "Hotel Reservations",
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