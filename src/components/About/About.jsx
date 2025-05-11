import './About.css'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Get Your Github Card!
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Put in your username and your custom github card will be generated.
                          <br /><b>Put the username in the url as: localhost:5173/usercard/<i>yourusername</i></b>
                      </p>
                      <p className="mt-4 text-gray-600">
                          The card comprises of github your profile picture, name, followers, number of repositories. 
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}