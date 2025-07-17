import React, { Component } from "react";
import "aos/dist/aos.css";

class ProjectForm extends Component {
  render() {
    const { title, desc, imgSrc, imgAlt } = this.props;
    return (
      <div className="flex flex-col items-start bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-4">
        <div className="w-full flex justify-center">
          <img src={imgSrc} alt={imgAlt} className="w-1/2 md:w-1/3 rounded-lg object-cover" />
        </div>
        <div className="text-inherit text-white w-full">
          <h2 className="text-2xl font-semibold mb-2 text-left">{title}</h2>
          <p className="text-base leading-relaxed text-left">{desc}</p>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
