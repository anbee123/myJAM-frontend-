import Image1 from '../assets/images/m1.png'
import Image2 from '../assets/images/m2.png'
import Image3 from '../assets/images/m3.png'
import Image4 from '../assets/images/m4.png'
import Image5 from '../assets/images/m5.png'
import Image6 from '../assets/images/m6.png'
import Image7 from '../assets/images/m7.png'
import Image8 from '../assets/images/m8.png'
import Image9 from '../assets/images/m9.png'
import Image10 from '../assets/images/m10.png'
import { useAppContext } from "../context"

export const genreListData = [
  {key: 'acoustic', title: 'Acoustic', image: Image1},
  {key: 'ambient', title: 'Ambient', image: Image2},
  {key: 'blues', title: 'Blues', image: Image3},
  {key: 'classical', title: 'Classical', image: Image4},
  {key: 'pop', title: 'Pop', image: Image5},
  {key: 'chillout', title: 'Chillout', image: Image6},
  {key: 'disco', title: 'Disco', image: Image7},
  {key: 'drumandbass', title: 'Drum & bass', image: Image8},
  {key: 'downtempo', title: 'Downtempo', image: Image9},
  {key: 'other', title: 'Other', image: Image10},
]

const CategoryList = ({setGenre}) => {
  const { user } = useAppContext()
  return (
    <div>
      <div className="bg-white/30 h-32">
        <h2 className="m-0 px-0 py-4 text-6xl font-semibold text-transparent bg-[linear-gradient(to_right,#553c9a,#ee4b2b,#00c2cb,#ff7f50,#553c9a)] bg-clip-text bg-[length:200%] bg-[-200%] animate-[animated-gradient_3s_infinite_alternate-reverse]">
          {user ? 'Welcome to myJAM' : 'Login for more Genres!'}
        </h2>
      </div>
      <div className="relative flex justify-around mx-12 my-0 bottom-9">
        {(user ? genreListData : genreListData.slice(0, 5)).map(item => (
          <div className="flex flex-col w-20 break-words items-center cursor-pointer m-2" key={item.key} onClick={() => setGenre(item.key)}>
            <img className="w-[50px] h-[50px] rounded-[50%]" src={item.image} alt={item.title}/>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
