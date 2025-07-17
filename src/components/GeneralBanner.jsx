import React from "react";
import Video from "./Video";

const GeneralBanner = (props) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${props.positionOfBanner}`} // Change lg:order-last to lg:order-first
          >
            <img src={props.Image} className={`absolute inset-0 h-full w-full object-cover ${props.ImagePref}`} />
            {props.VideoPref === "hidden" ? null : <Video className={props.VideoPref} videoId={props.videoId} />}
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-left">{props.Title}</h2>{" "}
            <div className="text-[#000]">
              {typeof props.Content === "string" ? (
                // Deteksi apakah string multiline dengan angka (list)
                props.Content.trim().match(/^\d+\./gm) ? (
                  <ul className="list-decimal pl-5 space-y-2">
                    {props.Content.split(/\n|\r\n/).map((item, idx) => (
                      <li key={idx}>{item.replace(/^\d+\.\s*/, "")}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{props.Content}</p>
                )
              ) : (
                props.Content
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralBanner;
