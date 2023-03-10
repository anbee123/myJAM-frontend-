import MusicItem from "./MusicItem"

const MusicList = ({musics}) => {
  return (
    <div>
      This is music list
      {musics.map(item => (
        <MusicItem musicItem={item} />
      ))}
    </div>
  )
}
export default MusicList