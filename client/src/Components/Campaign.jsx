import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

// BLOCKCHAIN
// import  { useEffect } from 'react';
// import { useContract } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';


// const campaigns = [
//   {
//     owner: "John Doe",
//     title: "Education Fund",
//     description: "Supporting education for underprivileged children.",
//     target: "$5,000",
//     deadline: "2023-12-31", // Replace with a valid date string
//     amountCollected: "$2,500",
//     image: "/fund-image-1.png", // Replace with the actual image path
//   },
//   {
//     owner: "Jane Smith",
//     title: "Healthcare Fund",
//     description: "Providing healthcare services to the needy.",
//     target: "$10,000",
//     deadline: "2023-11-30", // Replace with a valid date string
//     amountCollected: "$7,800",
//     image: "/fund-image-2.png", // Replace with the actual image path
//   },
//   {
//     owner: "Alice Johnson",
//     title: "Environmental Fund",
//     description: "Supporting environmental conservation efforts.",
//     target: "$2,500",
//     deadline: "2023-10-15", // Replace with a valid date string
//     amountCollected: "$1,200",
//     image: "/fund-image-3.png", // Replace with the actual image path
//   },
//   {
//     owner: "Bob Wilson",
//     title: "Animal Welfare Fund",
//     description: "Caring for animals in need of shelter and care.",
//     target: "$3,000",
//     deadline: "2023-11-15", // Replace with a valid date string
//     amountCollected: "$2,100",
//     image: "/fund-image-4.png", // Replace with the actual image path
//   },
//   {
//     owner: "Eva Davis",
//     title: "Arts and Culture Fund",
//     description: "Promoting arts and culture in the community.",
//     target: "$7,500",
//     deadline: "2023-12-15", // Replace with a valid date string
//     amountCollected: "$4,800",
//     image: "/fund-image-5.png", // Replace with the actual image path
//   },
// ];




export default function Campaigns() {
//   const { contract } = useContract("0x64942199002c12fFb07e87b9e446c146CD0DE7Ca");

//   // const address = useAddress();



//   const getCampaigns = async () => {
//     try{
//       const campaigns = await contract.call('getCampaigns');
//       const parsedCampaings = campaigns.map((campaign, i) => ({
//         owner: campaign.owner,
//         title: campaign.title,
//         description: campaign.description,
//         target: ethers.utils.formatEther(campaign.target.toString()),
//         deadline: campaign.deadline.toNumber(),
//         amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
//         image: campaign.image,
//         pId: i
//       }));
//       console.log(campaigns);
//       return parsedCampaings;
//     }
//     catch(e){
//       console.log(e);
//     }

//   }

//   useEffect(()=> {
//     getCampaigns();
//   }, []);

  return (
    <div className="flex flex-wrap mt-[20px] gap-[26px]">
      {campaigns.length > 0 &&
        campaigns.map((campaign) => (
          <Card
            key={uuidv4()}
            {...campaign}
            //   handleClick={() => handleNavigate(campaign)}
          />
        ))}
    </div>
  );
}