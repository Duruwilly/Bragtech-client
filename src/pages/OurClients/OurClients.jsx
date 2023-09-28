import { useState } from "react";
import Section from "../../components/section/Section";
import { Categories } from "./Categories";

const OurClients = () => {
  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   // Replace 'apiEndpoint' with the actual API endpoint that provides the image URLs.
  //   fetch("apiEndpoint")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming the API response is an array of image URLs.
  //       setCategories(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const categories = [
    {
      title: "Financial Services",
      items: [
        { name: "Access Bank", image: "/images/access.jpg.png" },
        { name: "FCMB", image: "/images/fcmb.png.png" },
        { name: "First Bank", image: "/images/first-bank.png.png" },
        { name: "Union Bank", image: "/images/union.jpg.png" },
        { name: "Unity Bank", image: "/images/unity.png.png" },
        { name: "Stanbic IBTC", image: "/images/stanbic.png.png" },
        { name: "Keystone", image: "/images/keystone.jpg.png" },
        { name: "UBA", image: "/images/uba-1.png.png" },
        { name: "Polaris", image: "/images/polaaris.png.png" },
        { name: "Fidelity", image: "/images/fidelity.jpg.png" },
        { name: "Heritage", image: "/images/heritage-bank.jpg.png" },
        { name: "Zenith", image: "/images/images-2.png.png" },
        { name: "Eco Bank", image: "/images/ecobank-logo.jpg.png" },
        { name: "Nova", image: "/images/1519914609528.jpg.png" },
        { name: "Providus", image: "/images/Providus-Bank.png.png" },
        { name: "Lotus", image: "/images/Lotus-Bank.jpg.png" },
        { name: "Kuda", image: "/images/unnamed.png.png" },
        { name: "Parallex Bank", image: "/images/download.jpg.png" },
        { name: "LAPO", image: "/images/lapo.png.png" },
        {
          name: "Interswitch",
          image: "/images/Untitled-1_0006_Interswitch_logo.svg.jpg.png",
        },
        { name: "Nibss", image: "/images/nibbs2.jpg.png" },
        { name: "Titan Trust", image: "/images/titan-trust.png.png" },
        { name: "GTBank", image: "/images/gtb.png.png" },
        { name: "Wema", image: "/images/wema.jpg.png" },
      ],
    },
    {
      title: "Telecommunications",
      items: [
        { name: "MTN", image: "/images/mtn.png.png" },
        { name: "Airtel", image: "/images/airtel.jpg.png" },
        { name: "Glo", image: "/images/glo.jpeg.png" },
        { name: "GCNet Ghana", image: "/images/gcnet.jpg.png" },
        { name: "Nokia", image: "/images/nokia-logo-RCH7NE-1.jpg.png" },
        {
          name: "Ericsson",
          image: "/images/Untitled-1_0003_Ericsson-logo.jpg.png",
        },
        {
          name: "Vodacom",
          image: "/images/Untitled-1_0004_vodacom-logo.jpg.png",
        },
        {
          name: "9 mobile",
          image: "/images/86ff9294f2fd24f603343a5f0c5f5861.png.png",
        },
      ],
    },
    {
      title: "Oil and Gas",
      items: [
        { name: "Atlantic Energy", image: "/images/atlantic.jpeg.png" },
        { name: "Shell", image: "/images/shell2.png.png" },
        { name: "Delta Afrik", image: "/images/delta.png.png" },
        { name: "Seplat", image: "/images/download-1.png.png" },
        { name: "Nigeria LNG", image: "/images/lng.jpeg.png" },
        { name: "NETCO", image: "/images/netco2.png.png" },
        {
          name: "EROTON",
          image: "/images/Untitled-1_0005_Eroton-SPE-Publication.jpg.png",
        },
        { name: "TOTAL", image: "/images/Logo-Total.jpg.png" },
      ],
    },
    {
      title: "Manufacturing",
      items: [
        {
          name: "Dangote",
          image: "/images/Untitled-1_0008_Dangote_Group_Logo.svg.jpg.png",
        },
        { name: "Guinness", image: "/images/guiness.png.png" },
        { name: "Dufil", image: "/images/dufill.png.png" },
      ],
    },
    // {
    //   title: "Public Sector",
    //   items: [
    //     {
    //       name: "Nigerian Communication Commission",
    //       image: "/images/Untitled-1_0002_ncc.jpg.png",
    //     },
    //     { name: "Kano State Government", image: "/images/kano.webp.png" },
    //     {
    //       name: "Federal Inland Revenue Service",
    //       image: "/images/firs.jpg.png",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="flex flex-col items-center bg-[#F7F7F7] flex-1">
      <Section>
        <div className="pt-10">
          <div className="pt-[7px] pb-2 pl-6 border-l-4 border-[#DA251C]">
            <div>
              <span className="text-[#222222] text-4xl font-bold">Our </span>
              <span className="text-[#B50A0C] text-4xl font-bold">Clients</span>
            </div>
          </div>
          <div className="py-10">
            {categories.map((category, index) => (
              <Categories
                key={index}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OurClients;
