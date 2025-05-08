// src/data/strugglingData.jsx
import {
    WarningAmber,
    Favorite,
    Security,
    Bolt,
    Visibility,
    Cake
} from "@mui/icons-material";

import img1 from "../assets/images/Home/Struggling/Anxiety.webp";
import img2 from "../assets/images/Home/Struggling/Depression.webp";
import img3 from "../assets/images/Home/Struggling/stres.jpg";
import img4 from "../assets/images/Home/Struggling/Relationships1.jpg";
import img5 from "../assets/images/Home/Struggling/Trauma1.jpg";
import img6 from "../assets/images/Home/Struggling/Addiction1.jpg";
import img7 from "../assets/images/Home/Struggling/Self-esteem1.jpg";
import img8 from "../assets/images/Home/Struggling/Grief & Loss1.jpg";
import img9 from "../assets/images/Home/Struggling/little-boy-bullying.jpg";
import img10 from "../assets/images/Home/Struggling/Overthinking.jpg";

const strugglingData = [
    {
        title: "Stress-Anxiety",
        description: "Manage worry, panic, and fear",
        icon: <WarningAmber sx={{ fontSize: 30, color: "orange" }} />,
        image: img1,
    },
    {
        title: "Relationship",
        description: "Improve communication and connection",
        icon: <Favorite sx={{ fontSize: 30, color: "orange" }} />,
        image: img4
    },
    {
        title: "Grief/Trauma",
        description: "Heal from difficult experiences",
        icon: <Security sx={{ fontSize: 30, color: "orange" }} />,
        image: img5
    },
    {
        title: "Addiction",
        description: "Break free from harmful patterns",
        icon: <Bolt sx={{ fontSize: 30, color: "orange" }} />,
        image: img6
    },
    {
        title: "Self-esteem",
        description: "Build confidence and self-worth",
        icon: <Visibility sx={{ fontSize: 30, color: "orange" }} />,
        image: img7
    },
    {
        title: "Bullying",
        description: "Navigate through difficult transitions",
        icon: <Cake sx={{ fontSize: 30, color: "orange" }} />,
        image: img9
    },
    {
        title: "Overthinking",
        description: "Navigate through difficult transitions",
        icon: <Cake sx={{ fontSize: 30, color: "orange" }} />,
        image: img10
    }
];

export default strugglingData;
