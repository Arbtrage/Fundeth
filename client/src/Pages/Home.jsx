import { useState ,useEffect} from 'react'
import { useStateContext } from '../Context'
import { DisplayCampaigns } from '../Components';
// const campaignsdata = [
//     {
//       owner: "John Doe",
//       title: "Education Fund",
//       description: "Supporting education for underprivileged children.",
//       target: "$5,000",
//       deadline: "2023-12-31", // Replace with a valid date string
//       amountCollected: "$2,500",
//       image: "/fund-image-1.png", // Replace with the actual image path
//     },
//     {
//       owner: "Jane Smith",
//       title: "Healthcare Fund",
//       description: "Providing healthcare services to the needy.",
//       target: "$10,000",
//       deadline: "2023-11-30", // Replace with a valid date string
//       amountCollected: "$7,800",
//       image: "/fund-image-2.png", // Replace with the actual image path
//     },
//     {
//       owner: "Alice Johnson",
//       title: "Environmental Fund",
//       description: "Supporting environmental conservation efforts.",
//       target: "$2,500",
//       deadline: "2023-10-15", // Replace with a valid date string
//       amountCollected: "$1,200",
//       image: "/fund-image-3.png", // Replace with the actual image path
//     },
//     {
//       owner: "Bob Wilson",
//       title: "Animal Welfare Fund",
//       description: "Caring for animals in need of shelter and care.",
//       target: "$3,000",
//       deadline: "2023-11-15", // Replace with a valid date string
//       amountCollected: "$2,100",
//       image: "/fund-image-4.png", // Replace with the actual image path
//     },
//     {
//       owner: "Eva Davis",
//       title: "Arts and Culture Fund",
//       description: "Promoting arts and culture in the community.",
//       target: "$7,500",
//       deadline: "2023-12-15", // Replace with a valid date string
//       amountCollected: "$4,800",
//       image: "/fund-image-5.png", // Replace with the actual image path
//     },
//   ];
  
  
  
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

    return (
        // <>
        //     <h1>Hello</h1>
        // </>
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home