import MusicCard from "./MusicItem"

const MusicList = ({musics}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {musics && musics.map((item, index) => (
          item && <MusicCard key={index} musicItem={item} />
        ))}
      </div>
    </div>
  )
}
export default MusicList
