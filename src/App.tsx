import { Heart, Star } from "react-feather";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-[170px]">
        <div className="grid px-3 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-6 mb-16 grid-cols-4 gap-4">
          {[
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/2a2834b6-7061-4b73-a01a-4ab8d638df68.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/9da940a2-82d0-4efc-808e-381292ac5321.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/c579efd0-3a7a-4132-8bbb-cf7eeadc9806.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/2a2834b6-7061-4b73-a01a-4ab8d638df68.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/miso/Hosting-52068342/original/a02a7d4d-a1bc-418f-a6de-970d41beade0.jpeg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
            {
              name: "Diani Beach,Kenya",
              photo:
                "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720",
              price: "$455",
              rating: "4.3",
              address: "Kisite-Mpunguti Marine National Park",
            },
          ].map((e, index) => {
            return <PCard key={index} e={e} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
function PCard({ e }: any) {
  return (
    <div className="mb-4 flex flex-col">
      <div className="h-56 w-full relative rounded-md overflow-hidden ">
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
        <img className="h-full w-full" src={e.photo} alt="" />
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
