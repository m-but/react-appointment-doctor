import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            similique culpa ipsam, laboriosam tenetur fugit? Velit quasi
            accusamus excepturi rerum autem nemo dicta, assumenda vel porro
            reprehenderit culpa necessitatibus. Doloribus, alias? Modi quisquam
            aspernatur ducimus eum nostrum! Voluptatem, repellat dolorum eaque
            inventore, minima consectetur error modi cum optio eum officiis!
          </p>
        </div>

        {/* center section */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+62 812 345 6789</li>
            <li>mbutdev@mail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
