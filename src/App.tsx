import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
} from "react-feather";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-[160px]">
        <div className="grid px-3 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-6 mb-16 grid-cols-4 gap-4">
          {[
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/62155089/67d8d207_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/9da940a2-82d0-4efc-808e-381292ac5321.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/4863199f-fffd-4d63-ba94-365ce2fbfe31.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/9289e7ae-a562-4784-bda9-cd1a9a46b0a5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/917c013e-3618-4f30-a0e4-2c099301403d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/f78edcbf-a842-49d8-b118-3a4bea01917c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/bae07cb1-b2cf-4dfb-905e-d26f0f7f07c3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-43555495/original/c07366ee-1731-47d1-8576-d96f69517d13.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/856b83fc-f4c8-4ae3-8ab0-4e81fcd9727a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/9674a2ac-636e-4779-9908-9de8e9929f99.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/38398dc1-1bcc-4c63-a56d-4f2279d77898.jpeg?im_w=720",
              ],
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
          ].map((e, index) => {
            return <PCard key={index} e={e} />;
          })}
        </div>
      </div>
      <div className="left-[40%] right-[40%] fixed bottom-16 flex z-[1000]">
        <a className="bg-[#222222] cursor-pointer mx-auto  shadow-2xl  px-6 py-3 rounded-full flex items-center justify-center ">
          <span className="text-white truncate mr-3 text-sm font-bold">
            Show Map
          </span>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", height: 16, width: 16, fill: "#FFFFFF" }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z" />
          </svg>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
function PCard({ e }: any) {
  const [index, setindex] = useState(0);

  const images: any = e.images;
  return (
    <div className="mb-4 flex flex-col">
      <div className="h-56 w-full cursor-pointer  group relative rounded-md overflow-hidden ">
        <a href="" className="absolute right-4 top-4">
          <svg
            className="stroke-white"
            viewBox="0 0 32 32"
            strokeWidth={3}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "rgba(0, 0, 0, 0.5)",
              height: 24,
              width: 24,
              strokeWidth: 2,
              overflow: "visible",
            }}
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
          </svg>
        </a>
        <div className="transition-all group-hover:flex hidden justify-between px-1 w-full absolute top-[40%] ">
          <a
            onClick={() => {
              if (index === 0) {
                setindex(images.length - 1);
              } else {
                setindex(index - 1);
              }
            }}
            className={`text-sm text-primary cursor-pointer rounded-full flex justify-center items-center h-8 w-8 bg-white border border-gray-200`}
          >
            <ChevronLeft strokeWidth={3} size={16} />
          </a>
          <a
            onClick={() => {
              if (index === images.length - 1) {
                setindex(0);
              } else {
                setindex(index + 1);
              }
            }}
            className="text-sm text-primary cursor-pointer rounded-full flex justify-center items-center h-8 w-8 bg-white border border-gray-200 "
          >
            <ChevronRight strokeWidth={3} size={16} />
          </a>
        </div>
        <div className="absolute bottom-2 flex justify-center items-center w-full">
          {images.map((e: any, ind: any) => {
            return (
              <div
                className={`${
                  ind === index ? "bg-opacity-100" : "bg-opacity-40"
                } h-2 w-2 bg-white rounded-full mx-1`}
              />
            );
          })}
        </div>
        <img className="h-full w-full" src={images[index]} alt="" />
      </div>

      <div>
        <div className="flex justify-between mt-3">
          <h4 className="font-bold text-gray-700 text-sm capitalize ">
            {e.name}
          </h4>
          <div className="flex items-center">
            <Star size={14} className="fill-gray-600 stroke-gray-600" />
            <span className="text-sm ml-3 font-semibold">{e.rating}</span>
          </div>
        </div>
        <p className="text-sm my-2 font-semibold text-gray-400">{e.address}</p>
        <div>
          <span className="text-sm font-bold text-gray-700 ">{e.price}</span>
          <span className="text-sm font-semibold text-gray-600 capitalize ml-2">
            Night
          </span>
        </div>
      </div>
    </div>
  );
}
