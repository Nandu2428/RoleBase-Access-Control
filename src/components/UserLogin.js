import { useNavigate,useParams } from "react-router-dom";
import profile from "../Images/profile-user.png";
import { useState } from "react";
import pic1 from "../Images/pic1.webp"
import pic2 from "../Images/pic2.webp";
import pic3 from "../Images/pic3.webp";
import pic4 from "../Images/pic4.webp";
import { useAuth } from "../utils/Auth";



const UserLogin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userName } = useParams();

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEdit = () => {
    navigate("/edit/"+userName);
    setDropdownOpen(false); 
  };

  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="relative h-16 border-2 shadow-md flex justify-between items-center px-6 mx-4">
        <h1 className="font-bold text-xl text-purple-700">User DashBoard</h1>
        <button onClick={handleClick} className="focus:outline-none">
          <img className="w-12 rounded-full" src={profile} alt="Profile" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-6 top-14 w-40 bg-white border rounded-md shadow-lg">
            <ul>
              <li
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={handleEdit}
              >
                Edit Profile
              </li>
              <li
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={logout}
              >
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 md:px-10 lg:px-20">
        {/* Title Section */}
        <h1 className="font-extrabold text-3xl text-center my-8 text-orange-500">
          Welcome!! Story Of The Day
        </h1>
        <h2 className="font-bold text-2xl text-center my-4 text-lime-900">
          The Tale of the Jaguar and the Bat
        </h2>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row">
          <p className="text-gray-700 text-justify lg:w-2/3 lg:mr-6">
            In the heart of the Mesoamerican jungles, where emerald leaves
            shield the earth from the scorching sun and the songs of exotic
            birds echo through the canopy, a tale of ancient wisdom and rivalry
            unfolds. This is the story of two unlikely creatures—a jaguar and a
            bat—whose fates entwined in a dance of darkness and light, strength
            and cunning. Their legend is etched into the soul of the jungle,
            whispered by the wind and remembered in the songs of the elders.
            <br />
            <br />
            <img
              className="rounded-lg shadow-md my-4 block lg:hidden"
              src={pic1}
              alt="Story1"
            />
            <h2 className="font-bold mb-2">The Rising Shadows</h2>
            The jaguar, majestic and ferocious, ruled the land. His golden eyes
            pierced through the night, and his roars shook the earth beneath his
            padded paws. His name was Xbalan, meaning "Heart of the Earth," and
            he was revered as the jungle's protector, feared by all who dwelled
            within its boundaries.
            <br></br> <br></br>
            But Xbalan was not without his challenges. He bore the burden of
            guarding the sacred Cenote, a mystical spring said to be the gateway
            to the spirit world. Many sought its powers, and Xbalan thwarted
            intruders with unrelenting ferocity.<br></br> Yet, amidst the
            jaguar's reign, there was another presence—silent and elusive. The
            bat, known as Chimal, flitted through the night skies. Chimal was a
            creature of shadows, small and often overlooked, but his sharp eyes
            missed nothing. While Xbalan ruled with strength, Chimal observed
            with wit. <br></br> One fateful evening, as the moon rose high,
            Chimal descended from his roost to drink from the Cenote. He saw
            Xbalan resting nearby, his sleek body silhouetted against the
            glimmering water. Chimal had heard tales of the jaguar's might but
            wondered if brute force was enough to claim dominion over the sacred
            spring.
            <br />
            <br />
            <h1 className="font-bold mb-2">The First Encounter</h1>
            Chimal ventured closer, his wings silent as the breeze. He addressed
            Xbalan with a respectful tone. “Great Xbalan, ruler of the land, why
            do you guard the Cenote so fiercely? Do you not trust the spirits to
            protect their own realm?”
            <br></br> <br></br>
            Xbalan’s ears twitched, and his gaze fixed on the bat. “The spirits
            chose me, small one, to keep the unworthy away. Why do you ask, when
            you, a creature of the night, should know the value of sacred duty?”
            <br></br> <br></br>
            Chimal tilted his head. “I ask not to challenge your duty but to
            understand if strength alone suffices. What if a foe you cannot
            outmatch comes for the Cenote? Will strength be enough?”
            <br></br> <br></br>
            Xbalan growled softly, intrigued yet cautious. “And what would you
            propose, little one?”
            <br />
            <br />
            <img
              className="rounded-lg shadow-md my-4 block lg:hidden"
              src={pic2}
              alt="Story2"
            />
            Chimal smiled, baring his tiny fangs. “Let us test this question. I
            challenge you to a contest of wits and endurance. If I win, you must
            share your guardianship with me. If you win, I will serve you as
            your eyes in the night.”
            <br /> <br />
            <h2 className="font-bold mb-2">The Trails Begins</h2>
            The first trial was a test of endurance. Chimal proposed they cross
            the jungle to the Mountain of the Moon, a treacherous path fraught
            with obstacles. Xbalan leaped into action, his powerful limbs
            carrying him swiftly over roots and rocks. Chimal, though small, had
            the advantage of flight, gliding effortlessly through the trees.
            <br />
            <br />
            At the mountain’s base, Xbalan arrived first, his sides heaving with
            exertion. Chimal soon followed, unharmed. “You are swift, Xbalan,
            but the mountain is yet to be climbed,” the bat remarked.
            <br />
            <br />
            The jaguar growled, ascending the steep cliffs with claws digging
            into the stone. Chimal, meanwhile, found crevices to roost in and
            rested briefly before continuing. By the time they reached the peak,
            Xbalan was weary, but Chimal appeared fresh. He had used cunning to
            conserve his energy.
            <br />
            <br />
            <h2 className="font-bold mb-2">The Test of Wit</h2>
            Back at the Cenote, the second trial awaited—a game of riddles posed
            by the spirits. The Cenote shimmered as the spirits emerged, their
            ethereal voices echoing. <br />
            <br />
            “First riddle,” the spirits intoned, “I have cities but no houses,
            forests but no trees, and rivers but no water. What am I?” <br />
            <br />
            Xbalan frowned, his mind racing. Chimal answered confidently, “A
            map.” <br />
            <br />
            The spirits nodded. Xbalan growled low, frustrated but determined.
            <br />
            <br />
            “Second riddle,” the spirits said, “What has roots as nobody sees,
            is taller than trees, up, up it goes, and yet it never grows?”{" "}
            <br />
            <br />
            Xbalan paused, his pride wounded by the bat’s quick thinking.
            Finally, he answered, “A mountain.” <br />
            <br />
            The spirits acknowledged his response. Chimal chuckled, enjoying the
            contest. Both creatures had proven their wit, but the spirits
            declared the bat the winner for his swift answers. <br />
            <br />
            <h2 className="font-bold mb-2">Unity in Purpose</h2>
            The final trial was one of unity. The spirits decreed that the two
            guardians must work together to defend the Cenote from an impending
            threat—a horde of invaders seeking to plunder the sacred waters.
            <br />
            <br />
            <img
              className="rounded-lg shadow-md my-4 block lg:hidden"
              src={pic3}
              alt="Story3"
            />
            The invaders came at dusk, their torches lighting the jungle path.
            Xbalan roared, leaping into the fray, his claws a blur of ferocity.
            Chimal used his sharp teeth and wings to distract the intruders,
            diving at their faces and disorienting them. <br></br>
            <br />
            Together, they drove the invaders away. The spirits, watching from
            the Cenote, were pleased. “You have proven that strength and cunning
            are both needed to guard the sacred spring. From this day, the
            jaguar and the bat shall share the duty of guardianship.”
            <h1 className="font-bold mb-2">The Eternal Guardians</h1>
            hough different in nature, Xbalan and Chimal forged a bond of
            respect and understanding. The jungle sang of their partnership, and
            the Cenote remained untouched by unworthy hands.<br></br>
            <br />
            <br />
            <img
              className="rounded-lg shadow-md my-4 block lg:hidden"
              src={pic4}
              alt="Story4"
            />
            Legends of the jaguar and the bat spread across Mesoamerica,
            inspiring awe in those who heard the tale. Xbalan’s strength and
            Chimal’s wit became symbols of balance, reminding all who listened
            that even the most unlikely allies could achieve greatness together.
            <br /><br />
            <h2 className="font-bold mb-2">Epilogue: A Lesson for the Ages</h2>
            As centuries passed, the story of the jaguar and the bat became a
            cornerstone of wisdom for the people of the land. It taught that
            strength without wisdom could falter, and wisdom without strength
            could fail. The jungle thrived under their watch, its harmony
            undisturbed.<br></br>
            <br />
            Even now, when the moon casts its silver glow over the jungle, one
            can imagine the golden eyes of Xbalan and the silent wings of
            Chimal, ever vigilant, ever united.
          </p>
          <div className="hidden lg:flex flex-col space-y-48 mt-12 lg:w-1/3">
            <img
              className="rounded-lg shadow-md h-96 w-full"
              src={pic1}
              alt="Story"
            />
            <img className="rounded-lg shadow-md h-96" src={pic2} alt="Story" />
            <img className="rounded-lg shadow-md h-96" src={pic3} alt="Story2" />
            <img className="rounded-lg shadow-md h-96" src={pic4} alt="Story3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
