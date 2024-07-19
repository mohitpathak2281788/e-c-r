import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-10 text-gray-800">
      <div className="flex flex-wrap justify-between">
        <div className="m-5 flex-1 min-w-[200px]">
          <h3 className="text-lg mb-5">Shop</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">RDY Prebuilt Computers</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Easy Builder</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Customizable Gaming PCs</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Gaming PCs</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Gaming Laptops</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Gear Store</a></li>
          </ul>
        </div>
        <div className="m-5 flex-1 min-w-[200px]">
          <h3 className="text-lg mb-5">Support</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Support Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Order Status</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Drivers & Downloads</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Return Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Warranty</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">FAQ / Knowledge Base</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shipping Details</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Recycling</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Reward Point</a></li>
          </ul>
        </div>
        <div className="m-5 flex-1 min-w-[200px]">
          <h3 className="text-lg mb-5">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Customer Reviews</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Press Release</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Financing</a></li>
          </ul>
        </div>
        <div className="m-5 flex-1 max-w-[300px]">
          <h3 className="text-lg mb-5">Contact Us: 888-462-3899</h3>
          <p className="my-3">Get gaming news and iBUYPOWER promotions and offers!</p>
          <form>
            <input type="email" placeholder="Enter your email" className="border border-gray-400 p-2 mr-2" />
            <button type="submit" className="bg-blue-500 text-white p-2">Subscribe</button>
          </form>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-square-twitter"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-500"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-300 pt-5">
        <p className="mb-2">iBUYPOWER is powered by:</p>
        <div className="mb-5">
          <img src="/mnt/data/image.png" alt="Powered by Brands" className="mx-auto" />
        </div>
        <p className="mb-2">View All iBUYPOWER PRODUCTS CAN BE PURCHASED FROM:</p>
        <div className="mb-5">
          <img src="/mnt/data/image.png" alt="Retail Partners" className="mx-auto" />
        </div>
        <p className="mb-2">This website uses cookies to ensure you get the best experience on our website. You may view our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>. <button className="bg-blue-500 text-white p-2 ml-2">Accept</button></p>
      </div>
    </div>
  );
}

export default Footer;
