import { Link } from "react-router-dom";
const UserLogin = () => {
    return (
      <div>
        <div>
          <div className="text-right h-14 bg-green-500">
            <Link to="/login" className="m-11 pt-8 font-bold"> LogOut </Link>
            </div>
          <h1 className="font-extrabold text-3xl flex justify-center m-10 text-orange-500">
            Welcome!! Story Of The Day
          </h1>
          <h2 className="font-bold text-2xl flex justify-center m-10 text-lime-900">
            Parable Of The Pencil
          </h2>
          <div className="flex">
            <p className="ml-4 mr-5 text-justify">
              The Pencil Maker took the pencil aside, just before putting him
              into the box. “There are 5 things you need to know,” he told the
              pencil, “Before I send you out into the world. Always remember
              them and never forget, and you will become the best pencil you can
              be.” One: “You will be able to do many great things, but only if
              you allow yourself to be held in someone’s hand.” Two: “You will
              experience a painful sharpening from time to time, but you’ll need
              it to become a better pencil.” Three: “You will be able to correct
              any mistakes you might make.” Four: “The most important part of
              you will always be what's inside.” And Five: “On every surface you
              are used on, you must leave your mark. No matter what the
              condition, you must continue to write.” The pencil understood and
              promised to remember, and went into the box with purpose in its
              heart. Now replacing the place of the pencil with you. Always
              remember them and never forget, and you will become the best
              person you can be. One: “You will be able to do many great things,
              but only if you allow yourself to be held in God’s hand. And allow
              other human beings to access you for the many gifts you possess.”
              Two: “You will experience a painful sharpening from time to time,
              by going through various problems in life, but you’ll need it to
              become a stronger person.” Three: “You will be able to correct any
              mistakes you might make.” Four: “The most important part of you
              will always be what’s on the inside.” And Five: “On every surface
              you walk through, you must leave your mark. No matter what the
              situation, you must continue to do your duties.” Allow this
              parable on the pencil to encourage you to know that you are a
              special person and only you can fulfill the purpose to which you
              were born to accomplish.
            </p>
            <img
              className="mr-4"
              src="https://plus.unsplash.com/premium_photo-1664110691134-df4aa034c322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlbmNpbHN8ZW58MHx8MHx8fDA%3D"
              alt="njnc"
            ></img>
          </div>
        </div>
      </div>
    );
};
export default UserLogin;